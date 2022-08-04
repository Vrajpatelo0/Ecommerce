import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';



export default function Login() {
  const [data,setData]= useState({
    email:"",
    password:"",
  })

  const myNavigate = useNavigate();


  const mychangeHndler = (e) => {
    setData({...data,[e.target.name]: e.target.value}) 
  }


   const mySubmit = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:4000/accounts/authenticate"
    ,data)
    .then(y=>{
       
        localStorage.setItem("userInfo",JSON.stringify(y.data));
        myNavigate("/Product")
    });
   }

  return (
    <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post" onSubmit={mySubmit}>
		<h2>Login</h2>
		<p>It's free and only takes a minute.</p>
		<hr/>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" onChange={mychangeHndler} placeholder="Email Address" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" onChange={mychangeHndler} placeholder="Password" required="required"/>
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
    </form>
	<div class="text-center">Don't have an account? <Link to="/SignUp">SignUp here</Link></div>
</div>
  )
}
