import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState('09:45');

  useEffect(() => {
    // Update time function
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Background glow effects */}
      <div className="bg-glow-bottom"></div>
      <div className="bg-glow-top"></div>
      
      {/* Abstract wavy pattern */}
      <div className="bg-pattern"></div>
      
      {/* Mobile phone frame */}
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="screen-pattern"></div>
          
          {/* Status Bar */}
          <div className="status-bar">
            <div className="time">{currentTime}</div>
            <div className="status-icons">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Unity WebGL Game Content */}
          <div className="unity-content">
            <iframe 
              id="unity-frame" 
              src="TapziWebDummyBuild/index.html" 
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              title="Tapzi Unity Game"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

