import React, { useState } from 'react';

const Modal = (props) => {
    const [open, setOpen] = useState(false);
    const openModal=()=>{
        setOpen(true);
    }
    const closeModal=()=>{
        setOpen(false);
    }    
    return ( 
        <>
        {
            open &&
        <div className="h-screen w">
            <h2>Modal is here</h2>
            {props.children}
        </div>

        }
        </>
     );
}
 
export default Modal;