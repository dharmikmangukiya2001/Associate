import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const Servicedetails = () => {

    const [service, setService] = useState([])
    const id = useParams()
    // console.log(id.id,"dd");
    var dd = id.id
    // const id=localStorage.getItem('id')
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/servicesdetails/${dd}`, { headers: { token } }).then(function (response) {
            // handle success

            // console.log(response.data);
            setService(response.data.service);
            setTempservice(response.data.service);
            // console.log("Service:", service);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);



    // delete servicessss
    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.get(`${process.env.REACT_APP_URL}/admin/deleteservice/${dd}`, { headers: { token } }).then(function (response) {
            // handle success
            console.log(response.data);
            nevigate('/admin_showservices')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    // update page hides and shows
    const [updates, setUpdates] = useState(false);
    const onAddUpdate = () => {
        setUpdates(true)

    }


    // update servicesssss
   
    const [files, setSelectedFiles] = useState([]);
    const [changed, setChanged] = useState(false);
    const [tempservice, setTempservice] = useState([])

    useEffect(() => {
        console.log('tempservice 1', tempservice);
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (files.length === 0) {
        //     console.log("Please select at least one file");
        //     return
        // }

        const formData = new FormData();

        // append all selected files to the FromData object

        for (const file of files) {
            formData.append("serviceimage", file);
        }

        for (const [key, value] of Object.entries(tempservice)) {
            console.log(`${key}: ${value}`);
            formData.append(key, value);
        }
          

        try {

            const response = fetch(`${process.env.REACT_APP_URL}/admin/updateservice/${dd}`, {
                method: "PUT",
                body: formData,
                headers: { token }
            });

            if (response) {
                console.log("Successfully uploaded images");
                nevigate('/admin_showservices')
            } else {
                console.log("Error uploading images");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

    }
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        console.log("Selected files:", selectedFiles)
        setSelectedFiles(selectedFiles);

    };





    return (

        <>
            <Header />

            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Services Details</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
                                <li className="breadcrumb-item active">Show Services</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Services Details</h5>
                                                <div>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className=" ">
                                                                </p>
                                                            </div>
                                                            <div className="col-8">

                                                                <img src={`${process.env.REACT_APP_URL}/${service.servicesimg}`} height={150} />

                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Service Name &nbsp;&nbsp;: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6">{service.addservices}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Service Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6">{service.servicedetails}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providername}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Number : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providernumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Company Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providercompanyname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.provideremail}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 mb-2">
                                                            <div className="pe-4 col-12 text-end">
                                                                <Link ><button onClick={deleteService} className="btn btn-danger px-5 me-2 mb-3">Delete</button></Link>

                                                                <Link><button id="updateButton" onClick={() => onAddUpdate()} className="btn btn-primary me-1 px-5 mb-3">Update</button></Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                updates ? (
                                    <>
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card recent-sales overflow-auto">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Update Services</h5>
                                                            <form>
                                                                <div className="border shadow-sm p-3 mb-5 bg-body rounded">
                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 fw-bold col-form-label">Services Name</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <input type="text" className="form-control" id="floatingInput" value={tempservice.addservices} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, addservices: e.target.value, }) }} placeholder="Services Name" />
                                                                            {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 fw-bold col-form-label">Services Details</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={tempservice.servicedetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, servicedetails: e.target.value, }) }} style={{ height: 100 }} defaultValue={""} />
                                                                            {/* <label htmlFor="floatingTextarea">Services Details</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 fw-bold col-form-label">Services Images</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <input type="file" className="form-control" id="floatingInput" name="images" onChange={handleFileChange}  />
                                                                            {/* <label htmlFor="floatingInput">Services Images</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 fw-bold col-form-label">Provider Name</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <input type="text" className="form-control" id="floatingInput" value={tempservice.providername} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providername: e.target.value, }) }} placeholder="Provider Name" />
                                                                            {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 col-form-label fw-bold">Provider Number</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <input type="text" className="form-control" id="floatingInput" value={tempservice.providernumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providernumber: e.target.value, }) }} placeholder="Provider Number" />
                                                                            {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <label className="col-sm-2 col-form-label fw-bold">Company Name</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <input type="text" className="form-control" id="floatingInput" value={tempservice.providercompanyname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providercompanyname: e.target.value, }) }} placeholder="Provider Company Name" />
                                                                            {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-5">
                                                                    <label className="col-sm-2 fw-bold col-form-label">Provider Email</label>
                                                                    <div className="col-sm-10">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                                            <input type="email" className="form-control" placeholder="Provider Email" value={tempservice.provideremail} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, provideremail: e.target.value, }) }} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-5 justify-content-center">
                                                                    <div className="col-sm-4">
                                                                        <div className="input-group mb-3">
                                                                            {changed ? (
                                                                                <>
                                                                                    <button onClick={(e) => {
                                                                                        setTempservice({ ...service });
                                                                                        setChanged(false);
                                                                                    }}
                                                                                        className="btn btn-dark">Cancel</button>
                                                                                    <button onClick={handleSubmit} className="btn btn-dark">Update</button>
                                                                                </>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </form>{/* End General Form Elements */}

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }


                        </div>
                    </section>
                </main>{/* End #main */}
                {/* ======= Footer ======= */}
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

        </>

    )




}

export default Servicedetails