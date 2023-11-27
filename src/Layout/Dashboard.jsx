import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCampground, FaHome, FaRegShareSquare,  } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-blue-400">
        <h2 className="text-3xl font-semibold text-center pt-5">Medical Camp</h2>
        <ul className="menu p-4">
          <>
            <li>
              <NavLink to="/dashboard/addCamps">
                <FaHome></FaHome>
                Add Camps
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageCamps">
                <FaCampground></FaCampground>
                Manage Camps
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageRegister">
                <FaRegShareSquare></FaRegShareSquare>
                Manage Register
              </NavLink>
            </li>
          </>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/availableCamp">
              <FaHome></FaHome>
              Available Camps
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;