import React, { useEffect } from 'react';
import Man from '../../../assets/img/man.png';
import Woman from '../../../assets/img/woman.png';
import { useParams } from 'react-router-dom';
import { useDetail } from '../../../hooks/useDetail';

import './DetailMovie.scss';

const DetailMovie = () => {
  const params = useParams();

  const detail = useDetail();
  const casts = useDetail();

  useEffect(() => {
    if (detail.strictMovie) {
      detail.strictMovie = false;
      detail.getMovieUrl(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US`
      );
    }
  }, [params.movieId, detail]);

  useEffect(() => {
    if (casts.strictMovie) {
      casts.strictMovie = false;
      casts.getCastUrl(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US`
      );
    }
  }, [params.movieId, casts]);

  if (detail.error) {
    return <p>Error : {detail.error.message}</p>;
  }

  if (casts.error) {
    return <p>Error : {casts.error.message}</p>;
  }

  return (
    <div className="detail_movie">
      <div className="detail">
        {detail.movie && (
          <>
            <div className="detail_overlays">
              <h2>
                {detail.movie.title}
                <span> ({detail.movie.release_date.substring(0, 4)})</span>
              </h2>

              <p>
                {detail.formattedDate} •{' '}
                {detail.movie.genres.map((genre) => genre.name).join(', ')} •{' '}
                {detail.convertRuntime(detail.movie.runtime)}
              </p>

              <p>
                {detail.convertVoteAverage(detail.movie.vote_average)} Rating
                Average
              </p>

              <i>{detail.movie.tagline}</i>

              <p>Overview</p>
              <p>{detail.movie.overview}</p>
            </div>

            <div className="detail_backdrop">
              <img
                src={`${detail.poster}${detail.movie.backdrop_path}`}
                alt="df"
              />
            </div>
          </>
        )}
        {casts.billedCast && (
          <div className="detail_cast">
            <h2>Top Billed Cast</h2>
            <div className="cast">
              <div className="cast_overlays" />
              <div className="wrapper">
                {casts.billedCast.cast.map((item) => (
                  <div className="overflow" key={item.id}>
                    <img
                      src={
                        (item.profile_path === null &&
                          item.gender === 1 &&
                          Woman) ||
                        (item.profile_path === null &&
                          item.gender === 0 &&
                          Man) ||
                        (item.profile_path === null &&
                          item.gender === 2 &&
                          Man) ||
                        (item.profile_path !== null &&
                          `${casts.poster}${item.profile_path}`)
                      }
                      alt={item.name}
                    />
                    <div className="cast_name">
                      <p>{item.name}</p>
                      <p>{item.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailMovie;
