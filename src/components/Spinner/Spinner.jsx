import React from 'react'

const Spinner = () => {
    return (
        <div className='position-absolute bg-secondary w-100 vh-100 d-flex justify-content-center align-items-center'>
            <div style={{ width: "10rem", height: "10rem" }} className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner