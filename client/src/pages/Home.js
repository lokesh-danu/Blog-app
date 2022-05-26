import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        axios.get('http://0.0.0.0:5000/api/posts/')
            .then(res => {
                console.log(res.data);
                setAllPost(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <Header></Header>
            <div className="bg-gradient-to-r from-violet-300 to-fuchsia-300 h-screen">
                <h1 className="font-lora text-6xl py-8 text-center">Featured Blogs</h1>
                <div className="flex justify-center w-screen flex-wrap h-5/6">

                {allPost.map(el => {
                    return (
                        <Link to={`/blog/${el._id}`} className='w-1/4 mx-4 my-5 h-1/3 border-4'>
                            <div className="" key={el._id}>
                                <h2 className='font-lora text-3xl' >{el.title}</h2>
                                <span>{el.discription}</span>

                            </div>
                        </Link>
                    )
                })}
                </div>
            </div>
        </>
    );
}

export default Home;