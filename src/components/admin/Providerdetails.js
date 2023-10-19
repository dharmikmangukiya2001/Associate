import { React, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

function Providerdetails() {
    const [providers, setProviders] = useState([])
    const id = useParams()
    const providerid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdetails/${providerid}`).then(function (response) {
            // handle success
            console.log(response.data);
            setProviders([response.data.providers]);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);





    // delete provider

    // const nevigate = useNavigate();
    // const deleteService = (e) => {
    //     e.preventDefault();

    //     axios.get(`${process.env.REACT_APP_URL}/admin/deleteprovider/${providerid}`, { headers: { token } }).then(function (response) {
    //         // handle success
    //         console.log(response.data);
    //         nevigate('/admin_showproviders')
    //     })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }





    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Provider Details</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Provider</li>
                                <li className="breadcrumb-item active">Show Provider</li>
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
                                                        <div className="ms-3 d-flex col-12 pb-5">
                                                            <div className="col-4">

                                                            </div>
                                                            <div className="col-8">


                                                                {/* {provider.img.map((image, index) => (
                                                                    <img
                                                                        key={index} // Make sure to provide a unique key for each image if within a loop.
                                                                        className='rounded-circle border border-3 border-secondary'
                                                                        src={`${process.env.REACT_APP_URL}/${image}`} // Assuming 'image' contains the path to the image.
                                                                        height={100}
                                                                        alt={`Image ${index}`}
                                                                    />
                                                                ))} */}
                                                                {/* <img className='rounded-circle border border-3 border-secondary' src={`${process.env.REACT_APP_URL}/${provider.img}`} height={100} /> */}

                                                            </div>
                                                        </div>
                                                        {providers.map((item, i) => (
                                                            <>
                                                                <div className="ms-3 d-flex col-12">
                                                                    <div className="col-4">
                                                                        <p className="fs-6">
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key=='name' ? (<>
                                                                                                <img src={value}></img>
                                                                                            </>): null}
                                                                                                
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-3 d-flex col-12">
                                                                    <div className="col-4">
                                                                        <p className="fs-6">
                                                                            <strong>Provider Name &nbsp;&nbsp;: </strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key=='name' ? (<>
                                                                                                {value}
                                                                                            </>): null}
                                                                                                
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-3 d-flex col-12">
                                                                    <div className="col-4">
                                                                        <p className="fs-6">
                                                                            <strong>Provider Numbar &nbsp;&nbsp;: </strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key=='number' ? (<>
                                                                                                {value}
                                                                                            </>): null}
                                                                                                
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-3 d-flex col-12">
                                                                    <div className="col-4">
                                                                        <p className="fs-6">
                                                                            <strong>Provider Numbar &nbsp;&nbsp;: </strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key=='email' ? (<>
                                                                                                {value}
                                                                                            </>): null}
                                                                                                
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-3 d-flex col-12">
                                                                    <div className="col-4">
                                                                        <p className="fs-6">
                                                                            <strong>Provider Numbar &nbsp;&nbsp;: </strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key=='BOD' ? (<>
                                                                                                {value}
                                                                                            </>): null}
                                                                                                
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-3 d-flex col-12 mt-5 mb-2">
                                                                    <div className="pe-4 col-12 text-end">
                                                                        {/* <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 mb-3">Delete</button></Link> */}

                                                                        {/* <Link><button id="updateButton" onClick={() => onAddUpdate()} className="btn btn-primary me-1 px-5 mb-3">Update</button></Link> */}
                                                                    </div>

                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
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

export default Providerdetails
