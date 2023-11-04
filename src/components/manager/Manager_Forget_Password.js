import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Manager_Forget_Password = () => {

    const [email, setEmail] = useState('');
    const nevigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const Forget = {
            email: email,
        }


        axios.post(`${process.env.REACT_APP_URL}/manager/checkemail`, Forget)
            .then(function (response) {
                // handle success
                console.log(response.data);
                nevigate('/manager_send_otp')
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    return (
        <>
            <div class="container d-flex flex-column">
                <div class="row align-items-center justify-content-center
      min-vh-100 g-0">
                    <div class="col-12 col-md-8 col-lg-4 border-top border-3 border-primary">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="mb-4">
                                    <h5>Forgot Password?</h5>
                                    <p class="mb-2">Enter your registered email ID to reset the password
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} >
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" id="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter Your Email"
                                            required="" />
                                    </div>
                                    <div class="mb-3 d-grid">
                                        <button type="submit" class="btn btn-primary">
                                            Send Your Otp
                                        </button>
                                    </div>
                                    <span>Don't have an account? <a href="/manager">sign in</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Manager_Forget_Password;