import React from 'react';
import image1 from '../../../Assets/icons/clock.svg'
import image2 from '../../../Assets/icons/marker.svg'
import image3 from '../../../Assets/icons/phone.svg'

const Info = () => {
    return (
        <div data-aos="zoom-in" className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card px-5 w-full lg:w-11/12 my-4 lg:my-0 card-side bg-primary shadow-xl">
                <figure><img className='w-10/12' src={image1} alt="Movie" /></figure>
                <div className="card-body text-start text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>We are available 24 hours for your services</p>
                </div>
            </div>

            <div className="card px-5 w-full lg:w-11/12 my-4 lg:my-0 card-side bg-accent shadow-xl">
                <figure><img className='w-10/12' src={image2} alt="Movie" /></figure>
                <div className="card-body text-start text-white">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Rajshahi, Road-10036, Bangladesh</p>
                </div>
            </div>
            <div className="card px-5 w-full lg:w-11/12 my-4 lg:my-0 card-side bg-secondary shadow-xl">
                <figure><img className='w-10/12' src={image3} alt="Movie" /></figure>
                <div className="card-body text-start text-white">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+8801512312311</p>
                </div>
            </div>
        </div>
    );
};

export default Info;