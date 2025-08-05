import React from 'react';
import './components.css';
import bar from '../assets/bar.png';
import load from '../assets/load.png';
import wave from '../assets/wave.png';
import next from '../assets/next.png';
import ring from '../assets/ring.png';
import pause from '../assets/pause.png';
import profilePic from '../assets/profile.png';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import n1 from '../assets/Notification.png';
import next2 from '../assets/next (1).png';

// Import the reusable components
import ProfileHeader from './ProfileHeader';
import AudioPlayer from './AudioPlayer';
import NextBooks from './NextBooks';
import DailyWork from './DailyWork';


const RightSidebar = ({
  userName = "Thanh Pham",
  currentBook = { title: "Wonder", author: "R.J. Palacio" },
  customNextBooks,
  onBookClick,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  isOpen = false,
  onClose
}) => {
  const nextBooks = customNextBooks || [
    { title: 'Fault In Our Stars', author: 'John Green', time: '02:20:03', img: book1 },
    { title: 'Never Eat Alone', author: 'Keith Ferrazzi', time: '02:20:03', img: book2 },
    { title: 'The Book Thief', author: 'Markus Zukas', time: '02:20:03', img: book3 },
  ];

  return (
    <>
      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="mobile-sidebar-overlay d-md-none position-fixed w-100 h-100"
          
          onClick={onClose}
        />
      )}
      
      {/* Right Sidebar */}
      <aside className={`right-sidebar ${isOpen ? 'mobile-sidebar-open' : ''}`}>
        {/* Mobile Close Button - Only visible on mobile when open */}
        {isOpen && (
          <button
            className="btn btn-light rounded-circle position-absolute d-md-none mobile-close-btn"
            onClick={onClose}
            
            title="Close"
          >
            ×
          </button>
        )}
        
        {/* Profile Header */}
        <ProfileHeader
          userName={userName}
          userImage={profilePic}
          notificationImage={n1}
        />

        {/* Audio Player */}
        <AudioPlayer
          currentBook={currentBook}
          bookImages={[book1, book2, book3]}
          waveImage={wave}
          playIcon={ring}
          pauseIcon={pause}
          nextIcon={next}
          prevIcon={next2}
          onPlay={onPlay}
          onPause={onPause}
          onNext={onNext}
          onPrevious={onPrevious}
        />

        {/* Next Books */}
        <NextBooks
          books={nextBooks}
          onBookClick={onBookClick}
        />

        {/* Daily Work */}
        <DailyWork
          barImage={bar}
          loadImage={load}
        />
      </aside>
    </>
  );
};

export default RightSidebar;
