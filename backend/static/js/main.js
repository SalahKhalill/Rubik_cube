document.addEventListener('DOMContentLoaded', function() {
    const captureBtn = document.getElementById('captureBtn');
    const solveBtn = document.getElementById('solveBtn');
    const solutionDiv = document.getElementById('solution');

    // Handle capture button click
    captureBtn.addEventListener('click', async function() {
        try {
            const response = await fetch('/capture', {
                method: 'POST'
            });
            const data = await response.json();
            
            if (!data.success) {
                solutionDiv.innerHTML = '<p class="error">Failed to capture side</p>';
            }
        } catch (error) {
            console.error('Error:', error);
            solutionDiv.innerHTML = '<p class="error">Error capturing side</p>';
        }
    });

    // Handle solve button click
    solveBtn.addEventListener('click', async function() {
        try {
            const response = await fetch('/solve', {
                method: 'POST'
            });
            const data = await response.json();
            
            if (data.error) {
                solutionDiv.innerHTML = `<p class="error">${data.error}</p>`;
            } else {
                solutionDiv.innerHTML = `<p>Solution: ${data.notation}</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            solutionDiv.innerHTML = '<p class="error">Error solving cube</p>';
        }
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            captureBtn.click();
        }
    });
}); 