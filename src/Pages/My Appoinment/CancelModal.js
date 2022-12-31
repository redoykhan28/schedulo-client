import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CancelModal = ({ deleteAppoinment, setDeleteAppoinment, message, refetch }) => {

    //handle Delete
    const handleDelete = (booking) => {

        fetch(`https://schedulo-server.vercel.app/cancelUserBooking/${booking?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => {

                return res.json()
            })
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    refetch()
                    toast.success('Booking Cancelled')
                    setDeleteAppoinment(null)



                }
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="shared-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="shared-modal" className="btn btn-sm btn-circle bg-accent hover:bg-black text-white  absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{message}</h3>
                    <div className='my-4 flex justify-center'>

                        <button onClick={() => setDeleteAppoinment(null)} className='btn btn-warning mx-2 text-white'>NO</button>

                        <button onClick={() => handleDelete(deleteAppoinment)} className='btn btn-error mx-2 text-white'>YES</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CancelModal;