import logo from '../img/logo2.svg';
import React, { useState } from 'react';
import { BsFacebook, BsTwitter,BsInstagram,BsPinterest} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="py-2 px-3  items-center justify-between fixed w-screen top-0 opacity-90 bg-black flex md:px-6 lg:px-10 lg:py-5   lg:h-20 ">
                {/* <img src={logo} alt="logo" className="h-12 text-white" /> */}
                <button className='text-white text-3xl md:hidden '
                    onClick={e => {
                        setMenu(!menu);
                    }} >
                    <i className="fa-solid fa-bars "></i>
                </button>

                <div className="hidden md:flex md:text-2xl lg:text-4xl mx-2 text-white space-x-2 ">
                    <BsFacebook></BsFacebook>
                    <BsTwitter></BsTwitter>
                    <BsInstagram></BsInstagram>
                    <BsPinterest></BsPinterest>
                </div>
                <ul className="hidden md:flex space-x-1 font-roboto" >
                    <Link to='/'>
                        <li className="btnOval  text-neutral-300 hover:text-black hover:bg-slate-50" >Home</li>
                    </Link>
                    <Link to='/'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >About</li>
                    </Link>
                    <Link to='/'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >contact</li>
                    </Link>

                    <Link to='/create'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >Write</li>
                    </Link>
                </ul>
                <div className="flex space-x-6">
                    <Link to='/register'>
                        <div className="btnRectangle bg-white text-neutral-800 hover:text-black hover:scale-110 " >Register</div>
                    </Link>
                    <Link to='/login'>
                        <div className="btnRectangle bg-white text-neutral-800 hover:text-black hover:scale-110 " >Login</div>
                    </Link>
                </div>
            </nav>
            {/* {
            true && 
            
        } */}
            <div className={`fixed top-0 py-4 md:hidden  bg-black w-[60vw] h-full ease-in-out duration-500 ${menu ? 'translate-x-0' : 'translate-x-[-25rem] '} `}>
                <button className='absolute right-4 text-white text-3xl md:hidden '
                    onClick={e => {
                        setMenu(!menu);
                    }} >
                    <i className="fa-solid fa-x"></i>

                </button>
                
                <ul className="flex flex-col items-center mt-14 space-y-4 text-xl font-roboto" >
                    <Link to='/'>
                        <li className="btnOval  text-neutral-300 hover:text-black hover:bg-slate-50" >Home</li>
                    </Link>
                    <Link to='/'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >About</li>
                    </Link>
                    <Link to='/'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >contact</li>
                    </Link>

                    <Link to='/create'>
                        <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >Write</li>
                    </Link>
                </ul>
                <div className="flex absolute bottom-0 left-0 w-[60vw] pb-4 justify-center text-white space-x-3">
                    <BsFacebook></BsFacebook>
                    <BsTwitter></BsTwitter>
                    <BsInstagram></BsInstagram>
                    <BsPinterest></BsPinterest>
                </div>
            </div>
        </>
    );
}

export default Navbar;