import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { isExpired, decodeToken } from "react-jwt";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [user,setUser]=useContext(UserContext);
    useEffect(() => {
      if(token){
        localStorage.setItem("auth-token", token);
        const myToken = decodeToken(token);
            console.log(myToken);
            const newUser = {
                "name": myToken.name,
                "id": myToken.id,
                "token":token
            }
            setUser(newUser);
      }
      console.log(token);
    }, [token])
    
    async function login(e) {
        e.preventDefault();
        console.log('registering');
        axios.post('http://0.0.0.0:5000/api/auth/login', {
            email,
            password
        }).then( res =>{
            setToken(res.data.token);    
        }).catch(err=>{
            console.log(err);
            setError(err);
        })
        // console.log(localStorage.getItem("auth-token"));
        
    };
    return (
        <>
            <div className="">
                <h3 className='text-center
                ' >Login</h3>
                <form >
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
                    <button onClick={login}>Login</button>
                    {error && <div className="">{error}</div>}
                    {token && <div className="">{token}</div>}
                    
                </form>
            </div>
        </>
    );
}

export default Login;