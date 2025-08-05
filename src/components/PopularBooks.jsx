// components/PopularBooks.js
import React from 'react';
import './components.css';

import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book3.png';
import book5 from '../assets/book2.png';

const books = [
  { title: 'Never Eat Alone', author: 'Keith Ferrazzi', cover: book2 },
  { title: 'Great Gatsby', author: 'F. Scott Fitzgerald', cover: book2 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', cover: book3 },
  { title: 'The Book Thief', author: 'Markus Zusak', cover: book4 },
  { title: 'Sherlock Holmes', author: 'Conan Doyle', cover: book5 },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', cover: book3 },
  { title: 'Atomic Habits', author: 'James Clear', cover: book2 },
  { title: '1984', author: 'George Orwell', cover: book3 },
  { title: 'The Alchemist', author: 'Paulo Coelho', cover: book4 },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', cover: book5 },
];

// Group books into chunks of 5
const groupBooks = (books, groupSize) => {
  let grouped = [];
  for (let i = 0; i < books.length; i += groupSize) {
    grouped.push(books.slice(i, i + groupSize));
  }
  return grouped;
};

const PopularBooks = () => {
  const groupedBooks = groupBooks(books, 5);

  return (
    <div className="popular-books-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-semibold">Popular</h5>
        <a href="#" className="text-success small">View all</a>
      </div>

      <div id="bookCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedBooks.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 justify-content-center">
                {group.map((book, i) => (
                  <div className="col text-center" key={i}>
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="img-fluid popular-book-cover mb-2"
                    />
                    <div className="fw-medium small">{book.title}</div>
                    <div className="text-muted small">{book.author}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PopularBooks;
