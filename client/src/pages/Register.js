import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    async function register(e) {
        e.preventDefault();
        console.log('registering');
        axios({
            method:'post',
            url:`${process.env.REACT_APP_SERVER_URL}/auth/register`,
            data:{
                "name":name,
                "email":email,
                "password":password
            }
        }).then(res=>{
            navigate(-1);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
            <div className="cnt flex items-center justify-center pb-10">
                <div className="">

                <h3 className='text-center mb-4'>Register</h3>
                <form className=''>
                    <input type="text" 
                        className=''
                        value={name}
                        placeholder='user-name'
                        onChange={e => { setName(e.target.value) }} />
                    <input type="text"
                        className=''
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                        placeholder='email'
                    />
                    <input type="text"
                        className=''
                        value={password}
                        placeholder='password'
                        onChange={e => { setPassword(e.target.value) }}
                    />
                    <button className='bg-primaryBlue text-slate-200 hover:ring-2 ring-offset-2 hover:scale-110 ease-in-out duration-200'
                    onClick={register}>Sign Up</button>
                    {/* {error && <div className="">{error}</div> } */}
                </form>
                        </div>
            </div>
        </>
    );
}

export default Register;