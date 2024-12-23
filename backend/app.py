from flask import Flask, render_template, Response, jsonify
import cv2
from video import webcam
import json
import time
import threading
import kociemba
app = Flask(__name__)

stream_active = False

def generate_frames():
    """Video streaming generator function."""
    global stream_active
    stream_active = True
    
    while stream_active:
        try:
            if not webcam.cam.isOpened():
                print("Reopening camera...")
                webcam.cam = cv2.VideoCapture(0)
                time.sleep(0.5)
                continue

            success, frame = webcam.cam.read()
            if not success:
                print("Failed to read frame")
                time.sleep(0.1)
                continue

            webcam.frame = frame
            webcam.process_frame()

            try:
                encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), 85]
                ret, buffer = cv2.imencode('.jpg', webcam.frame, encode_param)
                if not ret:
                    continue
                
                frame_bytes = buffer.tobytes()
                
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n'
                       b'Content-Length: ' + str(len(frame_bytes)).encode() + b'\r\n'
                       b'\r\n' + frame_bytes + b'\r\n')
                       
                time.sleep(0.03)  
                
            except Exception as e:
                print(f"Frame encoding error: {e}")
                continue

        except Exception as e:
            print(f"Stream error: {e}")
            time.sleep(0.1)
            continue

@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    """Video streaming route."""
    global stream_active
    stream_active = True
    
    return Response(
        generate_frames(),
        mimetype='multipart/x-mixed-replace; boundary=frame',
        headers={
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    )

@app.route('/stop_stream')
def stop_stream():
    """Stop the video stream."""
    global stream_active
    stream_active = False
    return jsonify({'status': 'stopped'})

@app.route('/capture', methods=['POST'])
def capture():
    """Capture current frame state."""
    try:
        print("Starting capture process...")
        webcam.update_snapshot_state()
        print("Capture completed successfully")
        return jsonify({'success': True})
    except Exception as e:
        print(f"Capture error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 500
@app.route('/solve', methods=['POST'])
def solve():
    """Get solution for current cube state."""
    try:
        if len(webcam.result_state.keys()) != 6:
            return jsonify({'error': 'Not all sides scanned'}), 400
        
        if not webcam.scanned_successfully():
            return jsonify({'error': 'Incorrect scan'}), 400
            
        if webcam.state_already_solved():
            return jsonify({'error': 'Cube already solved'}), 400
            
        notation = webcam.get_result_notation()
        
        try:
            solution = kociemba.solve(notation)
            moves = len(solution.split(' '))
            
            return jsonify({
                'solution': solution,
                'moves': moves,
                'notation': notation  
            })
            
        except Exception as e:
            print(f"Kociemba solve error: {str(e)}")
            return jsonify({'error': 'Could not solve cube state. Please try scanning again.'}), 400
            
    except Exception as e:
        print(f"Solve error: {e}")
        return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True, port=5002, threaded=True)