import React from 'react';
import Poster from '../../assets/img/poster.jpg';
import './Search.scss';

const Search = () => {
  return (
    <div className="query_result">
      <h2>Result for Peaky Blinders</h2>
      <div className="query_card">
        <div className="query_image">
          <img src={Poster} alt="Poster" />
        </div>
        <div className="query_content">
          <h2>Peaky Blinders</h2>
          <p>September 12, 2013</p>
          <p>
            A gangster family epic set in 1919 Birmingham, England and centered
            on a gang who sew razor blades in the peaks of their caps, and their
            fierce boss Tommy Shelby, who means to move up in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
