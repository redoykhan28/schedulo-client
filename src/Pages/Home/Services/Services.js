import React from 'react';
import { FaAirFreshener, FaArrowRight, FaMedkit, FaVirusSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <div>
            <div data-aos="zoom-in">
                <h1 className='text-md text-center mb-2 text-primary font-bold'>Our Services</h1>

                <h1 className='text-2xl font-semibold text-center mb-12'>Services We Provide</h1>
                <div className='w-full lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <h1 className='text-warning text-2xl'><FaAirFreshener /></h1>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Grooming</h2>
                            <h2>Price:1500TK</h2>

                        </div>
                    </div>

                    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <h1 className='text-warning text-2xl'><FaMedkit /></h1>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Drew Warming</h2>
                            <h2>Price:150TK</h2>
                        </div>
                    </div>

                    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <h1 className='text-warning text-2xl'><FaVirusSlash></FaVirusSlash></h1>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Frost Cleaning</h2>
                            <h2>Price:1000TK</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-6 items-center'>
                <Link className='text-primary text-start font-semibold' to={'/appoinment'}>consult with doctor now</Link>
                <FaArrowRight className='text-primary text-start font-semibold mx-2' />
            </div>
        </div>
    );
};

export default Services;