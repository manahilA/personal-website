/* src/App.js */
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [positions, setPositions] = useState([
    { top: '30%', left: '20%' },
    { top: '70%', left: '50%' },
    { top: '40%', left: '80%' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(positions.map(() => ({
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`
      })));
    }, 5000); // Change position every 5 seconds

    return () => clearInterval(interval);
  }, [positions]);

  return (
    <div className="background">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="pastel-flush"
          style={{ top: pos.top, left: pos.left }}
        ></div>
      ))}
    </div>
  );
}

export default App;
