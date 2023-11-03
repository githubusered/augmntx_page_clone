import React, { useState, useEffect } from 'react';
import './CircularProgressBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const newProgress = (scrollY / maxScroll) * 100;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial progress calculation

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="circular-progress-container" onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
      <div
        className="circular-progress"
        style={{ background: `conic-gradient(#007bff 0% ${progress}%, transparent ${progress}% 100%)` }}
      >
        <div  className='au'><FontAwesomeIcon icon={faArrowUp} /></div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
