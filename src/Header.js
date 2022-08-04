import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {


  const myNavigation = useNavigate()



  const myLogout = () =>{

    localStorage.removeItem("userINFO");
    myNavigation("/")

  }
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
         <button className='nav-link' onClick={myLogout}>Logout</button>
        </li>
      </ul>
    </div>
    </nav>
  )
}
