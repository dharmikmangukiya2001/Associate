import React from "react";
import './ManagerLogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManagerLogin = ({ onLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nevigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const managerdetails = {
            email: email,
            number: password
        }

        axios.post(`${process.env.REACT_APP_URL}/manager/login`, managerdetails)
            .then(function (response) {
                // handle success
                const managertoken = response.data.managertoken;
                localStorage.setItem('managertoken', managertoken);
                // console.log(response.data)
                if (managertoken) {// console.log('tokenn::', token);
                    nevigate('/manager_dashboard')
                    onLogin();
                }
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
                            <h2 className="text-white">Manager Login</h2>
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
                                <label htmlFor><input type="checkbox" required/>Remember Me  <a href="/manager_forget_password">Forget Password</a></label>
                            </div>
                            <button className="btn border text-white mt-3" onClick={handleSubmit}>Log in</button>
                            
                        </form>
                    </div>
                </div>
            </section>
            
        </>
    )

}
export default ManagerLogin