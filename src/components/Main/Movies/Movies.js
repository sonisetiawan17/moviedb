import React from 'react';
import TrendingMovies from './TrendingMovies';
import TopRatedMovies from './TopRatedMovies';
import UpcomingMovies from './UpcomingMovies';
import PopularMovies from './PopularMovies';

const Movies = () => {
  return (
    <>
      <TrendingMovies />
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
    </>
  );
};

export default Movies;
