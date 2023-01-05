import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import image from '../../../Assets/appoin details/39463-removebg-preview.png'

const AppoinmentDetails = () => {

    //load data
    const appoinment = useLoaderData()
    // console.log(appoinment)

    //object distructuring
    const { name, email, date, slots, note, status, treatment } = appoinment

    //update to accept
    const handleAccept = (appoinment) => {
        fetch(`http://localhost:5000/acceptStatus/${appoinment._id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`${appoinment.name}'s Appoinment Accepted!`);
                    window.location.reload()
                }
            })
    }

    //update to canceled
    const handleCancled = (appoinment) => {
        fetch(`http://localhost:5000/cancelStatus/${appoinment._id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`${appoinment.name}'s Appoinment Canceled!`);
                    window.location.reload()
                }
            })
    }

    return (
        <div data-aos="fade-up" className="card lg:card-side w-11/12 mx-auto mt-20 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body text-start">
                <h2 className="text-center text-2xl font-semibold mb-4">Treatment: {treatment}</h2>
                <h2 className='text-md font-semibold'>Customer Name: {name}</h2>
                <h2 className='text-md font-semibold'>Email: {email}</h2>
                <h2 className='text-md font-semibold'>Appoinment Time: {slots}</h2>
                <h2 className='text-md font-semibold'>Date: {date}</h2>
                <p className='text-md text-gray-500'>Note: {note}</p>
                {
                    status === 'Confirmed' ?
                        <p className='text-md text-semibold'>Status: <span className='text-primary'>{status}</span></p>
                        :
                        <p className='text-md text-semibold'>Status: <span className='text-error'>{status}</span></p>
                }
                {
                    status === 'Confirmed' || status === 'Canceled' ?
                        <p className='text-md text-semibold'><span className='text-warning'>{status}...!</span></p>
                        :
                        <div className='flex items-center'>
                            <button onClick={() => handleCancled(appoinment)} className='btn btn-error text-white'>Reject</button>
                            <button onClick={() => handleAccept(appoinment)} className='btn btn-primary mx-3 text-white'>Accept</button>
                        </div>
                }

            </div>
            <Toaster />
        </div>
    );
};

export default AppoinmentDetails;