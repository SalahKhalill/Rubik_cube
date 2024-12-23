import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/ThreeDPartsViewer.css'; 

const threeDParts = [
  {
    name: "Hinge",
    fileName: "Hinge.stl",
    thumbnail: "https://content.instructables.com/FY5/68H2/L3X13GJB/FY568H2L3X13GJB.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FYK/5WDB/L3X12XTQ/FYK5WDBL3X12XTQ.stl",
    svfLink: "https://content.instructables.com/FYK/5WDB/L3X12XTQ/forge-derivs/3ef8eced1/Hinge.svf"
  },
  {
    name: "Top Cover",
    fileName: "Top_cover.stl",
    thumbnail: "https://content.instructables.com/F84/785P/L3OGH68Z/F84785PL3OGH68Z.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F92/PTV9/L3OGH84J/F92PTV9L3OGH84J.stl",
    svfLink: "https://content.instructables.com/F92/PTV9/L3OGH84J/forge-derivs/b92d89e31/Top_cover.svf"
  },
  {
    name: "Servo_axis_inf",
    fileName: "Alternative_Servo_axis_inf.stl",
    thumbnail: "https://content.instructables.com/FTR/U0A1/L3OGH68W/FTRU0A1L3OGH68W.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FEF/8NHA/L3OGH847/FEF8NHAL3OGH847.stl",
    svfLink: "https://content.instructables.com/FEF/8NHA/L3OGH847/forge-derivs/c87abc1a1/Alternative_Servo_axis_inf.svf"
  },
  {
    name: "Alternative_Servo_axis_inf",
    fileName: "Alternative_Servo_axis_inf.stl",
    thumbnail: "https://content.instructables.com/FDF/H358/L3OGH84H/FDFH358L3OGH84H.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F3V/W6UC/L3OGH848/F3VW6UCL3OGH848.stl",
    svfLink: "https://content.instructables.com/F3V/W6UC/L3OGH848/forge-derivs/2150ae1b1/Alternative_Servo_axis_inf.svf"
  },
  {
    name: "Baseplate_front",
    fileName: "Baseplate_front.stl",
    thumbnail: "https://content.instructables.com/FM4/3TFQ/L5CH6NLW/FM43TFQL5CH6NLW.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FWY/HTFN/L5CGYVJS/FWYHTFNL5CGYVJS.stl",
    svfLink: "https://content.instructables.com/FWY/HTFN/L5CGYVJS/forge-derivs/7772b2f41/Baseplate_front.svf"
  },
  {
    name: "Baseplate_rear",
    fileName: "Baseplate_rear.stl",
    thumbnail: "https://content.instructables.com/FI3/63BU/L3OGGTWR/FI363BUL3OGGTWR.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FX5/U01D/L3OGH84A/FX5U01DL3OGH84A.stl",
    svfLink: "https://content.instructables.com/FX5/U01D/L3OGH84A/forge-derivs/747ce16e1/Baseplate_rear.svf"
  },
  {
    name: "Cube_holder",
    fileName: "Cube_holder.stl",
    thumbnail: "https://content.instructables.com/FK7/97IH/L3OGH854/FK797IHL3OGH854.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F9D/R4Q3/L3OGH84B/F9DR4Q3L3OGH84B.stl",
    svfLink: "https://content.instructables.com/F9D/R4Q3/L3OGH84B/forge-derivs/4054324c1/Cube_holder.svf"
  },
  {
    name: "PCB_cover_display",
    fileName: "PCB_cover_display.stl",
    thumbnail: "https://content.instructables.com/F5T/STUL/L3X13ICW/F5TSTULL3X13ICW.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F5H/WBKR/L3X12XRR/F5HWBKRL3X12XRR.stl",
    svfLink: "https://content.instructables.com/F5H/WBKR/L3X12XRR/forge-derivs/9713075b1/PCB_cover_display.svf"
  },
  {
    name: "PCB_cover_display_UsbC",
    fileName: "PCB_cover_display_UsbC.stl",
    thumbnail: "https://content.instructables.com/FF9/H9DJ/L832AWN2/FF9H9DJL832AWN2.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FPH/K0DQ/L73CBE1U/FPHK0DQL73CBE1U.stl",
    svfLink: "https://content.instructables.com/FPH/K0DQ/L73CBE1U/forge-derivs/40d4dfda1/FPHK0DQL73CBE1U.svf"
  },
  {
    name: "Personaliz_plate_01",
    fileName: "Personaliz_plate_01.stl",
    thumbnail: "https://content.instructables.com/FXL/1CPD/L3VLNONX/FXL1CPDL3VLNONX.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FI4/02P2/L3VLQ1C0/FI402P2L3VLQ1C0.stl",
    svfLink: "https://content.instructables.com/FI4/02P2/L3VLQ1C0/forge-derivs/4b44dd181/Personaliz_plate_01.svf"
  },
  {
    name: "Personaliz_plate",
    fileName: "Personaliz_plate.stl",
    thumbnail: "https://content.instructables.com/FNW/VW72/L3VLNLQJ/FNWVW72L3VLNLQJ.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FSX/I6GA/L3VLQ1BZ/FSXI6GAL3VLQ1BZ.stl",
    svfLink: "https://content.instructables.com/FSX/I6GA/L3VLQ1BZ/forge-derivs/c3ce6ef31/Personaliz_plate.svf"
  },
  {
    name: "PiCamera_holder_V1_V2_V3",
    fileName: "PiCamera_holder_V1_V2_V3.stl",
    thumbnail: "https://content.instructables.com/FAM/27ZT/LWUP2GS4/FAM27ZTLWUP2GS4.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FKR/D8OO/LWUP2GR1/FKRD8OOLWUP2GR1.stl",
    svfLink: "https://content.instructables.com/FKR/D8OO/LWUP2GR1/forge-derivs/65281d251/PiCamera_holder_V1_V2_V3.svf"
  },
  {
    name: "Picamera_holder_frame",
    fileName: "Picamera_holder_frame.stl",
    thumbnail: "https://content.instructables.com/FO1/HQLD/L3OGIVKG/FO1HQLDL3OGIVKG.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F0J/7N81/L3OGH84E/F0J7N81L3OGH84E.stl",
    svfLink: "https://content.instructables.com/F0J/7N81/L3OGH84E/forge-derivs/82a434601/Picamera_holder_frame.svf"
  },
  {
    name: "Servo_axis_inf",
    fileName: "Servo_axis_inf.stl",
    thumbnail: "https://content.instructables.com/F0C/T6N4/L3OGGTWU/F0CT6N4L3OGGTWU.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/F4O/EA30/L3OGH84F/F4OEA30L3OGH84F.stl",
    svfLink: "https://content.instructables.com/F4O/EA30/L3OGH84F/forge-derivs/30627cc31/Servo_axis_inf.svf"
  },
  {
    name: "Servo_axis_sup",
    fileName: "Servo_axis_sup.stl",
    thumbnail: "https://content.instructables.com/F3C/IC54/L3OGGTWX/F3CIC54L3OGGTWX.png?auto=webp&frame=1",
    downloadLink: "https://content.instructables.com/FW0/1DKI/L3OGH84G/FW01DKIL3OGH84G.stl",
    svfLink: "https://content.instructables.com/FW0/1DKI/L3OGH84G/forge-derivs/b942aa811/Servo_axis_sup.svf"
  },
];

