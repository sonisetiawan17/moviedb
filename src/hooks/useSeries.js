import axios from 'axios';
import { useRef, useState } from 'react';

export const useSeries = (initialValue = 1) => {
  const [series, setSeries] = useState(null);
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

  async function getSeriesUrl(url) {
    try {
      const response = await axios.get(url);
      setSeries(response.data.results);
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
    series,
    setSeries,
    error,
    page,
    poster,
    strict,
    setError,
    previousPage,
    previousMaxPage,
    nextPage,
    nextMaxPage,
    getSeriesUrl,
  };
};
