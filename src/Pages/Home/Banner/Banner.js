import React from 'react';
import banner from '../../../Assets/banner/4584-removebg-preview.png'

const Banner = () => {
    return (
        <div>
            <div className="hero lg:mt-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2'>
                        <img src={banner} alt='Banner' />
                    </div>
                    <div className='lg:w-1/2 text-start'>
                        <h1 className="text-6xl text-secondary font-bold">Let's</h1>
                        <h1 className="text-6xl text-secondary font-bold">scheduling</h1>
                        <h1 className="text-6xl text-primary font-bold">Easily!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;