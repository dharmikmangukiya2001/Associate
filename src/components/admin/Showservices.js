import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";

const Showservices = () => {

    // Service Types
    const [servicetype, setServicetype] = useState([])
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showservicetype`).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setServicetype(response.data.servicetype);
            // console.log("Service Types:::", servicetype);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // Bussiness Formation
    const [bussinessformation, setBussinessformation] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showbussinessformation`).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setBussinessformation(response.data.bussinessformation);
            // console.log("Bussiness Formation:::", bussinessformation);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // Bussiness category
    const [bussinesscategory, setBussinesscategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showbussinesscategory`).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setBussinesscategory(response.data.bussinesscategory);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // Bussiness category
    const [subcategorymodel, setSubcategorymodel] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showbussinesssubcategory`).then(function (response) {
            // handle success
            
            console.log(response.data,"ddd");
            setSubcategorymodel(response.data.subcategorymodel);
            console.log("Bussiness Category:::", subcategorymodel);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Show Services</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            <div className="d-flex">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="card">
                                            <div className="card-body d-flex">
                                                <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Service Type</th>
                                                            
                                                        </tr>

                                                        {
                                                            servicetype && servicetype.map((item, i) => {
                                                                // {const id=localStorage.setItem('id', item._id)}
                                                                return (
                                                                    <>

                                                                        {/* {console.log(item.servicetype)} */}

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.servicetype}</p>
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </tbody>
                                                </table>
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="col-5">
                                        <div className="card">
                                            <div className="card-body d-flex">
                                            <div className="card">
                                            <div className="card-body d-flex">
                                            <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Bussiness Formation</th>
                                                        </tr>

                                                        {
                                                             bussinessformation && bussinessformation.map((item, i) => {
                                                                // {const id=localStorage.setItem('id', item._id)}
                                                                return (
                                                                    <>

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.bussinessformation}</p>
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                                

                                            </div>
                                        </div>
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="d-flex">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="card">
                                            <div className="card-body d-flex">
                                                <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Bussiness Category</th>
                                                            
                                                        </tr>

                                                        {
                                                            bussinesscategory && bussinesscategory.map((item, i) => {
                                                                return (
                                                                    <>

                                                                        {/* {console.log(item.bussinesscategory)} */}

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.bussinesscategory}</p>
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </tbody>
                                                </table>
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="col-5">
                                        <div className="card">
                                            <div className="card-body d-flex">
                                            <div className="card">
                                            <div className="card-body d-flex">
                                            <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Bussiness Subcategory</th>
                                                        </tr>

                                                        {
                                                             subcategorymodel && subcategorymodel.map((item, i) => {
                                                                return (
                                                                    <>

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.bussinesssubcategory}</p>
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                                

                                            </div>
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

export default Showservices