import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
const ViewPosts = () => {

    const {id}=useParams();
    const [post,setPost]=useState(null);
    const API=`https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(()=>{
        const fetchPost=async()=>{
            try{
                const res=await fetch(API);
                const data =await res.json();
                setPost(data)
            }catch(error){
                console.log(error)
            }
        };
        fetchPost();
    },[id])
    
    if (!post) return <p>Loading...</p>;
     return(
        <div className="container">
        
        
           <h2>{post.title}</h2>
           <p>{post.body}</p>
        </div>   
            
        
            
        )
}

export default ViewPosts; 

