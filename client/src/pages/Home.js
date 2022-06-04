import React, { useState, useEffect ,useContext } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import longbg from '../img/long.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    const [allPost, setAllPost] = useState([]);
    
    
    useEffect(() => {
        const url=`${process.env.REACT_APP_SERVER_URL}/posts/`;
        console.log(url);
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/`)
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
            <div className="bg-gradient-to-b from-gray-900 via-slate-300 to-black bg-no-repeat bg-cover w-screen min-h-screen  pt-8 "
            // style={{backgroundImage:`url(${longbg})`}}
            >
                <h2 className="py-8 text-[#ffd700] text-center">Featured Blogs</h2>
                <div className="px-4 grid lg:flex-row  lg:grid-cols-3 items-center ">

                {allPost.map(el => {
                    return (
                        <Link to={`/blog/${el._id}`} className='h-40 px-4 m-8 rounded-lg bg-white border-none shadow-xl truncate lg:flex-1 lg:h-80'>
                            <div className="" key={el._id}>
                                <h3 className='text-center' >{el.title}</h3>
                                <p className='h-3/4 truncate' >{el.discription}</p>
                                <h5 className='text-right truncate' >~by:{el.userName}</h5>

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

//bg-gradient-to-r from-slate-300 to-orange-300