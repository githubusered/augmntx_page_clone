import React from 'react';

import './Loading.css';

const Loading = () => {
  return (
    
      <div className="loading-container">
        <div className="loading-spinner"></div>
      <div className="loading">
      Loading
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      </div>
    </div>
  
  );
};

export default Loading;
