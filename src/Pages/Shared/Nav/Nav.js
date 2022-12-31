import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';
import useAdmin from '../../../Hooks/AdminHooks';
import useCustomer from '../../../Hooks/CustomerHooks';

const Nav = () => {

    //use context
    const { user, logout } = useContext(authProvider)

    //is admin
    const [isAdmin] = useAdmin(user?.email)

    //is customer
    const [isCustomer] = useCustomer(user?.email)

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
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/about'}>Blogs</Link></li>
                        {
                            isCustomer &&
                            <li><Link to={'/myAppoinment'}>My Appoinment</Link></li>
                        }
                        {
                            isAdmin &&
                            <li><Link to={'/dashHome'}>Dashboard</Link></li>
                        }
                        {
                            !isAdmin &&
                            <Link to={'/appoinment'}>Schedule</Link>
                        }

                    </ul>
                </div>
                <Link to={'/home'} className="text-primary text-2xl normal-case font-bold">AniCare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul data-aos="zoom-in" className="menu font-semibold menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/home'}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/about'}>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/blogs'}>Blogs</NavLink></li>
                    {
                        isCustomer &&
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/myAppoinment'}>My Appoinment</NavLink></li>
                    }
                    {
                        isAdmin &&
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/dashHome'}>Dashboard</NavLink></li>


                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !isAdmin &&
                    <Link to={'/appoinment'} className="btn hidden lg:flex btn-accent mx-2 text-white rounded-full px-8">Schedule</Link>
                }
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