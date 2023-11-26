import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingCamps = () => {
  return (
    <div className="bg-base-200 px-3 py-3">
      <h2 className="text-3xl font-bold text-center">Upcoming Camps</h2>
      <div>
        <h3 className="text-xl font-semibold text-center mt-3">
          Future Medical Outreach Programs
        </h3>
        <p className="text-xl font-normal text-center">
          Stay informed about our upcoming medical camps aimed at serving
          various communities...
        </p>
        <h4 className="text-xl font-medium text-center">
          Schedule Preview: 2022-10-01
        </h4>
        <ul>
          <li>
            <strong>Upcoming Camps Date: 2023-12-01</strong>
          </li>
          <li>
            <strong>Location: </strong>
            <span className="font-medium">best-hospital-in-South-Asia</span>
          </li>
          <li>
            <strong>Focus Areas:</strong>{" "}
            <div className="carousel rounded-box w-96 gap-2">
              <div className="carousel-item w-1/2">
                <img
                  src="https://i.ibb.co/kMKFdSD/best-hospital-in-south-india.jpg"
                  className="w-full"
                />
              </div>
              <div className="carousel-item w-1/2">
                <img
                  src="https://i.ibb.co/82w6n89/createit-luzsaude-introducao.png"
                  className="w-full"
                />
              </div>
            </div>
          </li>
          <Link to={"/Registration"}>
            <div className='flex justify-center'>
              <button className="btn btn-secondary my-3">Registration</button>
            </div>
          </Link>
        </ul>
        <p className="md:text-3xl font-bold text-center">
          Participating in these camps not only offers crucial medical support
          but also fosters community engagement and health awareness.
        </p>
      </div>
    </div>
  );
};

export default UpcomingCamps;