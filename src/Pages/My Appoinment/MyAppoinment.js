import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import Loader from '../Loader/Loader';
import CancelModal from './CancelModal';

const MyAppoinment = () => {

    //use context
    const { user } = useContext(authProvider)

    //deleting product
    const [deleteAppoinment, setDeleteAppoinment] = useState(null)

    //use query to load data
    const { data: mybooking = [], refetch, isLoading } = useQuery({

        queryKey: ['mybooking'],
        queryFn: () => fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
            .then(res => res.json())

    })

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
                                <th>Time</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Reschedule</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                mybooking?.map((book, i) =>
                                    <tr key={book._id}>

                                        <td>{i + 1}</td>
                                        <td>{book?.name}</td>
                                        <td>{book.slots}</td>
                                        <td>{book.date}</td>
                                        <td className='text-error'>{book.status}</td>

                                        <td>
                                            <label onClick={() => setDeleteAppoinment(book)} htmlFor="shared-modal" className="btn btn-xs bg-error text-white mx-1 cursor-pointer hover:text-red-700 border-0">Cancel</label>
                                        </td>

                                        <td>
                                            <Link className='btn btn-xs btn-secondary text-white '>Reschedule</Link>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteAppoinment &&
                    <CancelModal refetch={refetch} deleteAppoinment={deleteAppoinment} setDeleteProduct={setDeleteAppoinment} message={'Are you sure you wants to cancel?'}></CancelModal>

                }
            </div>
            <Toaster />
        </div >
    );
};

export default MyAppoinment;