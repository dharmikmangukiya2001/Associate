import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Manager_Forget_Password = () => {

  const [number, setNumber] = useState('');
  const nevigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const Forget = {
      otp: number,
    }
    
      axios.post(`${process.env.REACT_APP_URL}/manager/verify_otp`, Forget)
        .then(function (response) {
          // handle success
          console.log(response.data)
          // nevigate('/manager_send_otp')
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
                  <h5>OTP?</h5>
                  <p class="mb-2">Enter your registered email ID to send Otp
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="otp" class="form-label">Otp</label>
                    <input type="number" id="otp" class="form-control" value={number} onChange={(e) => setNumber(e.target.value)} name="otp" placeholder="Enter Your Otp"
                      required="" />
                  </div>
                  <div class="mb-3 d-grid">
                    <button type="submit" class="btn btn-primary">
                      Reset Password
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