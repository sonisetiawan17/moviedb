import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Next from '../../../assets/icon/next.png';
import Prev from '../../../assets/icon/previous.png';
import { useMovie } from '../../../hooks/useMovie';

import './MovieList.scss';

const PopularList = () => {
  const popular = useMovie();

  useEffect(() => {
    if (popular.strict) {
      popular.strict = false;
      popular.getMovieUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=${popular.page}`
      );
      popular.strict = true;
    }
  }, [popular]);

  if (popular.error) {
    return <p>Error : {popular.error.message}</p>;
  }

  return (
    <>
      <div className="movie_list">
        {popular.movies &&
          popular.movies.map((item) => (
            <div className="backdrops" key={item.id}>
              <Link to={`/movies/popular/${item.id}`}>
                <img
                  src={`${popular.poster}${item.backdrop_path}`}
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
        <button onClick={popular.previousMaxPage}>
          <img src={Prev} alt="next button" className="prev" />
        </button>
        <button onClick={popular.previousPage}>Prev</button>
        <button onClick={popular.nextPage}>Next</button>
        <button onClick={popular.nextMaxPage}>
          <img src={Next} alt="next button" className="next" />
        </button>
      </div>
      <p className="page">Page {popular.page} of 100</p>
    </>
  );
};

export default PopularList;
