import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='my-40'>
                <progress className="progress bg-primary  w-56"></progress>
                <h1 className='text-md font-bold'>Loading...</h1>
            </div>
        </div>
    );
};

export default Loader;