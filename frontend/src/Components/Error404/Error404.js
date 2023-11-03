import React from 'react'

import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="spinner"></div> {}
      <div className="error-text">
        <h1>404 - Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </div>
    </div>
  )
}

export default Error404
