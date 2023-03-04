import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Next from '../../../assets/icon/next.png';
import Prev from '../../../assets/icon/previous.png';
import { useMovie } from '../../../hooks/useMovie';

import './MovieList.scss';

const TrendingList = () => {
  const trending = useMovie();

  useEffect(() => {
    if (trending.strict) {
      trending.strict = false;
      trending.getMovieUrl(
        `https://api.themoviedb.org/3/trending/all/day?api_key=fd8d6c89de4982d8d30b319843006081&page=${trending.page}`
      );
      trending.strict = true;
    }
  }, [trending]);

  if (trending.error) {
    return <p>Error : {trending.error.message}</p>;
  }

  return (
    <>
      <div className="movie_list">
        {trending.movies &&
          trending.movies.map((item) => (
            <div className="backdrops" key={item.id}>
              <Link to={`/movies/trending/${item.id}`}>
                <img
                  src={`${trending.poster}${item.backdrop_path}`}
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
        <button onClick={trending.previousMaxPage}>
          <img src={Prev} alt="next button" className="prev" />
        </button>
        <button onClick={trending.previousPage}>Prev</button>
        <button onClick={trending.nextPage}>Next</button>
        <button onClick={trending.nextMaxPage}>
          <img src={Next} alt="next button" className="next" />
        </button>
      </div>
      <p className="page">Page {trending.page} of 100</p>
    </>
  );
};

export default TrendingList;
