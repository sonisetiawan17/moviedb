import axios from 'axios';

// API
export const TRENDING_MOVIE =
  'https://api.themoviedb.org/3/trending/all/day?api_key=fd8d6c89de4982d8d30b319843006081&page=1';

export const POPULAR_MOVIE =
  'https://api.themoviedb.org/3/movie/popular?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1';

export const UPCOMING_MOVIE =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1';

export const TOP_RATED_MOVIE =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1';

// Movie Lists

export const getPopular = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1`
  );
  return response.data.results.slice(0, 8);
};

export const getTrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=fd8d6c89de4982d8d30b319843006081&page=1'
  );
  return response.data.results;
};

export const getUpcoming = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};

// Series Lists

export const getPopularSeries = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/tv/popular?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};

export const getAiringToday = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/tv/airing_today?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};

export const getOnTheAir = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/tv/on_the_air?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};

export const getTopRatedSeries = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/tv/top_rated?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US'
  );
  return response.data.results;
};

// Genre Movies & Series

export const getMoviesGenre = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US'
  );
  return response.data.genres;
};

export const getSeriesGenre = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/genre/tv/list?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US'
  );
  return response.data.genres;
};

// People / Cast

export const getPeople = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/person/popular?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1'
  );
  return response.data.results;
};
