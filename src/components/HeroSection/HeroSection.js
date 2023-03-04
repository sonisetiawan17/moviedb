import React from 'react';
import Video from '../../assets/video/trailer.mp4';
import { AiTwotoneFire } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted />

      <div className="content">
        <h2>
          <FaPlay className="play_icon" /> MovieDB
        </h2>
        <h2>Discover Your Next Favorite Movie and Series</h2>
        <div className="information">
          <p>100+ Movies</p>
          <p>100+ Series</p>
        </div>
        <p>
          Provides information on movies and series, including synopsis, release
          dates, actors and producers, as well as user ratings and reviews. It
          is an ideal source of information for film and series fans to learn
          more about the content they love or to discover new recommendations to
          watch.
        </p>
      </div>
      <div className="hero_section_detail">
        <p>
          Upcoming movie: Ant-Man and the Wasp: Quantumania.{' '}
          <span>See details here</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
