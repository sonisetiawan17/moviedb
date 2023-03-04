import axios from 'axios';
import { useRef, useState } from 'react';

export const useDetail = () => {
  const [movie, setMovie] = useState(null);
  const [billedCast, setBilledCast] = useState(null);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const strictMovie = useRef(true);
  const strictCast = useRef(true);

  async function getMovieUrl(url) {
    try {
      const response = await axios.get(url);
      setMovie(response.data);
    } catch (error) {
      setError(error);
    }
  }

  async function getCastUrl(url) {
    try {
      const response = await axios.get(url);
      setBilledCast(response.data);
    } catch (error) {
      setError(error);
    }
  }

  const date = movie && movie.release_date;
  const dateParts = date && date.split('-');
  const formattedDate =
    dateParts && `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

  const convertRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const remaining = runtime % 60;
    return `${hours}h ${remaining}m`;
  };

  const convertVoteAverage = (voteAverage) => {
    const rating = Math.round(voteAverage * 10);
    let color = 'white';
    if (rating >= 80) {
      color = 'limegreen';
    } else if (rating >= 70) {
      color = 'royalblue';
    } else if (rating >= 60) {
      color = '#ffe6a7';
    } else {
      color = 'red';
    }

    return <span style={{ border: `3px solid ${color}` }}>{rating}%</span>;
  };

  return {
    movie,
    billedCast,
    setBilledCast,
    error,
    poster,
    strictMovie,
    strictCast,
    formattedDate,
    getMovieUrl,
    getCastUrl,
    convertRuntime,
    convertVoteAverage,
  };
};
