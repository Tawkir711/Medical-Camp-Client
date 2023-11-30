import React from 'react';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import UpcomingCamps from '../UpcomingCamps/UpcomingCamps';
import SystemOverview from '../SystemOverview/SystemOverview';
import HealthCare from '../HealthCare/HealthCare';
// import PopularCamps from '../PopularCamps/PopularCamps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <PopularCamps></PopularCamps> */}
      <UpcomingCamps></UpcomingCamps>
      <SystemOverview></SystemOverview>
      <HealthCare></HealthCare>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;