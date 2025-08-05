import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { User } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setMobileProfileOpen(true);
  };

  const handleProfileClose = () => {
    setMobileProfileOpen(false);
  };

  return (
    <div>
      <Sidebar />
      
      {/* Mobile Profile Button - Fixed position, only visible on mobile */}
      <button
        onClick={handleProfileClick}
        className="btn btn-success rounded-circle position-fixed top-0 end-0 m-3 "

        title="Profile"
      >
        <User size={24} />
      </button>
      
      <div className='main-content'>
        <div className="d-none d-md-block">
          <Header 
            setSidebarOpen={setSidebarOpen} 
            onProfileClick={handleProfileClick}
          />
        </div>
        <Outlet />
        <div>
          <RightSidebar 
            isOpen={mobileProfileOpen}
            onClose={handleProfileClose}
          />
        </div>
      </div>
    </div>
  )
}

export default Layout;
