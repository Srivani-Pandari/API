import React from 'react'
import {Link} from "react-router";

const Home = () => {
  return (
    <>
        
        <h4>

        <Link to="/posts">View Posts</Link> 

        </h4>

        <h4>
           
        <Link to="/create"> Create Post</Link>

        </h4>
    </>
  )
}
export default Home;
