import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import MoviesSection from '../MovieSection/MoviesSection';
import SeriesSection from '../SeriesSection/SeriesSection';
import TrendingSection from '../TrendingSection/TrendingSection';
import About from '../../components/Main/About/About';

const Home = () => {
  return (
    <>
      <header>
        <HeroSection />
      </header>

      <section>
        <MoviesSection />
        <SeriesSection />
        <TrendingSection />
        <About />
      </section>
    </>
  );
};

export default Home;
