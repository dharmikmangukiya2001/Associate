import React, { useState } from "react";
import Provider_Header from "./Provider_Header";
import axios from "axios";

const AddService = () => {

    const[servicename ,setServiceName] =useState('')
    const[servicedepreciation ,setServiceDepreciation] =useState('')
    // service Image
    const[serviceimage ,setServiceImage] =useState([])
    const handleServiceImage = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setServiceImage(selectedFiles);

    };
    // Bussiness Profile Image
    const[bprofileimage ,setBprofileImage] =useState([])
    const handleBProfileImage = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setBprofileImage(selectedFiles);

    };

    const data = {
        servicename,
        servicedepreciation,
        // image
        serviceimage,
        bprofileimage
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceData = {
            servicedata:data
        }


        const formData = new FormData();

        for (const file of serviceimage){
            formData.append("",file);
        }
        for (const file of bprofileimage){
            formData.append("",file);
        }

        formData.append("",servicename);
        formData.append("",servicedepreciation);


        try {

            axios.post(`${process.env.REACT_APP_URL}/provider/addService`, formData,{
                // headers: {
                //     'token': token,
                //     'Content-Type': 'multipart/form-data', // Set the content type for file uploads
                // }
            })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            });

        } catch(error){
            console.error(error);
        }
    }

    return(<>
    <Provider_Header/>
    <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start" >Add Services</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
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
                                                <form >
                                                    <div className="row my-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Service Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" id="floatingInput" value={servicename} onChange={(e) => setServiceName(e.target.value)} placeholder="Services Name" />
                                                                <label htmlFor="floatingInput">Services Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row my-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Service Depreciation</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" id="floatingInput" value={servicedepreciation} onChange={(e) => setServiceDepreciation(e.target.value)} placeholder="Services Depreciation" />
                                                                <label htmlFor="floatingInput">Services Depreciation</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row my-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Service Card Image</label>
                                                        <div className="col-sm-10">
                                                            <div className=" mb-4">
                                                                <input type="file" className="form-control" id="floatingInput" value={serviceimage} onChange={(e) => setServiceImage(e.target.value)} placeholder="Services Card Image" />
                                                                {/* <label htmlFor="floatingInput">Services Card Image</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row my-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Bussiness Profie Image</label>
                                                        <div className="col-sm-10">
                                                            <div className=" mb-4">
                                                                <input type="file" className="form-control" id="floatingInput" value={bprofileimage} onChange={(e) => setBprofileImage(e.target.value)} placeholder="Services Card Image" />
                                                                {/* <label htmlFor="floatingInput">Services Card Image</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-0 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group">
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
                {/* <=+=+=+=+=+=+=| Footer |=+=+=+=+=+=+=> */}
                <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>
    </>)
}
export default AddService