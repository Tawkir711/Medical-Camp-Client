import React from 'react';
import { Helmet } from 'react-helmet';
import img from '../../assets/login/login.svg'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Medical Camp / Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center">Login your account !</h1>
          <form onSubmit={""} className="card-body">
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
            Don't have an account?
            <Link className="text-red-600 font-semibold " to={"/register"}>
              Register
            </Link>
          </p>
          <div className="text-center my-4">
            <button onClick={""} className="btn btn-success text-white w-3/4">
              <FaGoogle className="text-xl"></FaGoogle> Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;