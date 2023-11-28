import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { LiaCampgroundSolid } from "react-icons/lia";
import { BsCalendar2DateFill } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdMedicalServices } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

const DetailsPage = () => {
  const { _id, name, image, fees, date, location, service, health, audience } =  useLoaderData();

  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <h2 className="text-3xl font-semibold text-blue-600 text-center pb-3">--- Join Camp ---</h2>
      <figure>
        <img
          className="w-full bg-slate-500 my-2 rounded-lg "
          src={image}
          alt=".."
        />
      </figure>

      <div className="card-body font-medium ">
        <p className="card-title">
          <BsCalendar2DateFill className="mr-2 text-2xl" /> {date}
        </p>
        <h2 className="card-title">
          <LiaCampgroundSolid className=" text-2xl" />
          {name}
        </h2>
        <p className="flex">
          <IoLocationSharp className="mr-2 text-2xl" />
          {location}
        </p>
        <p className="flex">
          <HiMiniCurrencyDollar className="mr-2 text-2xl" /> {fees}
        </p>
        <p className="flex">
          <MdMedicalServices className="mr-2 text-4xl" /> {service}
        </p>
        <p className="flex">
          <GrUserManager className="mr-2 text-2xl" /> {health}
        </p>
        <p className="flex">
          <FaUsers className="mr-2 text-2xl" /> {audience}
        </p>
      </div>
      
        <button className="btn btn-primary text-white">Join Camp</button>
      
    </div>
  );
};

export default DetailsPage;