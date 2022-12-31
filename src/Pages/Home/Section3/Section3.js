import React from 'react';
import image from '../../../Assets/5514209.jpg'

const Section3 = () => {
    return (
        <div>
            <div data-aos="fade-up" className="hero  w-full lg:w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <img src={image} className="rounded-lg" alt='img' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <h1 className="text-5xl font-bold">Exceptional Pet Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;