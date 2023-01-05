import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';

const AdminAppoinment = () => {
    //use context
    const { user, logout } = useContext(authProvider);



    //use query to fetch bookings
    const { data: adminAppoinments, isLoading } = useQuery({

        queryKey: ['adminAppoinments'],
        queryFn: () => fetch('http://localhost:5000/allbooking', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {

                return res.json()
            })

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }
    return (
        <div data-aos="fade-up">
            <h1 className='text-center text-2xl mt-3 font-semibold'>Appoinment List</h1>
            <p className='mb-10 text-gray-500'>Total Appoinment: {adminAppoinments.length}</p>

            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table p-4 mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Customer Name</th>
                                <th>Treatment</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                adminAppoinments?.map((appoinment, i) =>
                                    <tr key={appoinment._id}>

                                        <td>{i + 1}</td>
                                        <td>

                                            {appoinment.name}

                                        </td>
                                        <td>{appoinment.treatment}</td>
                                        <td>{appoinment.slots}</td>
                                        <td>{appoinment.date}</td>

                                        <td>
                                            <Link to={`/appoinmentDetails/${appoinment._id}`} className='btn btn-xs btn-secondary text-white mx-1'>Details</Link>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AdminAppoinment;