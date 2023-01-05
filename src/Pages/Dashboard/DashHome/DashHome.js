import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaAlignLeft, FaClock, FaHandsHelping, FaUserAlt } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';
import dashimg from '../../../Assets/user profile/blank-profile-picture-g1cca60b8e_1280.png'
import { authProvider } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';


const DashHome = () => {

    //use context
    const { user, logout } = useContext(authProvider);

    //use query to fetch users
    const { data: users, isLoading } = useQuery({

        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users', {

            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`

            }

        })
            .then(res => {

                return res.json()
            })

    })



    // //use query to fetch time slots
    // const { data: slots } = useQuery({

    //     queryKey: ['slots'],
    //     queryFn: () => fetch('http://localhost:5000/slots')
    //         .then(res => {
    //             if (res.status === 401 || res.status === 403) {

    //                 return logout()


    //             }
    //             return res.json()
    //         })

    // })

    //use query to fetch booking
    const { data: allbooking } = useQuery({

        queryKey: ['allbookings'],
        queryFn: () => fetch('http://localhost:5000/allbooking', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => {

                return res.json()
            })

    })

    //use query to fetch users
    const { data: services } = useQuery({

        queryKey: ['services'],
        queryFn: () => fetch('http://localhost:5000/services')
            .then(res => {

                return res.json()
            })

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div >
            <div data-aos="fade-down" className='flex items-center justify-between flex-col lg:flex-row'>
                <h1 className='text-xl font-bold text-start p-4 my-4'>Welcome to Dashboard</h1>
                <div className='flex items-center lg:p-4 lg:my-4  lg:mr-10'>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={dashimg} alt="profile" />
                        </div>
                    </div>
                    <h4 className=' ml-2 font-semibold'>Welcome <span className='font-normal text-gray-500'>{user?.displayName}</span></h4>
                </div>
            </div>
            <div data-aos="fade-down" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                <div className="card w-full my-4 lg:my-0 lg:w-96 h-32 bg-gradient-to-r from-secondary to-accent shadow-xl rounded-none">
                    <div className="card-body">
                        <div className='flex justify-evenly items-center mt-5'>
                            <div className='flex items-center'>
                                <FaUserAlt className='text-white' />
                                <h4 className='text-xl mx-2 text-white font-bold'> Total Users:</h4>
                            </div>
                            <h4 className='text-xl text-white font-bold'>{users?.length}</h4>
                        </div>
                    </div>
                </div>

                <div className="card my-4 lg:my-0 w-full lg:w-96 h-32 bg-gradient-to-r from-info to-success shadow-xl rounded-none">
                    <div className="card-body">
                        <div className='flex justify-evenly items-center mt-5'>
                            <div className='flex items-center'>
                                <FaClock className='text-white' />
                                <h4 className='text-xl mx-2 text-white font-bold'>Available Slots:</h4>
                            </div>
                            <h4 className='text-xl text-white font-bold'>16</h4>
                        </div>
                    </div>
                </div>
                <div className="card my-4 lg:my-0 w-full lg:w-96 h-32 bg-gradient-to-r from-error to-warning shadow-xl rounded-none">
                    <div className="card-body">
                        <div className='flex justify-evenly items-center mt-5'>
                            <div className='flex items-center'>
                                <FaHandsHelping className='text-white' />
                                <h4 className='text-xl mx-2 text-white font-bold'> Total Services:</h4>
                            </div>
                            <h4 className='text-xl text-white font-bold'>{services?.length}</h4>
                        </div>
                    </div>
                </div>

            </div>

            <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 my-20 w-full'>
                <div className="card w-full lg:w-11/12 bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Products</h2>
                        <div className='text-center'>
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={allbooking}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="treatment" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="date" stackId="1" stroke="#8A4EE9" fill="#8A4EE9" />
                                    <Area type="monotone" dataKey="slots" stackId="1" stroke="#F77166" fill="#F77166" />
                                    <Area type="monotone" dataKey="status" stackId="1" stroke="#F19324" fill="#F19324" />
                                </AreaChart>
                            </ResponsiveContainer>
                            <small className='text-muted'>-AreaChart for Appoinment</small>
                        </div>
                    </div>
                </div>
                {/* <div data-aos="fade-up" className="card w-full lg:w-11/12 bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Recent Products</h2>
                        <div className='text-start'>
                            {
                                prod?.map(product => {
                                    return <div className='flex items-center'>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full">
                                                <img src={product?.image} alt="product" />
                                            </div>
                                        </div>
                                        <h4 className='font-semibold text-md mx-2'>{product?.product_name}</h4>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="card w-full lg:w-11/12 my-10 bg-base-100 shadow-md">
                <div className="card-body">
                    <h2 className="card-title">Orders</h2>
                    <div className='text-center'>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                width={500}
                                height={400}
                                data={allbooking}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="slots" fill="#FE7A6E" />
                            </BarChart>
                        </ResponsiveContainer>
                        <small className='text-muted'>-BarCharts for total number of orders</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;