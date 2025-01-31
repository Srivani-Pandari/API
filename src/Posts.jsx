import React, { useEffect ,useState} from "react";
import {Link} from "react-router";
import "./style.css";



const total=100;
const Posts=()=>{

    const [record,setRecord]=useState([]);
    // const [posts,setPosts]=useState();
    const [currPage,setCurrPage]=useState(1);
    const[numberposts,setNuberPosts]=useState(10);
    const indexofLastItem=currPage*numberposts;
    const indexofFirstItem=indexofLastItem-numberposts;


    const currentItems=record?.slice(indexofFirstItem,indexofLastItem);
    // const totalPages=Math.ceil(record?.total/numberposts);
    const totalPages=Math.ceil(total/numberposts);


    

    let API="https://jsonplaceholder.typicode.com/posts?";

    const fetchApiData= async (url)=>{

       try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        setRecord(data);
       }catch(error){
        console.log(error);

       }

    }

    useEffect(()=>{
        fetchApiData(API);
    },[]);


    const handlePrev=()=>{
        setCurrPage((sri)=>Math.max(sri-1,1))
    }

    const handleNext=()=>{
        setCurrPage((sri)=>Math.min(sri+1,totalPages));
    }

    const handlePageClick=(pgno)=>{
        setCurrPage(pgno);
    }

    return(
        <>
        <div className="container">
        {  
        
            currentItems.map((value,index)=>(
            
            <ul key={index} className="info">
                <div className="Title">{value.title}</div>
                <div className="Body">{value.body}</div>
            </ul>
            
             ) )
        }

        <div className="Pagination">
            <button onClick={handlePrev}  className="option" disabled={currPage===1} >Prev</button>
            {Array.from({length:totalPages}, (_, index)=>(
                <button onClick={()=>handlePageClick(index+1)}  className="btn">{index+1}</button>
            ))}
            <button onClick={handleNext} className="option" disabled={currPage===totalPages} >Next</button>
        </div>
        </div>

        
            
        </>
    )


}

export default Posts;