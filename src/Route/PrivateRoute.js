import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { authProvider } from "../Context/AuthContext"
import Loader from "../Pages/Loader/Loader"

const PrivetRoute = ({ children }) => {

    //location
    const location = useLocation()

    //use context
    const { user, loader } = useContext(authProvider)

    if (loader) {

        return <Loader></Loader>
    }

    if (user) {

        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>
}
export default PrivetRoute;