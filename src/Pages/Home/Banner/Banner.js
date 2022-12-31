import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/banner/5559055.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero lg:mt-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <img src={banner} alt='Banner' />
                    </div>
                    <div data-aos="zoom-in" className='lg:w-1/2 text-start'>
                        <h1 className="text-6xl text-secondary font-bold">Let's</h1>
                        <h1 className="text-6xl text-secondary font-bold">Treat</h1>
                        <h1 className="text-6xl text-primary font-bold">And Care your Pet!</h1>
                        <p className="py-6">AniCare is and animal appoinment fixing website where you may fixed your appointment to expert anytime </p>
                        <Link to={'/appoinment'} className="btn btn-primary text-white">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;