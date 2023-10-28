import React, { useState } from "react";
import Provider_Header from "./Provider_Header";
import axios from "axios";
// import { useNavigate } from 'react-router-dom'
const providertoken = localStorage.getItem("providertoken");
// console.log(providertoken);

const AddService = () => {

    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState('');

    const data = {
        service: service,
        description: description
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("service:", service);
        console.log("description:", description);


        // if (files.length === 0) {
        //     console.log("Please select at least one file");
        //     return;
        // }

        const formData = new FormData();

        // Append all selected files to the FormData object
        for (const i of files) {

            formData.append("serviceimg", i);
            console.log(files, "files::");
        }

        formData.append("service", data.service);
        formData.append("description", data.description);

        try {
            axios.post(`${process.env.REACT_APP_URL}/provider/addservice`, formData, {
                headers: {
                    'providertoken': providertoken,
                    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
                }
            })
            .then(response => {
            if (response) {
                console.log("Successfully uploaded images");
                // Handle the response data if needed
                const data = response.data;
                // console.log(providertoken);
                // console.log('jasd', data);
                // nevigate('/admin_showservices')
            } else {
                console.log("Error uploading images");
            }})
        } catch (error) {
            console.error("An error occurred:", error);
        }


    }
    const handleFileChange = (event) => {
        console.log('event', event)
        const selectedFiles = event.target.files;
        //  const myNewFile = new File([selectedFiles], 'new_name.png', {type: event.target.files[0].type});
        setFiles((prevFiles) => {

            console.log('check:::', [...prevFiles, ...Array.from(selectedFiles)]);
            return [...prevFiles, ...Array.from(selectedFiles)]
        });

    };
    return (
        <>
            <Provider_Header />
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
                                                <h5 className="card-title">Add Services <span>| Today</span></h5>
                                                <form onSubmit={handleSubmit} encType="multipart/formData">
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Services Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={service} onChange={(e) => setService(e.target.value)} placeholder="Services Name" />
                                                                <label htmlFor="floatingInput">Services Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Services Details</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={description} onChange={(e) => setDescription(e.target.value)} style={{ height: 100 }} defaultValue={""} />
                                                                <label htmlFor="floatingTextarea">Services Details</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Service Image JPG/JPEG<span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <div className='me-3'>
                                                                <input type='file' name='serviseimg' onChange={handleFileChange} className='form-control' placeholder='TDS File JPEG' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Profile Image JPG/JPEG<span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <div className='me-3'>
                                                                <input type='file' name='serviseimg' onChange={handleFileChange} className='form-control' placeholder='Agreement File JPEG' />
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
        </>)
}
export default AddService