const ThreeDPartsViewer = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const open3DViewer = (part) => {
    setSelectedPart(part);
  };

  const close3DViewer = () => {
    setSelectedPart(null);
  };

  return (
    <div className="container">
      <h1 className="title">3D Parts </h1>
      
      <ul className="parts-list">
        {threeDParts.map((part) => (
          <li key={part.fileName} className="part-item">
            <div className="part-content">
              <img 
                src={part.thumbnail} 
                alt={part.name} 
                className="part-thumbnail"
              />
              <div className="part-info">
                <h2 className="part-name">{part.name}</h2>
                <div className="buttons">
                  <a 
                    href={part.downloadLink} 
                    download={part.fileName}
                    className="download-btn"
                  >
                    Download
                  </a>
                  <button 
                    onClick={() => open3DViewer(part)}
                    className="view-3d-btn"
                  >
                    View 3D
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedPart && (
        <div className="modal">
          <div className="modal-content">
            <button 
              onClick={close3DViewer}
              className="close-btn"
            >
              <X size={24} />
            </button>
            <div className="viewer-container">
              <h2 className="viewer-title">{selectedPart.name} - 3D Viewer</h2>
              <iframe 
                src={`https://content.instructables.com/static/3dviewer/index.html?svf=${encodeURIComponent(selectedPart.svfLink)}`}
                className="iframe-viewer"
                sandbox="allow-scripts allow-same-origin"
                title={`3D Viewer - ${selectedPart.name}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDPartsViewer;
