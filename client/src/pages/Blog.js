import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
const Blog = () => {
    const [title, setTitle] = useState(null);
    const [disc, setDisc] = useState(null);
    const {id}=useParams();
    console.log(id);
    useEffect(() => {
      axios.get(`http://0.0.0.0:5000/api/posts/${id}`).then(
          res=>{
              console.log(res.data);
              setTitle(res.data.title);
              setDisc(res.data.discription);
          }
      ).catch(err=>{
          console.log(err);
      })
    }, [id])
    
    return ( 
        <>
        <div className="">
            blog
            {title && <div>{title}</div>}
            {disc && <div>{disc}</div>}
        </div>
        </>
     );
}
 
export default Blog;