import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Component/Context/Context";

const Navbar = () => {

  // const { user, logOut } = useContext(AuthContext);

  const NavLink = (
    <>
      <li>
        <Link
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white btn btn-primary btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/availAbleCamp"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white btn btn-primary btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Available Camps
        </Link>
      </li>
      <li>
        <Link
          to={"/contactUs"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white btn btn-primary btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to={"/login"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white btn btn-primary btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLink}
          </ul>
        </div>
        <img
          className="w-10 rounded-lg"
          src="https://i.postimg.cc/xC5PtsLP/Medical-Camp.jpg"
          alt=""
        />
        <h2 className="text-xl font-medium ml-3">Medical Camp</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
