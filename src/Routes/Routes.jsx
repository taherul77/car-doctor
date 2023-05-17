import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import App from "../App";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path:'login',
          element:<Login></Login>,
        },
        {
          path:'sign_up',
          element:<SignUp></SignUp>
        },
        {
          path:'checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: 'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'about',
          element:<About></About>,
        },
        {
          path:'contact',
          element:<Contact></Contact>,
        },
        {
          path:'service',
          element:<Service></Service>,
        },
        {
          path:'blog',
          element:<Blog></Blog>,
        }

      ]
    },
  ]);
  export default router;