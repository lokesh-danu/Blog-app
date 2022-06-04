import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg'
export const Modal = ({ children, closeModal }) => {
    return (
        <div className="h-screen w-screen fixed top-0 flex items-center justify-center bg-blue-200/75">
            <div className=" drop-shadow-xl rounded-md h-1/5 w-3/5 lg:w-2/5 bg-white flex items-center justify-center">
                <button onClick={closeModal}
                    className="text-xl absolute right-2 top-2">
                    <CgClose></CgClose>
                </button>
                <h5 className='text-center'>
                    {children}
                </h5>
            </div>
        </div>

    );
}
