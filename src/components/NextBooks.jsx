import React from 'react';
import './components.css';

const NextBooks = ({ 
  books = [],
  title = "Next Books",
  onBookClick,
  className = ""
}) => {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className={`mb-4 ${className}`}>
      <h6 className="fw-bold mb-3">{title}</h6>
      {books.map((book, idx) => (
        <div
          key={idx}
          className="d-flex align-items-center gap-3 p-2 bg-white rounded-4 mb-2 shadow-sm book-item"
          onClick={() => onBookClick && onBookClick(book, idx)}
          style={{ cursor: onBookClick ? 'pointer' : 'default' }}
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
  );
};

export default NextBooks;
