import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useEffect } from "react";

const Addmanager = () => {

     // // loader
     const [isLoading, setIsLoading] = useState(true);
     const [data, setData] = useState(null);
     useEffect(() => {
       // Simulate an API call
       fetchData().then((result) => {
         setData(result);
         setIsLoading(false);
       });
     }, []);
   
     const fetchData = async () => {
       // Simulate an API call or any asynchronous operation
       return new Promise((resolve) => {
         setTimeout(() => {
           resolve("Data from API");
         }, 1000);
       });
     };



    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    
    const managerdata = {
        name: name,
        email: email,
        number: number,
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userdata,"userdata:::::");


        try {
            axios.post(`${process.env.REACT_APP_URL}/admin/addmanager`, managerdata, {headers: {'token': token}})
                .then(response => {
                    if (response) {
                        // Handle the response data if needed
                        const memberdtails = response.data;
                        console.log("member data :::", memberdtails);
                        // console.log(token);
                        setName('')
                        setEmail('')
                        setNumber('')
                        // navigate('/admin_allmember')
                    } else {
                        console.log("Error datas");
                    }
                }).catch(function (error) {
                    if (error.response) {
                        alert(error.response.data.message);
                    }
                    else if (error.request) {
                        alert('Network error. Please try again')
                    }
                    else {
                        alert('An error occurred. Please try again')
                    }
                });
        } catch (error) {
            console.error("An error occurred:", error);
        }

    }

    return(
    <>
     {
            isLoading ? (<><Loader /></>) : (<>



    <Header/>
    <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start m-0" >Add Manager</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Manager</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Manager Form</h5>
                                                <form onSubmit={handleSubmit} encType="multipart/formData">
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Name : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={name} onChange={(e) => setName(e.target.value)} placeholder="Member name" />
                                                                <label htmlFor="floatingInput">Manager Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Email ID : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
                                                                <label htmlFor="floatingInput">Manager Email ID</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Numbar : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Member Numbar" />
                                                                <label htmlFor="floatingInput">Manager Number</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    





                                                    <div className="row mb-5 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group mb-3">
                                                                <input type="submit" className="form-control bg-success text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>{/* End #main */}
                {/* ======= Footer ======= */}
                <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Morsy Infotech</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Mangukiya</a>
                    </div>
                </footer>{/* End Footer */}
    </div>


</>)}
    </>
    )
}
export default Addmanager;