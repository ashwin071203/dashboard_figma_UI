import React from 'react';
import './components.css';
import man from '../assets/man.png';

import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book1.png';
import book5 from '../assets/book2.png';

import author1 from '../assets/author1.png';
import author2 from '../assets/author2.png';
import author3 from '../assets/author3.png';
import author4 from '../assets/author3.png';
import author5 from '../assets/author2.png';
import author6 from '../assets/author1.png';

import group from '../assets/group.png';
import petal from '../assets/petal_bg.png';

import readIcon from '../assets/book 3.png';
import authorIcon from '../assets/team 1.png';
import readingIcon from '../assets/open-book 1.png';

const DashboardContent = ({
  title = "Dashboard",
  showSearch = true,
  showTrending = true,
  showPopular = true,
  showAuthors = true,
  showSummary = true,
  customPopularBooks,
  customTopAuthors,
  customSummaryData
}) => {
  const popularBooks = customPopularBooks || [
    { title: 'Never Eat Alone', author: 'Keith Ferrazzi', cover: book1 },
    { title: 'Great Gatsby', author: 'F. Scott Fitzgerald', cover: book2 },
    { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah', cover: book3 },
    { title: 'The Book Thief', author: 'Markus Zukas', cover: book4 },
    { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', cover: book5 },
  ];

  const topAuthors = customTopAuthors || [
    { name: 'Markus Zukas', image: author1 },
    { name: 'Dan Brown', image: author2 },
    { name: 'John Green', image: author3 },
    { name: 'Yuval Noah', image: author4 },
    { name: 'J.K. Rowling', image: author5 },
    { name: 'R.J. Palacio', image: author6 },
  ];

  const summaryData = customSummaryData || [
    { icon: readIcon, number: '20', label: 'Read books' },
    { icon: authorIcon, number: '20', label: 'Authors' },
    { icon: readingIcon, number: '03', label: 'Reading books' },
  ];

  return (
    <div className="container-fluid px-3 px-sm-4">
      {/* Banner */}
      {showTrending && (
        <div
          className="dashboard-hero position-relative d-flex align-items-center justify-content-between flex-wrap rounded-4 p-4 mb-4"
        >
          <img
            src={group}
            alt="group"
            className="hero-image-top-right position-absolute d-none d-md-block"
          />
          <img
            src={petal}
            alt="petal"
            className="hero-image-petal position-absolute d-none d-md-block"
          />
          <div className="z-1">
            <h3 className="bannerTest1 fw-bold mb-2 text-uppercase fs-4 fs-md-3">Trending Books<br />This Month</h3>
            <p className="fs-6 mb-3">Listen to trending books this month</p>
            <button
              className="hero-button btn px-4 py-2 text-white rounded-pill"
            >
              VIEW NOW
            </button>
          </div>
          <img
            src={man}
            alt="character"
            className="hero-image-bottom-right  "
          />
        </div>
      )}

      {/* Popular Books */}
      {showPopular && (
        <div className="card border-0 bg-light mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-4">
              <h5 className="fw-bold mb-0">Popular</h5>
              <a href="#" className="text-success text-decoration-none fw-medium">View all</a>
            </div>
            <div className="row g-3 gap-4">
              {popularBooks.map((book, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="card border-0 bg-white book-card h-100 text-center">
                    <div className="card-body p-2">
                      <div
                        className="book-card-image-container bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 mx-auto"
                      >
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="book-card-image img-fluid"
                        />
                      </div>
                      <h6 className="fw-semibold small mb-1 text-truncate">{book.title}</h6>
                      <p className="text-muted small mb-0 text-truncate">{book.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Authors */}
      {showAuthors && (
        <div className="card border-0 bg-light mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <h5 className="fw-bold mb-0">Top Authors</h5>
              <a href="#" className="text-success text-decoration-none fw-medium">View all</a>
            </div>
            <div className="row g-3">
              {topAuthors.map((author, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="recent-book-image rounded-circle mb-2"
                  />
                  <div className="small fw-medium text-truncate">{author.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      {showSummary && (
        <div className="row g-3 mb-4">
          {summaryData.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3 d-flex flex-row align-items-center">
                <div
                  className="menu-item rounded-3 d-flex align-items-center justify-content-center me-3"
                >
                  <img src={item.icon} alt={item.label} className="menu-item-icon" />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-bold fs-5">{item.number}</div>
                  <div className="text-muted small">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
