import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopRatedSeries } from '../../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Series.scss';

import 'swiper/css';
import 'swiper/css/pagination';

const TopRatedSeries = () => {
  const [TopRatedSeries, setTopRatedSeries] = useState(null);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const topRatedSeriesLog = useRef(true);

  useEffect(() => {
    if (topRatedSeriesLog.current) {
      topRatedSeriesLog.current = false;
      try {
        getTopRatedSeries().then((result) => setTopRatedSeries(result));
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
      <div className="series">
        <span className="series_title">Top Rated Series</span>
        <Link to="/series/top-rated">
          <span className="series_link">See all</span>
        </Link>{' '}
      </div>
      <div className="card">
        {TopRatedSeries &&
          TopRatedSeries.slice(0, 8).map((item) => (
            <div className="card_content" key={item.id}>
              <Link to={`/series/${item.id}`}>
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
          {TopRatedSeries &&
            TopRatedSeries.slice(0, 8).map((item) => (
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

export default TopRatedSeries;
