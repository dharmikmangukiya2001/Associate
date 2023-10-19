import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Provider_Login = () => {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const nevigate =useNavigate()


    const handleSubmit = () => {
        // e.preventDefault();
        const providerdetails = {
            email : email,
            number : password
        }
        // console.log("EMAIL:", email, "PASSWORD:", password);
        setEmail(email);
        setPassword(password);

        axios.post(`${process.env.REACT_APP_URL}/provider/login`, providerdetails)
        .then(function(response){
            // handle success
            const providertoken =response.data.token;
            localStorage.setItem('providertoken', providertoken);
            console.log(response.data,"Successfully logged in");
            nevigate('/provider_dashboard')

        })
        .catch(function (error) {
            console.log(error);
        })

    }

    return (
        <>
            <section className="pro-login">
                <div className="form-box">
                    <div className="form-value">
                        <form>
                            <h2 className="text-white">Provider Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <label htmlFor>Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline" />
                                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <label htmlFor>Password</label>
                            </div>
                            <div className="forget">
                                <label htmlFor><input type="checkbox" required/>Remember Me  <a href="#">Forget Password</a></label>
                            </div>
                            <button className="btn border text-white mt-3" onClick={handleSubmit}>Log in</button>
                            
                        </form>
                    </div>
                </div>
            </section>


        </>
    )

}
export default Provider_Login