import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div >
      <Sidebar />
      <div className='main-content'>
        <Header setSidebarOpen={setSidebarOpen} />
        <Outlet />
        <div>
          <RightSidebar />

        </div>
      </div>

    </div>
  )
}


export default Layout;
