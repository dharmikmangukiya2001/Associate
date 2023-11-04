import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Manager_Reset_Password = () => {


  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
    const nevigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const ForgetPassword = {
          number: password,
          cnumber: cpassword,
        }

        axios.post(`${process.env.REACT_APP_URL}/manager/forget_number`, ForgetPassword)
            .then(function (response) {
                // handle success
                console.log(response.data)
                nevigate('/manager')
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
                  <h5>Password?</h5>
                  <p class="mb-2">Enter your New Password
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="password" class="form-label">New Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control mb-2" name="Password" placeholder="Enter Your New Password"
                      required="" />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label"> ConfirmPassword</label>
                    <input type="password" id="password1" value={cpassword} onChange={(e) => setCpassword(e.target.value)} class="form-control" name="Password" placeholder="Enter Your Confirm  Password"
                      required="" />                    
                  </div>
                  <div class="mb-3 d-grid">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <span>Don't have an account? <a href="sign-in.html">sign in</a></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}
export default Manager_Reset_Password;