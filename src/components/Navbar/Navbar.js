import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
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
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                  end
                >
                  Home{' '}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/series"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Series
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/people"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  People
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="nav_search">
            <input
              type="text"
              placeholder="Search movie or series.."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <BsSearch className="search_icon" />
          </div> */}
          <div className="hamburger">
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
