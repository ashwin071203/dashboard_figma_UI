import React from 'react';
import './TrendingBanner.css'; // Custom styles for positioning (only classes)

const TrendingBanner = ({
  title = "Trending Books This Month",
  subtitle = "Listen to trending books this month",
  buttonText = "VIEW NOW",
  onButtonClick,
  heroImage,
  petalImage,
  characterImage,
  className = ""
}) => {
  return (
    <div className={`trending-banner container-fluid bg-trending-green text-white rounded-4  position-relative overflow-hidden p-3 ${className}`}>
      {/* Background Images */}
      {heroImage && (
        <img
          src={heroImage}
          alt="Floating books"
          className="hero-image-top-right "
        />
      )}
      

      {petalImage && (
        <img
          src={petalImage}
          alt="Petal decor"
          className="hero-image-petal  col-md-5"
        />
      )}
      

      <div className="row align-items-center">
        <div className="col-md-6 text-md-start text-center z-1 px-4">
          <h3 className="bannertext  text-uppercase mb-2">
            Trending Books <span className=" d-md-inline">This Month</span>
          </h3>
          <p className="mb-3">{subtitle}</p>
          <button
            className="button btn btn-danger rounded-pill px-3 "
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>

        <div className="man-ban">
          {characterImage && (
            <img
              src={characterImage}
              alt="Character"
              className="character-image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingBanner;
