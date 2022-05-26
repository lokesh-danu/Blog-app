import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");
    const [user, setUser] = useState("");
    useEffect(() => {
        const token=localStorage.getItem("auth-token");
        // console.log(token);
        if(!token){
            window.location.replace('/login');
        }
        else{
            console.log(token);
        }
    }, [])
    
    const post=async (e)=>{
        e.preventDefault();
        console.log(title,disc,user);
        await axios.post(`http://0.0.0.0:5000/api/posts`,{
            title,
            disc,
            user
        })
        .then( res => {
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    return ( 
        <>
        <form >
            <input type="text"
            placeholder='title'
            value={title}
            onChange={e=>{setTitle(e.target.value)}}
            />
            <input type="text"
            placeholder='discription'
            value={disc}
            onChange={e=>{setDisc(e.target.value)}}
            />
            <input type="text"
            placeholder='name'
            value={user}
            onChange={e=>{setUser(e.target.value)}}
            />
            <button onClick={post} >Post Blog</button>
        </form>
        </>
     );
}
 
export default Create;