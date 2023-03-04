import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { getMoviesGenre, getSeriesGenre } from '../../utils/api';
import '../Navbar/Navbar.scss';

const Navbar = () => {
  const [moviesGenre, setMoviesGenre] = useState(null);
  const [seriesGenre, setSeriesGenre] = useState(null);
  const [genre, setGenre] = useState(false);
  const [error, setError] = useState(null);

  const moviesGenreLog = useRef(true);
  const seriesGenreLog = useRef(true);

  useEffect(() => {
    if (moviesGenreLog.current) {
      moviesGenreLog.current = false;
      try {
        getMoviesGenre().then((result) => setMoviesGenre(result));
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  useEffect(() => {
    if (seriesGenreLog.current) {
      seriesGenreLog.current = false;
      try {
        getSeriesGenre().then((result) => setSeriesGenre(result));
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="navbar">
      <nav>
        <div className="nav_title">
          <h1>MovieDB</h1>
        </div>
        <div className="nav_menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
              >
                Home{' '}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/series"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Series
              </NavLink>
            </li>
            <li onClick={() => setGenre(!genre)}>Genre</li>
          </ul>
        </div>
        <div className="nav_search">
          <BsSearch className="search_icon" />
        </div>
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
      </nav>
      {genre && (
        <div className="dropdown">
          <p className="genre_movies_title">Movies Genre</p>
          <div className="movies_genre">
            {moviesGenre &&
              moviesGenre.map((value) => (
                <p key={value.id} className="genre">
                  {value.name}
                </p>
              ))}
          </div>
          <p className="genre_series_title">Series Genre</p>
          <div className="series_genre">
            {seriesGenre &&
              seriesGenre.map((value) => (
                <p key={value.id} className="genre">
                  {value.name}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
