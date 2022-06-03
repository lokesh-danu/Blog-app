import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Blog = () => {
    const [title, setTitle] = useState(null);
    const [disc, setDisc] = useState(null);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`).then(
            res => {
                console.log(res.data);
                setTitle(res.data.title);
                setDisc(res.data.discription);
            }
        ).catch(err => {
            console.log(err);
        })
    }, [id])

    return (
        <>
            <div className="w-screen min-h-screen bg-slate-200 ">
                <div className="px-4 pt-4">

                    <h2 className='text-center mb-4  lg:mb-8 ' >

                        {title && <div>{title}</div>}
                    </h2>
                    <p className='' >
                        {disc && <div>{disc}</div>}
                    </p>
                    <h4>

                    </h4>
                </div>
            </div>
        </>
    );
}

export default Blog;