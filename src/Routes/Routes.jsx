import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/UpcomingCamps/Registration";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManagersCamps from "../Pages/Dashboard/ManagersCamps/ManagersCamps";
import AddCamps from "../Pages/Dashboard/AddCamps/AddCamps";
import ManagersRegister from "../Pages/Dashboard/ManagersRegister/ManagersRegister";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Registration",
        element:<Registration></Registration>
      },
      {
        path: 'availAbleCamp',
        element:<PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      },
      {
        path: 'contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'managersCamps',
        element:<ManagersCamps></ManagersCamps>
      },
      {
        path: 'addCamps',
        element:<AddCamps></AddCamps>
      },
      {
        path: 'managersRegister',
        element:<ManagersRegister></ManagersRegister>
      }
    ]
  }
]);