import { Search } from 'lucide-react';
import './components.css';
import logo from '../assets/logo.png';
import flagIcon from '../assets/your-flag-file.png'; 

const Header = ({ onMenuClick }) => {
  return (
    <header className="navbar navbar-expand-lg p-4">
        <div className="search-bar-wrapper position-relative w-100">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search your book..."
            />
            <button
              type="submit"
              className="search-button position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center justify-content-center"
            >
              <Search size={16} color="#22c55e" />
            </button>
          </div>
          <div className="flag d-flex align-items-center gap-2">
            <span className="fw-semibold">EN</span>
            <img
              src={flagIcon}
              alt="Language"
              width={28}
              height={28}
              className="header-flag-icon rounded-circle"
            />
          </div>
      
    </header>
  );
};

export default Header;
