import axios from 'axios';
import { useRef, useState } from 'react';

export const useMovie = (initialValue = 1) => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(initialValue);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const strict = useRef(true);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  async function getMovieUrl(url) {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
    }
  }

  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const nextMaxPage = () => {
    setPage(100);
    window.scrollTo(0, 0);
  };

  const previousMaxPage = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  return {
    movies,
    setMovies,
    error,
    page,
    poster,
    strict,
    setError,
    previousPage,
    previousMaxPage,
    nextPage,
    nextMaxPage,
    getMovieUrl,
  };
};
