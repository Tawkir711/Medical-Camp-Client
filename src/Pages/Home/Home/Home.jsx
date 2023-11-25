import React from 'react';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import UpcomingCamps from '../UpcomingCamps/UpcomingCamps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <UpcomingCamps></UpcomingCamps>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;