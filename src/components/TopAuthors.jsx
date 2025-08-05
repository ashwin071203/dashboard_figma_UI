// components/TopAuthors.js
import React from 'react';
import './components.css';

import author1 from '../assets/author1.png';
import author2 from '../assets/author2.png';
import author3 from '../assets/author3.png';
import author4 from '../assets/author3.png';
import author5 from '../assets/author2.png';
import author6 from '../assets/author1.png';

const authors = [
  { name: 'Agatha Christie', image: author1 },
  { name: 'J.K. Rowling', image: author2 },
  { name: 'Stephen King', image: author3 },
  { name: 'George R.R. Martin', image: author4 },
  { name: 'Jane Austen', image: author5 },
  { name: 'Isaac Asimov', image: author6 },
  { name: 'Mark Twain', image: author2 },
  { name: 'Leo Tolstoy', image: author3 },
];

// Utility: group authors into chunks of 6
const groupAuthors = (authors, groupSize) => {
  const grouped = [];
  for (let i = 0; i < authors.length; i += groupSize) {
    grouped.push(authors.slice(i, i + groupSize));
  }
  return grouped;
};

const TopAuthors = () => {
  const groupedAuthors = groupAuthors(authors, 6);

  return (
    <div className="top-authors-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-semibold">Top Authors</h5>
        <a href="#" className="text-success small">View all</a>
      </div>

      {/* Carousel with auto-slide disabled */}
      <div id="authorCarousel" className="carousel slide" data-bs-interval="false">
        <div className="carousel-inner">
          {groupedAuthors.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="row g-2 g-md-4 justify-content-center">
                {group.map((author, i) => (
                  <div className="col-4 col-sm-3 col-md-2 col-lg-1dot7 text-center" key={i}>
                    <div className="author-circle mx-auto mb-2">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="img-fluid author-img"
                      />
                    </div>
                    <div
                      className="fw-medium small text-truncate"
                      style={{ maxWidth: '100%' }}
                      title={author.name}
                    >
                      {author.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#authorCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#authorCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TopAuthors;
