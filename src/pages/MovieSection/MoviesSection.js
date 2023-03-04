import React from 'react';
import Movie from '../../assets/img/movie.jpg';
import './MoviesSection.scss';

const MoviesSection = () => {
  return (
    <div className="movies_section">
      <div className="movies_section_image">
        <img src={Movie} alt="Movies" />
      </div>
      <div className="movies_section_content">
        <h3>Movies</h3>
        <h1>
          Discover Your Favorite <span>Movies Here!</span>
        </h1>
        <p>
          Find various information about latest and classic movies, from
          synopses, actors, to ratings and reviews. Our user-friendly interface
          makes it easy for you to browse and search for movies, and our
          constantly updated database ensures that you will always have access
          to the latest information.
        </p>
        <p>
          With in-depth movie information, user ratings, and reviews, you can
          make informed decisions about which movies to watch next. Explore our
          movie collection and find the movie that suits your interests and
          tastes.
        </p>
        <div className="movies_section_data">
          <p>
            <span className="movie_data">100+</span>
            <span className="description">Movies Lists</span>
          </p>
          <p>
            <span className="genre_data">15+</span>
            <span className="description">Movie Genres</span>
          </p>
          <p>
            <span className="upcoming_data">10+</span>
            <span className="description">Upcoming Movies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesSection;
