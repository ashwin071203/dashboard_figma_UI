import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './components.css';

import logo from '../assets/logo.png';
import footer from '../assets/footer.png';
import a1 from '../assets/Home.png';
import a2 from '../assets/Category.png';
import a3 from '../assets/Heart.png';
import a4 from '../assets/Folder.png';
import a5 from '../assets/Setting.png';
import a6 from '../assets/Logout.png';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', icon: a1, label: 'Home' },
    { path: '/categories', icon: a2, label: 'Categories' },
    { path: '/favorite', icon: a3, label: 'Favorite' },
    { path: '/library', icon: a4, label: 'Your Library' },
    { path: '/settings', icon: a5, label: 'Setting' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1240;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSidebarVisible = !isMobile || isOpen;

  return (
    <>
      {isMobile && !isOpen && (
        <button
          className="btn position-fixed top-3 start-3 m-3 z-3"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {isSidebarVisible && (
        <aside className="sidebar sidebarrr position-fixed top-0 start-0 bg-white d-flex flex-column">
          <br />

          <div className="d-flex align-items-center justify-content-between px-5">
            {!isMobile && (
              <div className="d-flex align-items-center gap-3">
                <img src={logo} alt="Logo" className="sidebar-logo" />
              </div>
            )}
            {isMobile && (
              <button className="btn ms-auto" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            )}
          </div>

          <br />
          <br />
          <br />

          <nav className="nav flex-column px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-pill mb-2 text-decoration-none ${
                    isActive ? 'active-link text-white' : 'text-secondary'
                  }`
                }
                onClick={() => isMobile && setIsOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`nav-icon-container d-flex align-items-center justify-content-center rounded-circle ${
                        isActive ? 'bg-white' : 'bg-light'
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.label} Icon`}
                        className="nav-icon"
                      />
                    </div>
                    <span className="text1 fw-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}

            <div className="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-pill mb-2 text-decoration-none text-secondary logout-hover">
              <div className="nav-icon-container d-flex align-items-center justify-content-center rounded-circle bg-light">
                <img src={a6} alt="Logout Icon" className="nav-icon" />
              </div>
              <span className="fw-medium">Log out</span>
            </div>
          </nav>

          <div className="p-4 text-center mt-auto">
            <img src={footer} alt="Footer" className="sidebar-footer-img" />
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
