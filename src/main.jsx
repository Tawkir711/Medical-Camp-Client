import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import Context from './Component/Context/Context';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </Context>
  </React.StrictMode>
);
