import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Orderdetails = () => {


     //  Show Member data
     const [order, setOrder] = useState([])
     const id = useParams()
     const orderid = id.id
     const token = localStorage.getItem("token");
     useEffect(() => {
         axios.get(`${process.env.REACT_APP_URL}/admin/userform_details/${orderid}`, { headers: { 'token': token } }).then(function (response) {
             // handle success
            //  console.log(response.data, "dsdsdsd");
             setOrder([response.data.order]);
            //  setTempservice(response.data.user);
 
         })
             .catch(function (error) {
                 // handle error
                 console.log(error);
             })
     }, [orderid]);
    return(
        <>
        <Header/>


        <main id="main" className="main">
                <div className="pagetitle">
                    <h1 className="text-start m-0">Orders Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Notification</li>
                            <li className="breadcrumb-item active">Show Order</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        {/* Provider Data */}
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Order Details :</h5>
                                            <div className="pe-4 col-12 text-end">
                                                {/* <Link><button  className="btn btn-danger px-5 me-2 w-25 mb-3">Delete</button></Link> */}
                                            </div>

                                            {order.map((item, i) => (
                                                <div className='prodetails'>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member ID :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.ids}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Name :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.name}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Numbar :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.number}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Product Category :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.bsubcategoryid[0].bcategoryid.bussinesscategory}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Product Subcategory:</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.bsubcategoryid[0].bussinesssubcategory}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Product and Service :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.product}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Description :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.description}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Customer Name :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.otherName}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Customer Numbar :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.otherNumber}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p><strong>Order ID :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.no}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p><strong>Order Date :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.updatedAt.slice(0, 10)}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    
                </section>

            </main>
        
        </>
    )
}
export default Orderdetails;