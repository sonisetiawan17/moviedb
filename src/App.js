import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BiArrowToTop } from 'react-icons/bi';
import Root from './pages/RootLayout/Root';
import Home from './pages/HomePages/Home';
import MainRoot from './pages/RootLayout/MainRoot';
import Movies from './components/Main/Movies/Movies';
import Series from './components/Main/Series/Series';
import TrendingList from './components/Main/MovieList/TrendingList';
import UpcomingList from './components/Main/MovieList/UpcomingList';
import TopRatedList from './components/Main/MovieList/TopRatedList';
import PopularSeriesList from './components/Main/SeriesList/PopularList';
import PopularList from './components/Main/MovieList/PopularList';
import AiringTodayList from './components/Main/SeriesList/AiringTodayList';
import OnTheAirList from './components/Main/SeriesList/OnTheAirList';
import TopRatedSeriesList from './components/Main/SeriesList/TopRatedList';

import './App.css';
import People from './components/Main/People/People';
import DetailMovie from './components/Main/Detail/DetailMovie';
import DetailSeries from './components/Main/Detail/DetailSeries';
import Search from './components/Search/Search';
import DetailPeople from './components/Main/Detail/DetailPeople';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'movies',
        element: <MainRoot />,
        children: [
          { index: true, element: <Movies /> },
          { path: 'trending', element: <TrendingList /> },
          { path: 'trending/:movieId', element: <DetailMovie /> },
          { path: 'popular', element: <PopularList /> },
          { path: 'popular/:movieId', element: <DetailMovie /> },
          { path: 'upcoming', element: <UpcomingList /> },
          { path: 'upcoming/:movieId', element: <DetailMovie /> },
          { path: 'top-rated', element: <TopRatedList /> },
          { path: 'top-rated/:movieId', element: <DetailMovie /> },
          { path: ':movieId', element: <DetailMovie /> },
        ],
      },
      {
        path: 'series',
        element: <MainRoot />,
        children: [
          { index: true, element: <Series /> },
          { path: 'popular', element: <PopularSeriesList /> },
          { path: 'popular/:seriesId', element: <DetailSeries /> },
          { path: 'airing-today', element: <AiringTodayList /> },
          { path: 'airing-today/:seriesId', element: <DetailSeries /> },
          { path: 'on-tv', element: <OnTheAirList /> },
          { path: 'on-tv/:seriesId', element: <DetailSeries /> },
          { path: 'top-rated', element: <TopRatedSeriesList /> },
          { path: 'top-rated/:seriesId', element: <DetailSeries /> },
          { path: ':seriesId', element: <DetailSeries /> },
        ],
      },
      { path: 'people', element: <People /> },
      { path: 'people/:peopleId', element: <DetailPeople /> },
      { path: 'search', element: <Search /> },
    ],
  },
]);

function App() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <>
      <button className="scrollBtn" onClick={scrollToTop}>
        <BiArrowToTop className="onTopIcon" />
      </button>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
