import React, { useState } from "react";

import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserLogin = ({ onLogin }) => {


  const [email,setEmail]= useState('')
  const [number,setNumber]= useState('')
  const nevigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdetail = {
        email: email,
        number: number
    }
  
    axios.post(`${process.env.REACT_APP_URL}/user/login`, userdetail)
    .then(function (response) {
        // handle success
        console.log(response.data, "Member");
        const usertoken = response.data.usertoken;
        localStorage.setItem('usertoken', usertoken);
        // console.log('tokenn::', usertoken);
        if(usertoken){
          onLogin();
          nevigate('/member')
        }
        else{
          nevigate('/')

       }
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

return(
    <>
    <div>
  <div className="img-fix" />
  <div style={{width: '100%'}}>
    <div className="m-auto wrapper">
        <form onSubmit={handleSubmit}>
      <div className="side right">
        <button className="arrow-submit display-3" type="submit">
          <div className="text-white" style={{marginTop:'-23px',marginLeft:'4px'}}>
          &#8227;
          </div>
        </button>
      </div>
      <div className="mainn left">
        <div style={{height: 120, textAlign: 'center'}}>
          <img className="img-circle" src="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input className="input" type="password" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Password" />
      </div>
        </form>
    </div>
  </div>
</div>



    
    </>
)
}
export default UserLogin