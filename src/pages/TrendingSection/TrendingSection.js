import React from 'react';
import Trending from '../../assets/img/trending.jpg';
import './TrendingSection.scss';

const TrendingSection = () => {
  return (
    <>
      <div className="trending_section">
        <div className="trending_section_image">
          <img src={Trending} alt="Movies" />
        </div>
        <div className="trending_section_content">
          <h3>Trending Movies</h3>
          <h1>
            Stay Up-to-Date with the <span>Hottest Movies!</span>
          </h1>
          <p>
            Keep your finger on the pulse of the movie world with our
            comprehensive trending movie website. Discover the latest must-see
            films and stay informed with synopses, cast lists, ratings, and
            reviews.
          </p>
          <p>
            Our user-friendly platform makes it easy for you to browse and
            search for movies, and our regularly updated database guarantees
            that you'll always have access to the newest and most popular films.
            Whether you're a movie buff or just looking for the latest
            blockbuster, we've got you covered.
          </p>
        </div>
      </div>
      <div className="transparent" />
    </>
  );
};

export default TrendingSection;
