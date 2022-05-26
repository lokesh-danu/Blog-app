import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    async function register(e) {
        e.preventDefault();
        console.log('registering');
        try {
            const res = await axios.post('http://0.0.0.0:5000/api/auth/register', {
                name,
                email,
                password
            });
            if(res.status===200){
                window.location.replace('/login');
            }
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }
    return (
        <>
            <div className="">
                i am register
                <form >
                    <input type="text"
                        value={name}
                        placeholder='user-name'
                        onChange={e => { setName(e.target.value) }} />
                    <input type="text"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                        placeholder='email'
                    />
                    <input type="text"
                        value={password}
                        placeholder='password'
                        onChange={e => { setPassword(e.target.value) }}
                    />
                    <button onClick={register}>Register</button>
                    {error && <div className="">{error}</div> }
                </form>
            </div>
        </>
    );
}

export default Register;