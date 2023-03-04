import React from 'react';
import AboutImg from '../../../assets/img/about_img.png';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import './About.scss';

const About = () => {
  return (
    <div className="about_page">
      <div className="about_wrapper">
        <div className="about_image">
          <img src={AboutImg} alt="About Img" />
        </div>
        <div className="about_content">
          <p className="title_app">Movies Central</p>
          <p className="title">
            Access Hundreds of Movies, TV Series, and Discover
          </p>
          <p className="description">
            Find the latest, trending and greatest movies and series all
            available on Movies Central.
          </p>
          <div className="lists">
            <div className="left_list">
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Trending Movies
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Latest Movies
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Latest Series
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Top Rated Movies
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Top Rated Series
              </p>
            </div>
            <div className="right_list">
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Rate Average
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Overview
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Casts
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                Trailer
              </p>
              <p>
                <BsFillCheckCircleFill className="check_icon" />
                All Genre
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
