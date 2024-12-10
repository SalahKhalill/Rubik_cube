import React from 'react';
import '../styles/history.css'; 
import rubiksImage from '../pics/rubiks-image.png'; 

function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-content">
        <div className="text-content">
          <h2><strong>Where did the Rubik’s Cube come from?</strong></h2>
          <p>
            Was it an accident? School project? Did aliens make it? 
            The world’s most iconic puzzle has a rich history. Learn about it here!
          </p>
            <a href="https://en.wikipedia.org/wiki/Ern%C5%91_Rubik#:~:text=Ern%C5%91%20Rubik%20(Hungarian%3A%20%5B%CB%88rubik,Master%20Edition%2C%20and%20Rubik's%20Snake." 
          target="_blank" 
          rel="noopener noreferrer"
          className='linkk'>
        <button class="btn">
        <span class="btn-text">Learn More !</span>
        </button>                  
        </a>
        </div>
        <div className="image-content">
          <img 
            src={rubiksImage} 
            alt="Rubik's Cube Creator with Cubes" 
            className="rubiks-image" 
          />
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
