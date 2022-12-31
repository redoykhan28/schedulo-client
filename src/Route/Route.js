import Appoinment from "../Pages/Appoinment/Appoinment";
import Login from "../Pages/Login/Login";
import MyAppoinment from "../Pages/My Appoinment/MyAppoinment";
import SignUp from "../Pages/SignUp/SignUp";
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

        ]
    }
])