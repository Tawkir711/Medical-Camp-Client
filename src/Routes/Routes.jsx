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
import AddCamps from "../Pages/Dashboard/AddCamps/AddCamps";
import ManageCamps from "../Pages/Dashboard/ManageCamps/ManageCamps";
import ManageRegister from "../Pages/Dashboard/ManageRegister/ManageRegister";
import UpdateCamp from "../Pages/Dashboard/UpdateCamp/UpdateCamp";
import DetailsPage from "../Pages/Home/PopularCamps/DetailsPage";


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
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>,
      },
      {
        path: 'detailsPage/:id',
        element: <DetailsPage></DetailsPage>,
        loader: ({params})=>fetch(`http://localhost:5000/addCamp/${params.id}`)
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
        path: 'manageCamps',
        element:<ManageCamps></ManageCamps>
      },
      {
        path: 'addCamps',
        element:<AddCamps></AddCamps>
      },
      {
        path: 'updateCamp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({params})=> fetch(`http://localhost:5000/addCamp/${params.id}`)
      },
      {
        path: 'manageRegister',
        element:<ManageRegister></ManageRegister>
      }
    ]
  }
]);