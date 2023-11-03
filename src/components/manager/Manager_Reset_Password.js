import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Manager_Reset_Password = () => {


  const [password, setPassword] = useState('');
    const nevigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const ForgetPassword = {
          password: password,
        }

        axios.post(`${process.env.REACT_APP_URL}/manager/verify_otp`, ForgetPassword)
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
                <form>
                  <div class="mb-3">
                    <label for="password" class="form-label">Otp</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" name="Password" placeholder="Enter Your Password"
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