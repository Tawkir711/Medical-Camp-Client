import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../Component/hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {
  const { name, date, audience, fees, health, location, service, description, _id } =
    useLoaderData();
  
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const updateCam = {
        name: data.name,
        date: data.date,
        audience: data.audience,
        fees: data.fees,
        health: data.health,
        location: data.location,
        service: data.service,
        description: data.description,
        image: res.data.data.display_url,
      };
      fetch(`http://localhost:5000/addCamp/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCam),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            
            Swal.fire({
              icon: "success",
              title: "Done",
              text: "Database Updated to  Update Camp ",
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">Update Camps</h3>
      <div className="bg-base-200 p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Camp Name</span>
            </label>
            <input defaultValue={name}
              type="text"
              placeholder="Camp Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input defaultValue={location}
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Service Provider</span>
              </label>
              <input defaultValue={service}
                type="text"
                placeholder="Service Provider"
                {...register("service", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Target Audience</span>
              </label>
              <input defaultValue={audience}
                type="text"
                placeholder="Target Audience"
                {...register("audience", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Health Professionals</span>
              </label>
              <input defaultValue={health}
                type="text"
                placeholder="Health Professionals"
                {...register("health", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Camp Fees</span>
              </label>
              <input defaultValue={fees}
                type="text"
                placeholder="Camp Fees"
                {...register("fees", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input defaultValue={date}
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea defaultValue={description}
              {...register("description", { required: true })}
              placeholder="Description"
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn w-full hover:bg-red-400">Update Camp</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamp;