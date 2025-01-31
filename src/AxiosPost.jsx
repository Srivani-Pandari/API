import React, { useState } from 'react'
import {useForm,} from "react-hook-form"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "./Posts.css";
const AxiosPost = () => {

    const data={fname:"", lname:""};

    const [inputData,setInputData]=useState(data);

    const handleData=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }



    const onSubmit=async (data)=> {
        // e.preventDefault();
        try{
        axios.post("https://jsonplaceholder.typicode.com/posts?",inputData)
        await new Promise((response)=>{
            console.log(response)
            toast.success("submitted succesfully!",{
                position:"center"})
            
                
            });
        }catch(error){
            console.error("submission failed:",error);
            toast.error("submission failed");
        }
            
           
        }
        
    

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>Title</label>
        <input 
        {...register("title",{
            // required:"Title is required",
            minLength:{value:3,message:"filed cannot be empty"}
        })}
            name="fname" value={inputData.fname} onChange={handleData}
            
        />
        {errors.title && <p style={{color:"red"}}>{errors.title.message}</p>}
        

        <br/>

        <label>Description</label>
        <input 
        {...register("description",{
            // required:"Description is required",
            minLength:{value:3,message:"input filed cannot be empty"},
            maxLength:{value:1000,message:"range is upto 1000 words"},
        })}
            name='lname' value={inputData.lname} onChange={handleData}
        />
        {errors.description && <p style={{color:"red"}}>{errors.description.message}</p>}

        <br/>

        <input type="submit"/>
    </div>
    </form>

    <ToastContainer/>
    
    </>
  )
}

export default AxiosPost;
