import { useState } from 'react';
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
import n1 from '../assets/Notification.png'
import next2 from '../assets/next (1).png';


const RightSidebar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const nextBooks = [
    { title: 'Fault In Our Stars', author: 'John Green', time: '02:20:03', img: book1 },
    { title: 'Never Eat Alone', author: 'Keith Ferrazzi', time: '02:20:03', img: book2 },
    { title: 'The Book Thief', author: 'Markus Zukas', time: '02:20:03', img: book3 },
  ];

  return (
    <aside
      className="right-sidebar rightSide" 
    >
      {/* Profile Header */}
      <div className="prof d-flex align-items-center justify-content-between mb-4 p-4 ">
        <div className="d-flex align-items-center gap-2">
          <div className="rounded-circle border border-white shadow-sm p-1 bg-white">

            <img src={n1} alt="User" className="rounded-circle" />
          </div>

          <div className=" rounded-4 border-white   bg-white p-1 px-1 gap-1">

            <img src={profilePic} alt="User" className="gap-1" width={36} height={36} />
             <span className="fw-semibold small  bg-white">Thanh Pham</span>
          <select className="select-opt" ></select>
          </div>
         
        </div>
       
      </div>

      {/* Audio Player */}
      <div className="books1 bg-white rounded-4 shadow-sm w-313 h-331"><br />
        <div className="d-flex justify-content-center gap-2 mb-3">
          <img src={book1} alt="Book 1" className="book-small rounded-2" />
          <img src={book2} alt="Book 2" className="book-large rounded-2 shadow" />
          <img src={book3} alt="Book 3" className="book-small rounded-2" />
        </div>
        <div className="banner-text">

          <div className="fw-bold">Wonder</div>
          <small className="text-muted">R.J. Palacio</small>
        </div>
        <img src={wave} alt="" />

        <div className="d-flex justify-content-center gap-3 my-2">
          <button className="btn btn-light rounded-circle p-2 shadow-sm">
            <img src={next2} alt="" />
          </button>
          <button
            className={`btn rounded-circle p-2 shadow-sm ${isPlaying ? 'btn-success' : 'btn-light'
              }`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <img src={ring} alt="" />
            <img src={pause} alt="" className='pause'/>

          </button>
          <button className="btn btn-light rounded-circle p-2 shadow-sm">
            <img src={next} alt="" />
          </button>
        </div>
      </div>

      {/* Next Books */}
      <div className="mb-4">
        <h6 className="fw-bold mb-3">Next Books</h6>
        {nextBooks.map((book, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center gap-3 p-2 bg-white rounded-4 mb-2 shadow-sm book-item"
          >
            <img src={book.img} alt={book.title} width={40} height={55} className="rounded-2" />
            <div className="flex-grow-1">
              <div className="fw-semibold small">{book.title}</div>
              <div className="text-muted small">{book.author}</div>
            </div>
            <div className="text-success small fw-medium">{book.time}</div>
          </div>
        ))}
      </div>

      {/* Daily Work */}
      <div className="bg-white rounded-4 p-3 shadow-sm mt-auto">
        <h6 className="fw-bold mb-3">Daily Work</h6>
        <div className="bg-success bg-opacity-10 rounded-4 text-center py-3">
          <div className="fw-semibold mb-2 text-success">Books this week</div>

          <img src={bar} alt="" className='p-1' />
          <img src={load} alt="" className='p-1' />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
