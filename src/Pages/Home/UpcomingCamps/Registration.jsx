import React from 'react';
import { Helmet } from 'react-helmet';

const Registration = () => {
  return (
    <div>
      <Helmet>
        <title>Medical Camp / Registration</title>
      </Helmet>
      <h1 className="text-4xl text-center">Registration Coming Soon...</h1>
      <img className='w-1/2 mx-auto'
        src="https://i.ibb.co/QJmRxVk/d9f21515b1e38d83e94fdbce88f623b6.gif"
        alt=""
      />
    </div>
  );
};

export default Registration;