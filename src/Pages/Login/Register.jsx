import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../Component/Context/Context";

const Register = () => {

  const { createUser, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, photo, email, password);

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
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Register Successfully",
        });
        navigate(location?.state ? location.state : "/login");
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
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Google Sign In Successfully",
        });
        navigate(location?.state ? location.state : "/");
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
          <img src="https://i.ibb.co/vhD6pvV/hr-Mdhw3fl-V.gif" alt="login gif" />
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-grad">Login</button>
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