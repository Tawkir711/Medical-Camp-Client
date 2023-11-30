import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LiaCampgroundSolid } from "react-icons/lia";
import { BsCalendar2DateFill } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdMedicalServices } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useRole from "../../../Component/hooks/useRole";



const DetailsPage = () => {
  const { _id, name, image, fees, date, location, service, health, audience } =
    useLoaderData();
  const { role } = useRole();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const campItem = {
      camp: data.camp,
      name: data.name,
      age: data.age,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      contact: data.contact,
      requirement: data.requirement,
      fee: data.fee,
      dat: data.dat,
      paymentStatus: "NonPaid",
      campId: _id
    }
    fetch('http://localhost:5000/joinCamp', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(campItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Join Camp Added Successfully"
          });
        }
      })
    
  };
  
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <h2 className="text-3xl font-semibold text-blue-600 text-center pb-3">
        --- Join Camp ---
      </h2>
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      { role === 'participants' ?
        <button
          className="btn btn-primary text-white"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Join Camp
        </button> : <button disabled>Join Camp</button>
      }
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Camp Name</span>
                </label>
                <input
                  defaultValue={name}
                  type="text"
                  placeholder="Camp Name"
                  {...register("camp", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  defaultValue={name}
                  type="date"
                  placeholder="Date"
                  {...register("dat", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="text"
                  placeholder="Age"
                  {...register("age", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  {...register("gender")}
                  className="select select-bordered w-full "
                >
                  <option disabled value={"default"}>
                    Select a category
                  </option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Fees</span>
                </label>
                <input
                  defaultValue={fees}
                  type="text"
                  placeholder="Fees"
                  {...register("fee", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Emergency Contact</span>
                </label>
                <input
                  type="text"
                  placeholder="Emergency Contact"
                  {...register("contact", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Health Requirement</span>
                </label>
                <input
                  type="text"
                  placeholder="Requirement"
                  {...register("requirement", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <button className="btn btn-primary text-white border-0 w-full hover:bg-red-400 my-2">
              Join Camp
            </button>
            <form method="dialog" className="flex justify-center">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary text-white">Close</button>
            </form>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsPage;
