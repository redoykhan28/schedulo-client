import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authProvider } from "../Context/AuthContext";
import useAdmin from "../Hooks/AdminHooks";
import Loader from "../Pages/Loader/Loader";

const AdminRoute = ({ children }) => {

    //location
    const location = useLocation()

    //use context
    const { user, loader } = useContext(authProvider);

    //use customhook to check admin
    const [isAdmin, adminLoader] = useAdmin(user?.email)
    // console.log(isAdmin, loader, adminLoader)

    if (adminLoader || loader) {

        return <Loader></Loader>

    }

    if (user && isAdmin) {

        return children

    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>
};

export default AdminRoute;