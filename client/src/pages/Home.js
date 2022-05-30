import React, { useState, useEffect ,useContext } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import longbg from '../img/long.jpg'
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
            <div className="bg-gradient-to-r from-slate-300 to-orange-300 bg-no-repeat bg-cover  min-h-screen  pt-8"
            // style={{backgroundImage:`url(${longbg})`}}
            >
                <h2 className="py-8  text-center">Featured Blogs</h2>
                <div className="flex justify-center w-screen flex-wrap h-5/6">

                {/* {allPost.map(el => {
                    return (
                        <Link to={`/blog/${el._id}`} className='w-1/4 mx-4 my-5 h-52 border-4 rounded-md p-4'>
                            <div className="" key={el._id}>
                                <h4 className='' >{el.title}</h4>
                                <span>{el.discription}</span>
                                <h6>~{el.userName}</h6>

                            </div>
                        </Link>
                    )
                })} */}
                </div>
            </div>
        </>
    );
}

export default Home;

//bg-gradient-to-r from-slate-300 to-orange-300