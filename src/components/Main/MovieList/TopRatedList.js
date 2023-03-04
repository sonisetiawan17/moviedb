import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Next from '../../../assets/icon/next.png';
import Prev from '../../../assets/icon/previous.png';
import { useMovie } from '../../../hooks/useMovie';

import './MovieList.scss';

const TopRatedList = () => {
  const topRated = useMovie();

  useEffect(() => {
    if (topRated.strict) {
      topRated.strict = false;
      topRated.getMovieUrl(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=${topRated.page}`
      );
      topRated.strict = true;
    }
  }, [topRated]);

  if (topRated.error) {
    return <p>Error : {topRated.error.message}</p>;
  }

  return (
    <>
      <div className="movie_list">
        {topRated.movies &&
          topRated.movies.map((item) => (
            <div className="backdrops" key={item.id}>
              <Link to={`/movies/top-rated/${item.id}`}>
                <img
                  src={`${topRated.poster}${item.backdrop_path}`}
                  alt={item.title}
                />
              </Link>
              <div
                className="movie_list_rate"
                style={{
                  backgroundColor:
                    (item.vote_average >= 9.0 && '#dbb42c') ||
                    (item.vote_average >= 8.0 && '#0ead69') ||
                    (item.vote_average >= 7.0 && '#5167e2') ||
                    (item.vote_average >= 6.0 && '#333533') ||
                    (item.vote_average >= 1.0 && '#ef233c') ||
                    (item.vote_average <= 1.0 && '#333533'),
                }}
              >
                <p>
                  {item.vote_average === 0
                    ? 'Upcoming'
                    : item.vote_average.toFixed(2)}
                </p>
              </div>
              <div className="movie_list_title">
                <p>{item.title || item.name}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button onClick={topRated.previousMaxPage}>
          <img src={Prev} alt="next button" className="prev" />
        </button>
        <button onClick={topRated.previousPage}>Prev</button>
        <button onClick={topRated.nextPage}>Next</button>
        <button onClick={topRated.nextMaxPage}>
          <img src={Next} alt="next button" className="next" />
        </button>
      </div>
      <p className="page">Page {topRated.page} of 100</p>
    </>
  );
};

export default TopRatedList;
