import React from 'react';
import AiringTodaySeries from './AiringTodaySeries';
import OnTheAirSeries from './OnTheAirSeries';
import PopularSeries from './PopularSeries';
import TopRatedSeries from './TopRatedSeries';

const Series = () => {
  return (
    <>
      <PopularSeries />
      <AiringTodaySeries />
      <OnTheAirSeries />
      <TopRatedSeries />
    </>
  );
};

export default Series;
