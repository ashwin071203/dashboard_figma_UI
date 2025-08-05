import React from 'react';
import './components.css';

const ProfileHeader = ({ 
  userName = "Thanh Pham",
  userImage,
  notificationImage,
  showDropdown = true,
  className = ""
}) => {
  return (
    <div className={`prof d-flex align-items-center justify-content-between mb-4 p-4 ${className}`}>
      <div className="d-flex align-items-center gap-2">
        <div className="rounded-circle border border-white shadow-sm p-1 bg-white">
          <img src={notificationImage} alt="User" className="rounded-circle" />
        </div>

        <div className="rounded-4 border-white bg-white p-1 px-1 gap-1">
          <img src={userImage} alt="User" className="gap-1" width={36} height={36} />
          <span className="fw-semibold small bg-white">{userName}</span>
          {showDropdown && <select className="select-opt"></select>}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
