import React, { useState } from 'react'
import './SignUp.css';
import { Link  } from 'react-router-dom';

export default function SignUp() {
  const [data,setData]= useState({
    title : "",
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    acceptTerms:true,
  })
  const mychangeHndler = (e) => {
    setData({...data,[e.target.name]: e.target.value}) 
  }


   const mySubmit = (e) =>{
    e.preventDefault();

    fetch("http://localhost:4000/accounts/register",{
      body:JSON.stringify(data),
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    }).then(y=>y);
    console.log(data);
   }

  return (
    <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post" onSubmit={mySubmit}>
		<h2>Sign Up</h2>
		<p>It's free and only takes a minute.</p>
		<hr/>
        <div class="form-group">
        	<input type="text" class="form-control" name="title" onChange={mychangeHndler} placeholder="Title" required="required"/>
        </div>
        <div class="form-group">
        	<input type="text" class="form-control" name="firstName" onChange={mychangeHndler} placeholder="firstname" required="required"/>
        </div><div class="form-group">
        	<input type="text" class="form-control" name="lastName"  onChange={mychangeHndler} placeholder="lastname" required="required"/>
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" onChange={mychangeHndler} placeholder="Email Address" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" onChange={mychangeHndler} placeholder="Password" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirmPassword" onChange={mychangeHndler} placeholder="Confirm Password" required="required"/>
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <Link to="/">Login here</Link></div>
</div>
  )
}
