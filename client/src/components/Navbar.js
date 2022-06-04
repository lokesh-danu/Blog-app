import logo from '../img/logo2.svg';
import React, { useState, useEffect, useContext } from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsPerson, BsVectorPen } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { isExpired, decodeToken } from "react-jwt";
import { FiLogOut, FiSettings } from 'react-icons/fi'
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false)
    const [user, setUser] = useContext(UserContext);
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            const myToken = decodeToken(token);
            console.log(myToken);
            const newUser = {
                "name": myToken.name,
                "id": myToken.id,
                "token":token
            }
            setUser(newUser);
        }

    }, [])
    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth-token");
    }
    return (
        <>
            <nav className="nav px-3  justify-between  bg-black/90  md:px-6 lg:px-10 ">
                {/* <img src={logo} alt="logo" className="h-12 text-white" /> */}
                <button className='text-white text-3xl md:hidden '
                    onClick={e => {
                        setMenu(!menu);
                    }} >
                    <i className="fa-solid fa-bars "></i>
                </button>

                <div className="hidden md:flex md:text-2xl lg:text-3xl lg:space-x-3  mx-2 text-white space-x-2 ">
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
                {
                    user ?
                        <div className="text-white flex items-center space-x-1 relative"
                            onClick={e => {
                                setUserMenu(!userMenu);
                            }}
                        >
                            <BsPerson className='text-2xl' />
                            <span>{user.name}</span>
                            <div className={`flex flex-col rounded-md space-y-2 absolute top-full h-fit  right-0  bg-blue-500 px-5 pt-4 pb-8 text-white text-xl truncate 
                            ${userMenu ? '' : 'scale-y-0'}  duration-500 ease-in-out origin-top
                            `}>
                                <button className='btnOval hover:text-red-500' >
                                    <FiSettings />
                                    <span>Settings</span>
                                </button>
                                     <Link to="/create" >
                                <button className='btnOval hover:text-red-500' >
                                     <BsVectorPen /> 
                                    <span>New Blog</span>
                                     </button>
                                     </Link>
                                <button className='btnOval hover:text-red-500'
                                    onClick={logout} > 
                                     <FiLogOut /> 
                                    <span>Logout</span>
                                     </button>
                            </div>

                        </div>
                        : <div className="flex space-x-6 text-white">
                            <Link to='/register'>
                                <div className="btnRectangle ring-blue-400 ring-offset-2 bg-blue-400  hover:ring-2 hover:scale-110 ease-in-out duration-150" >Register</div>
                            </Link>
                            <Link to='/login'>
                                <div className="btnRectangle ring-teal-400 bg-green-400 ring-offset-2 hover:ring-2 hover:scale-110 ease-in-out duration-150 " >Login</div>
                            </Link>
                        </div>

                }

            </nav>

            {/* side menu pop mobile */}
            <div className={`fixed top-0 py-4 md:hidden  bg-black w-[60vw] h-full opacity-95 
            ${menu ? 'translate-x-0' : 'translate-x-[-25rem] '} ease-in-out duration-500` }
            >
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