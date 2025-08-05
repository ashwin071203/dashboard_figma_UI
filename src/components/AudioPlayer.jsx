import React, { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './components.css';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';

const AudioPlayer = ({ 
  books = [
    { title: "Wonder", author: "R.J. Palacio", image: book1 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: book2 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", image: book3 }
  ],
  waveImage,
  playIcon,
  pauseIcon,
  nextIcon,
  prevIcon,
  onPlay,
  onPause,
  onBookChange,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = useCallback((swiper) => {
    setCurrentBookIndex(swiper.activeIndex);
    setIsPlaying(false);
    onBookChange && onBookChange(books[swiper.activeIndex], swiper.activeIndex);
  }, [onBookChange, books]);

  const slideTo = useCallback((index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      onPause && onPause(books[currentBookIndex]);
    } else {
      onPlay && onPlay(books[currentBookIndex]);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const currentBook = books[currentBookIndex];

  return (
    <div className={`books1 bg-white rounded-4 shadow-sm w-313 h-331 ${className}`}>
      <br />
      
      {/* Swiper Carousel Book Display */}
      <div className="position-relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={currentBookIndex}
          onSlideChange={handleSlideChange}
          className="audio-player-swiper"
      
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex flex-column align-items-center">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className={`img-fluid rounded-2 shadow ${
                    index === currentBookIndex 
                      ? 'book-large' 
                      : 'book-small opacity-50'
                  }`}
                  
                  onClick={() => slideTo(index)}
                />
           
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Current Book Info - Always centered below the carousel */}
      <div className="text-center mt-3">
        <div className="fw-bold">{currentBook.title}</div>
        <small className="text-muted d-block">{currentBook.author}</small>
        <div className="small text-muted mt-1">
          {currentBookIndex + 1} of {books.length}
        </div>
      </div>
      
      {/* Wave Animation */}
      {waveImage && <img src={waveImage} alt="" className="w-100" />}

      {/* Navigation Buttons */}
    

      {/* Control Buttons */}
      <div className="d-flex justify-content-center gap-3 my-2">
        <button 
          className="btn btn-light rounded-circle p-2 shadow-sm"
          onClick={handlePrevious}
          title="Previous Book"
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        
        <button
          className={`btn rounded-circle p-2 shadow-sm ${isPlaying ? 'btn-success' : 'btn-light'}`}
          onClick={handlePlayPause}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          <img src={playIcon} alt="Play" />
        </button>
        
        <button 
          className="btn btn-light rounded-circle p-2 shadow-sm"
          onClick={handleNext}
          title="Next Book"
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
      
      {/* Swiper Pagination */}
      <div className="swiper-pagination position-relative mt-3"></div>
    </div>
  );
};

export default AudioPlayer;
