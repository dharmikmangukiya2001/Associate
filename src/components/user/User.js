import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import Loader from "./Loader";


const   User = () => {


 // loader
 const [isLoading, setIsLoading] = useState(true)
 useEffect(() => {
     // Set the duration for showing the loader in milliseconds
     const showTime = 5000; // 5 seconds

     // Function to hide the loader and set isLoading to false
     function hideLoader() {
         setIsLoading(false);
     }

     // Show the loader for the specified showTime
     const timer = setTimeout(hideLoader, showTime);

     // Clear the timer when the component unmounts to avoid memory leaks
     return () => clearTimeout(timer);
 }, []);
 // loader closed



    const [service, setService] = useState([])
    // const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/allservices`).then(function (response) {
            // handle success

            // console.log(response.data);
            setService(response.data.serviceData);
            // console.log("Service:", service);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <>
        {
            isLoading ? (<><Loader/></>):(<>
            <UserHeader/>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Select Services</h1>

                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                {/* <div className="row"> */}
                                {/* Sales Card */}
                                <div className="d-flex flex-wrap">
                                    {
                                        service && service.map((item, i) => {
                                            return (
                                                <>
                                                    <div className="col-xxl-3 col-md-6 mt-4">
                                                        <div className="mx-2 me-sm-4 ">
                                                       <Link className="a-none" to={`/servicedetails/${item._id}`}><div className="card  shadow">
                                                            <img src={`${process.env.REACT_APP_URL}${item.servicesimg}`} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{item.addservices}</h5>
                                                                <p>{item.servicedetails.slice(0, 50)}<strong> . . . .</strong> </p>
                                                            </div>
                                                        </div></Link>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                {/* </div> */}
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
                </>)
        }
        </>
    )
}
export default User;