import React, { useState } from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { Axios } from "axios";

const index = () => {
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    });

    const handleChange = ({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
    }

    return (
        <div className='signup_container'>
            <div className="signup-form-container">
                <div className="left">
                    <h1>Welcome back</h1>
                    <Link to="/login">
                        <button className="white_btn" type='button'>Sign In</button>
                    </Link>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input className='input' onChange={handlechange} type="text" placeholder='First Name' name='firstname' value={data.firstname} required/>
                        <input className='input' onChange={handlechange} type="text" placeholder='Last Name' name='lastname' value={data.lastname} required/>
                        <input className='input' onChange={handlechange} type="email" placeholder='E-Mail' name='email' value={data.email} required/>
                        <input className='input' onChange={handlechange} type="Password" placeholder='Password' name='password' value={data.password} required/>
                        <button className='green_btn' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index