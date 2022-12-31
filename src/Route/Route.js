import DashLayout from "../Layouts/DashLayout";
import About from "../Pages/About/About";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Blogs from "../Pages/Blogs/Blogs";
import AdminAppoinment from "../Pages/Dashboard/AdminAppoiment/AdminAppoinment";
import AppoinmentDetails from "../Pages/Dashboard/AdminAppoiment/AppoinmentDetails";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import Users from "../Pages/Dashboard/Users/Users";
import Login from "../Pages/Login/Login";
import MyAppoinment from "../Pages/My Appoinment/MyAppoinment";
import UpdateAppoinment from "../Pages/My Appoinment/UpdateAppoinment";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appoinment',
                element: <PrivetRoute><Appoinment></Appoinment></PrivetRoute>
            },
            {
                path: '/myAppoinment',
                element: <PrivetRoute><MyAppoinment></MyAppoinment></PrivetRoute>
            },
            {
                path: '/updateAppoinment/:id',
                element: <PrivetRoute><UpdateAppoinment></UpdateAppoinment></PrivetRoute>,
                loader: ({ params }) => fetch(`https://schedulo-server.vercel.app/booking/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
            },

        ]
    },
    {
        path: '/',
        element: <PrivetRoute><DashLayout></DashLayout></PrivetRoute>,
        children: [
            {
                path: '/dashHome',
                element: <AdminRoute><DashHome></DashHome></AdminRoute>
            },
            {
                path: '/adminApppoint',
                element: <AdminRoute><AdminAppoinment></AdminAppoinment></AdminRoute>
            },
            {
                path: '/appoinmentDetails/:id',
                element: <AdminRoute><AppoinmentDetails></AppoinmentDetails></AdminRoute>,
                loader: ({ params }) => fetch(`https://schedulo-server.vercel.app/booking/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
            },
            {
                path: '/totalUser',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
        ]
    }
])