import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const Users = () => {

    const { data: allUsers, isLoading, refetch } = useQuery({

        queryKey: ['allUsers'],
        queryFn: () => fetch('https://schedulo-server.vercel.app/users', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {

                return res.json()
            })

    })

    //handle Admin
    const handleAdmin = (user) => {
        fetch(`https://schedulo-server.vercel.app/admin/${user._id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }


        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`${user.name} added as admin successfully`);
                    refetch()
                }
            })
    }

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div data-aos="fade-up">
            <h1 className='text-center text-2xl mt-3 font-semibold'>My Appoinment History</h1>
            <p className='mb-10 text-gray-500'>Total Products:</p>

            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table p-4 mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allUsers?.map((user, i) =>
                                    <tr key={user._id}>

                                        <td>{i + 1}</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <div className="avatar mx-2">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.image} alt="product" />
                                                    </div>

                                                </div>
                                                {user.name}
                                            </div>

                                        </td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>

                                        <td>
                                            {
                                                user?.role === "admin" ?
                                                    <td>Admin</td>
                                                    :
                                                    <Link onClick={() => handleAdmin(user)} className='btn btn-xs btn-accent text-white '>Make Admin</Link>
                                            }
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <Toaster />
        </div >
    );
};

export default Users;