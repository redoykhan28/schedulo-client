import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';

const Nav = () => {

    //use context
    const { user, logout } = useContext(authProvider)

    //handle logout
    const handleLogout = () => {

        logout()
            .then(res => {

            })

    }

    return (
        <div className="navbar bg-base-100 p-2 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <Link to={'/home'} className="text-primary text-2xl normal-case font-bold">Schedulo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Blogs</Link></li>
                    {
                        user &&
                        <li><Link to={'/myAppoinment'}>My Appoinment</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/appoinment'} className="btn btn-accent mx-2 text-white rounded-full px-8">Schedule</Link>
                {


                    user ?
                        <Link onClick={handleLogout} className="btn btn-secondary text-white rounded-full px-8">Logout</Link>
                        :
                        <Link to={'/login'} className="btn btn-primary text-white rounded-full px-8">Login</Link>

                }
            </div>
        </div>
    );
};

export default Nav;