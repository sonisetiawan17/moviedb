import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUpcoming } from '../../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Movies.scss';
import 'swiper/css';
import 'swiper/css/pagination';

const TrendingMovies = () => {
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const trendingLog = useRef(true);

  useEffect(() => {
    if (trendingLog.current) {
      trendingLog.current = false;
      try {
        getUpcoming().then((result) => setTrending(result));
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      <div className="movies">
        <span className="movie_title">Upcoming</span>
        <Link to="/movies/upcoming">
          <span className="movie_link">See all</span>
        </Link>
      </div>
      <div className="card">
        {trending &&
          trending
            .filter((item) => item.release_date.includes('2023'))
            .slice(0, 8)
            .map((item) => (
              <div className="card_content" key={item.id}>
                <Link to={`/movies/${item.id}`}>
                  <img src={`${poster}${item.poster_path}`} alt={item.title} />
                </Link>
              </div>
            ))}
      </div>

      {/* Mobile */}
      <div className="card_mobile">
        <Swiper
          slidesPerView={3}
          spaceBetween={-35}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // 428: {
            //   spaceBetween: -45,
            // },
            768: {
              //min
              slidesPerView: 6,
              spaceBetween: -10,
            },
          }}
        >
          {trending &&
            trending.slice(0, 8).map((item) => (
              <SwiperSlide>
                <div className="card_content_mobile" key={item.id}>
                  <Link to={`/movies/${item.id}`}>
                    <img
                      src={`${poster}${item.poster_path}`}
                      alt={item.title}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default TrendingMovies;
