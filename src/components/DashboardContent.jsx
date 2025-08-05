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

// Import the reusable components
import TrendingBanner from './TrendingBanner';
import PopularBooks from './PopularBooks';
import TopAuthors from './TopAuthors';
import SummaryCards from './SummaryCards';

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
    <div className="container-fluid px-2 px-sm-3 px-md-4 p-5">
      {/* Mobile spacing adjustment */}
      <div className="d-md-none" ></div>
      
      {/* Trending Banner */}
      {showTrending && (
        <TrendingBanner
          heroImage={group}
          petalImage={petal}
          characterImage={man}
          className="mb-3 mb-md-4"
        />
      )}

      {/* Popular Books */}
      {showPopular && (
        <PopularBooks 
          books={popularBooks} 
          className="mb-3 mb-md-4"
        />
      )}
    

      {/* Top Authors */}
      {showAuthors && (
        <TopAuthors 
          authors={topAuthors} 
          className="mb-3 mb-md-4"
        />
      )}

      {/* Summary Cards */}
      {showSummary && (
        <SummaryCards 
          summaryData={summaryData} 
          className="mb-3 mb-md-4"
        />
      )}
      
      {/* Mobile bottom spacing */}
      <div className="d-md-none" ></div>
    </div>
  );
};

export default DashboardContent;
