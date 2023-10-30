import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addmember = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [occupation, setOccupation] = useState('');
    const [reference, setReference] = useState('');
    const [address, setAddress] = useState('');
    const userdata = {
        name: name,
        email: email,
        number: number,
        DOB: date,
        address: address,
        occupation: occupation,
        reference: reference
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userdata,"userdata:::::");


        try {
            axios.post(`${process.env.REACT_APP_URL}/admin/adduser`, userdata, {
                headers: {
                    'token': token,
                }
            })
                .then(response => {
                    if (response) {
                        // Handle the response data if needed
                        const memberdtails = response.data;
                        console.log("member data :::", memberdtails);
                        // console.log(token);
                        setName('')
                        setEmail('')
                        setNumber('')
                        setDate('')
                        setAddress('')
                        setOccupation('')
                        setReference('')
                        // console.log('jasd', data);
                        // nevigate('/admin_showservices')
                    } else {
                        console.log("Error datas");
                    }
                })
        } catch (error) {
            console.error("An error occurred:", error);
        }

    }


    return (
        <>
            <Header />

            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start m-0" >Add Member</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Members</li>
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
                                                <h5 className="card-title">Member Form</h5>
                                                <form onSubmit={handleSubmit} encType="multipart/formData">
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Name : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={name} onChange={(e) => setName(e.target.value)} placeholder="Member name" />
                                                                <label htmlFor="floatingInput">Member Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Email ID : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
                                                                <label htmlFor="floatingInput">Email ID</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Numbar : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Member Numbar" />
                                                                <label htmlFor="floatingInput">Member Number</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">D.O.B. : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="date" required className="form-control" id="floatingInput" value={date} onChange={(e) => setDate(e.target.value)} placeholder="User D.O.B." />
                                                                <label htmlFor="floatingInput">Member D.O.B.</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Address : <span className='text-red'>*</span></label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" required className="form-control" id="floatingInput" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="User D.O.B." />
                                                                <label htmlFor="floatingInput">Member Address</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Occupation :</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="User Occupation" />
                                                                <label htmlFor="floatingInput">Member Occupation</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Reference By :</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="User Reference By" />
                                                                <label htmlFor="floatingInput">Member Reference By</label>
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
        </>
    )

}
export default Addmember;