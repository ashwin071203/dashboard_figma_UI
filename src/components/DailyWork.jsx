import React from 'react';
import './components.css';

const DailyWork = ({ 
  title = "Daily Work",
  subtitle = "Books this week",
  barImage,
  loadImage,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-4 p-3 shadow-sm mt-auto ${className}`}>
      <h6 className="fw-bold mb-3">{title}</h6>
      <div className="bg-success bg-opacity-10 rounded-4 text-center py-3">
        <div className="fw-semibold mb-2 text-success">{subtitle}</div>
        {barImage && <img src={barImage} alt="" className='p-1' />}
        {loadImage && <img src={loadImage} alt="" className='p-1' />}
      </div>
    </div>
  );
};

export default DailyWork;
