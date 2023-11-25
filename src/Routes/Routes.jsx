import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/UpcomingCamps/Registration";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";


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
        element:<AvailableCamps></AvailableCamps>
      },
      {
        path: 'contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
]);