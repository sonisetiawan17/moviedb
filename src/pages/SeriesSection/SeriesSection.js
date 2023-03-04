import React from 'react';
import Series from '../../assets/img/series.jpg';

import './SeriesSection.scss';

const SeriesSection = () => {
  return (
    <>
      <div className="series_section">
        <div className="series_section_content">
          <h3>TV Series</h3>
          <h1>
            Explore the World of <span>TV Series</span> with Us!
          </h1>
          <p>
            Get all the information you need about the latest and greatest
            series, including synopses, cast lists, ratings, and reviews. Our
            user-friendly platform makes it easy for you to browse and search
            for your favorite shows, and our regularly updated database ensures
            that you'll always have access to the most current information.
          </p>
          <p>
            Whether you're a TV addict or just looking for a new series to
            watch, we've got you covered.
          </p>
          <div className="series_section_data">
            <p>
              <span className="movie_data">100+</span>
              <span className="description">TV Series Lists</span>
            </p>
            <p>
              <span className="genre_data">15+</span>
              <span className="description">TV Series Genres</span>
            </p>
            <p>
              <span className="upcoming_data">10+</span>
              <span className="description">Upcoming TV Series</span>
            </p>
          </div>
        </div>
        <div className="series_section_image">
          <img src={Series} alt="Movies" />
        </div>
      </div>

      {/* Mobile */}
      <div className="series_section_mobile">
        <div className="series_section_image_mobile">
          <img src={Series} alt="Movies" />
        </div>
        <div className="series_section_content_mobile">
          <h3>TV Series</h3>
          <h1>
            Explore the World of <span>TV Series</span> with Us!
          </h1>
          <p>
            Get all the information you need about the latest and greatest
            series, including synopses, cast lists, ratings, and reviews. Our
            user-friendly platform makes it easy for you to browse and search
            for your favorite shows, and our regularly updated database ensures
            that you'll always have access to the most current information.
          </p>
          <p>
            Whether you're a TV addict or just looking for a new series to
            watch, we've got you covered.
          </p>
          <div className="series_section_data_mobile">
            <p>
              <span className="movie_data">100+</span>
              <span className="description">TV Series Lists</span>
            </p>
            <p>
              <span className="genre_data">15+</span>
              <span className="description">TV Series Genres</span>
            </p>
            <p>
              <span className="upcoming_data">10+</span>
              <span className="description">Upcoming TV Series</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesSection;
