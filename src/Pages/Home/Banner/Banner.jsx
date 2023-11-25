import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from 'react-helmet';

const Banner = () => {
  return (
    <Carousel>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/BQ64qfF3/medi.jpg)",
        }}
      >
        <Helmet>
          <title>Medical Camp / Home</title>
        </Helmet>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-4xl font-bold">
              Efficient Resource Allocation
            </h1>
            <p className="mb-5 font-medium">
              The system streamlined the allocation of medical resources by
              identifying specific needs and effectively distributing supplies,
              personnel, and equipment to various camps based on their
              requirements. This optimized resource management enhanced the
              overall effectiveness of the medical camps.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/gSdmYhS/free-medical-camp.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-4xl font-bold">Enhanced Patient Care</h1>
            <p className="mb-5 font-medium">
              Through better organization and management, the system improved
              patient care at medical camps. It facilitated quicker
              registration, better patient tracking, and ensured timely access
              to medical services, resulting in improved healthcare delivery and
              patient satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QQ9xwSz/Medical-Camp-2-1024x473.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-4xl font-bold">
              Data Centralization and Analysis
            </h1>
            <p className="mb-5 font-medium">
              The system centralized data collection from multiple camps,
              enabling comprehensive analysis. This data-driven approach allowed
              health officials and organizations to identify prevalent health
              issues, monitor trends, and make informed decisions to address
              specific healthcare needs within different regions or
              demographics.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/JR2PtSL/hcc.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-4xl font-bold">
              Improved Coordination and Communication
            </h1>
            <p className="mb-5 font-medium">
              By providing a centralized platform, the system facilitated better
              coordination among healthcare providers, volunteers, and
              administrative staff. Real-time communication and updates ensured
              smoother operations and minimized errors or redundancies in
              service delivery.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MsV2JG7/pic-of-dental-camp.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-4xl font-bold">
              Community Engagement and Outreach
            </h1>
            <p className="mb-5 font-medium">
              The system helped in fostering community engagement by providing
              information about upcoming medical camps, health education
              initiatives, and relevant health tips. This increased awareness
              and encouraged active participation from the community, promoting
              preventive healthcare practices and overall well-being.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;