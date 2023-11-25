import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/UpcomingCamps/Registration";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ],
  },
]);