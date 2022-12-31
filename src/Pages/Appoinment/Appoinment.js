import React, { useContext, useState } from 'react';
import { authProvider } from '../../Context/AuthContext';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';

const Appoinment = () => {

    //use context
    const { user } = useContext(authProvider)

    // state for date 
    const [selectDate, setSelect] = useState(new Date());

    const date = format(selectDate, 'PP')

    //use query to load data
    const { data: time = [], refetch, isLoading } = useQuery({

        queryKey: ['time', date],
        queryFn: () => fetch(`http://localhost:5000/slots?date=${date}`)
            .then(res => res.json())

    })

    //handlePost
    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.username.value
        const email = form.email.value
        const slots = form.time.value
        const date = form.date.value
        const note = form.note.value
        const status = 'pending'

        console.log(slots, date, name, email, note)

        const currentBooking = {

            name,
            email,
            slots,
            date,
            note,
            status
        }

        //post data
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(currentBooking)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success('Appoinment Booked!')
                form.reset()
                refetch()
            })
    }



    return (
        <div className=''>
            <div className="card w-9/12 p-4 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-2xl font-semibold'>Schedule an  Appoinment</h1>
                </div>

                <div className='my-4 flex flex-col-reverse lg:flex-row'>
                    <div className='lg:w-3/5 mx-auto'>
                        <form onSubmit={handlePost} action="">
                            <div className='text-start'>
                                <p>Username</p>
                                <input type="text" name='username' disabled defaultValue={user?.displayName} className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                            </div>

                            <div className='text-start'>
                                <p>Email</p>
                                <input type="email" name='email' disabled defaultValue={user?.email} className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                            </div>

                            <div className='text-start'>
                                <p>Date</p>
                                <input type="text" name='date' disabled value={format(selectDate, 'PP')} className="input input-bordered w-11/12 my-4 border mx-auto" required />

                            </div>

                            <div>
                                <div className='text-start'>
                                    <p className='mb-2'>Select Time:</p>
                                    {
                                        time.map(t => <select key={t._id} name="time" className="select select-bordered w-full max-w-xs" required>
                                            {

                                                t.slots?.map((time, i) => <option value={time} key={i}>{time}</option>)

                                            }
                                        </select>
                                        )

                                    }

                                </div>
                            </div>
                            <div className='text-start mt-5'>
                                <textarea name='note' className="textarea mb-6 w-9/12 mx-auto textarea-bordered" placeholder="Write a Note..." required></textarea>

                            </div>
                            <button className="btn w-full btn-active bg-primary text-white border-0 rounded-3 hover:bg-accent">Booked Appoinment</button>


                        </form>
                    </div>
                    <div className='lg:w-4/12 mx-auto'>
                        <div>
                            <DayPicker
                                mode='single'
                                selected={selectDate}
                                onSelect={setSelect}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />
        </div>
    );
};

export default Appoinment;