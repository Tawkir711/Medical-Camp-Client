import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../Component/Context/Context";
import { useForm } from "react-hook-form";
import useAxiosPublic from './../../Component/hooks/useAxiosPublic';

const Register = () => {
  const { reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, signInGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const role = form.get("role");
    console.log(name, photo, email, password, role);

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      Swal.fire({
        icon: "error",
        title:
          "Minimum Six characters, at least one letter, one number and one special character",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
              role: role
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    icon: "success",
                    title: "Your Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(location?.state ? location.state : "/login");
              }
            })
        })
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops Try Again",
          text: error.message,
        });
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your Google Sign In Successfully",
              });
              navigate(location?.state ? location.state : "/");
            }
        })
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops Try Again",
          text: error.message,
        });
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Medical Camp / Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img
            src="https://i.ibb.co/vhD6pvV/hr-Mdhw3fl-V.gif"
            alt="login gif"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Role</span>
              </label>
              <select className="border" required name="role">
                <option value="participants">Participants</option>
                <option value="organizers">Organizer</option>
                <option value="healthcare">Healthcare Professionals</option>
              </select>
              {/* <input
                type="text"
                name="role"
                placeholder="Select Your Role"
                className="input input-bordered"
                required
              /> */}
            </div>
            <div className="form-control ">
              <button className="btn btn-grad">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?
            <Link className="text-red-600 font-semibold " to={"/login"}>
              Login
            </Link>
          </p>
          <div className="text-center my-4">
            <button
              onClick={handleGoogle}
              className="btn btn-success text-white w-3/4"
            >
              <FaGoogle className="text-xl"></FaGoogle> Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;