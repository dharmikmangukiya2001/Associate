import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const Showservices = () => {

    //loarder

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





    // Service Types
    const [bussinessType, setServicetype] = useState([])
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_btype`,{headers: {'token': token}}).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setServicetype(response.data.bussinessType);
            // console.log("Service Types:::", servicetype);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // Bussiness Formation
    const [bussinessFormation, setBussinessformation] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bformation`,{headers: {'token': token}}).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setBussinessformation(response.data.bussinessFormation);
            // console.log("Bussiness Formation:::", bussinessformation);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // Bussiness category
    const [bcategory, setBcategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bcategory`,{headers: {'token': token}}).then(function (response) {
            // handle success
            
            // console.log(response.data,"ddd");
            setBcategory(response.data.bcategory);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // // Bussiness category
    // const [subcategorymodel, setSubcategorymodel] = useState([])
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_URL}/admin/showbussinesssubcategory`).then(function (response) {
    //         // handle success
            
    //         console.log(response.data,"ddd");
    //         setSubcategorymodel(response.data.subcategorymodel);
    //         console.log("Bussiness Category:::", subcategorymodel);


    //     })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])

    return (
        <>
            {
            isLoading ? (<><Loader /></>) : (<>

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
                                                            <th>Delete</th>
                                                            
                                                        </tr>

                                                        {
                                                            bussinessType && bussinessType.map((item, i) => {
                                                                // {const id=localStorage.setItem('id', item._id)}
                                                                return (
                                                                    <>


                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.btype}</p>
                                                                            </td>
                                                                            <td data-th="Supplier Name">
                                                                                <button className="btn btn-danger">Delect Type</button>
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
                                                            <th>Delect</th>
                                                        </tr>

                                                        {
                                                             bussinessFormation && bussinessFormation.map((item, i) => {
                                                                // {const id=localStorage.setItem('id', item._id)}
                                                                return (
                                                                    <>

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.bussinessformation}</p>
                                                                            </td>
                                                                            <td data-th="Supplier Name">
                                                                                <button className="btn btn-danger">Delect Formation</button>
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
                                                            <th>Delect</th>
                                                            
                                                        </tr>

                                                        {
                                                            bcategory && bcategory.map((item, i) => {
                                                                return (
                                                                    <>

                                                                        {/* {console.log(item.bussinesscategory)} */}

                                                                        <tr>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.bussinesscategory}</p>
                                                                            </td>
                                                                            <td data-th="Supplier Name">
                                                                                <button className="btn btn-danger">Delect Category</button>
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
                                    {/* <div className="col-5">
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
                                       
                                    </div> */}
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
            )}

        </>
    )
}

export default Showservices;        