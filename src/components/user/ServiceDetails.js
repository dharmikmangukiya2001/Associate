import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {

    //Single Service Details
    const [service, setService] = useState([])
    const id = useParams()
    // console.log(id.id,"dd");
    var serviceid = id.id
    // const id=localStorage.getItem('id')
    // const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/servicedetails/${serviceid}`).then(function (response) {
            // handle success

            console.log(response.data);
            setService(response.data.servicedata);
            console.log("Service:", service);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);



    // Add To Cart
    const navigate = useNavigate();
    const AddToCart = (e) => {
        e.preventDefault();

        axios.get(`${process.env.REACT_APP_URL}/user/servicescart/${serviceid}`).then(function (response){
            //handle success
            console.log(response.data);

        })
        .catch(function (error){
            //handle error
            console.log(error);
        })
    }



    return(
        <>
        
        <UserHeader/>
       

        <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h4 className="fs-6 text-start">Services Details</h4>
                        
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                            {/* <img src={`${process.env.REACT_APP_URL}/${service.servicesimg}`} height={363} /> */}
                                                <div>
                                                  <div>
                                                    <h2></h2>
                                                  </div>
                                                </div>
                                            </div>

                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h4 className="fs-2 card-title">{service.addservices}</h4>
                                                <div>
                                                <strong>Company Name :</strong>
                                                  <div>
                                                    <h6>{service.providercompanyname}</h6>
                                                  </div>
                                                </div>
                                                <div className="mt-3">
                                                <strong>Service Details :</strong>
                                                  <div>
                                                    <h6>{service.servicedetails}</h6>
                                                  </div>
                                                </div>
                                                <div>
                                                  <div className="w-25 mt-4">
                                                    <Link><button onClick={AddToCart} className="btn btn-warning">Add to Cart</button></Link>
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
export default ServiceDetails;