import React, { useEffect, useRef, useState } from 'react';
import Video from '../../assets/video/the_last_of_us.mp4';
import { AiTwotoneFire } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';
import './HeroSection.css';
import { BiFilter } from 'react-icons/bi';

const API_KEY = 'fd8d6c89de4982d8d30b319843006081';
const API_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

const HeroSection = () => {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await axios.get(API_URL);
        // setMovie(response.data.results[0].id);
        setMovie(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getMovie();
  }, []);

  const movieID = movie[0]?.id;

  useEffect(() => {
    async function getTrailer() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`
        );
        // setTrailer(response.data.results);
        setTrailer(response.data.results[0].key);
      } catch (error) {
        console.log(error.message);
      }
    }

    getTrailer();
  }, [movieID]);

  // const trailerKey =
  //   trailer &&
  //   trailer.filter((item) => item.type === 'Trailer').map((item) => item.key);

  return (
    <div className="hero_section">
      <div className="overlay"></div>
      {/* <video
        src={`https://www.youtube.com/embed/${trailer}`}
        autoPlay
        loop
        muted
      /> */}

      <iframe
        title="asdasd"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&enablejsapi=1`}
        frameBorder="0"
        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        allow="autoplay"
        loop
      ></iframe>

      {/* <div className="content">
        <h2>
          <AiTwotoneFire /> On Trending Now
        </h2>
        <h2>
          The Last Of Us <FaPlay className="play_icon" />
        </h2>
        <div className="information">
          <p>9.1 Rating</p>
          <p>2023</p>
          <p>TV Series</p>
          <p>1 Season</p>
        </div>
        <p>
          Twenty years after modern civilisation has been destroyed, Joel, a
          hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out
          of an oppressive quarantine zone. What starts as a small job soon
          becomes a brutal, heartbreaking journey, as they both must traverse
          the Unites States and depend on each other for survival.
        </p>
      </div> */}
      <div className="hero_section_detail">
        <p>
          On trending now: The Last of Us. <span>See details here</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
