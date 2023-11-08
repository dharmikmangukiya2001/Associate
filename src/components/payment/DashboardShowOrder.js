import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import Header from "../admin/Header";

const DashboardShowOrder = () => {

    const token = localStorage.getItem("token");

    //  Show Member data
    const [order, setOrder] = useState([])
    const id = useParams()
    const orderid = id.id
     useEffect(() => {
         axios.get(`${process.env.REACT_APP_URL}/admin/order_detail/${orderid}`,{headers: {'token': token}}).then(function (response) {
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

     const originalDate = '2023-11-07T09:09:58.492Z';

     const formattedDate = moment(originalDate).format('MMMM Do YYYY, h:mm:ss a');


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
                                            

                                            {order.map((item, i) => (
                                                <div className='prodetails'>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Member ID :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.ids}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Member Name :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.name}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Member Numbar :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.userid.number}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Product Category :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.bsubcategoryid[0].bcategoryid.bussinesscategory}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Product Subcategory:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.bsubcategoryid[0].bussinesssubcategory}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Product and Service :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.productid.product}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Description :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.description}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Customer Name :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.otherName}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Customer Numbar :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.otherNumber}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-2">
                                                                <p><strong>Customer Email ID :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.otherEmail}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Order ID :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.no}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Budget :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.budget}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Order Date :</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                     {new Date(item.updatedAt).toLocaleString()}
                                                                    {/* {item.updatedAt} */}
                                                                    {/* {item.updatedAt.slice(0, 10)} */}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Accept Order:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.status === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Order Accept Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Call:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.call === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Call Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Meeting:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.meeting === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Meeting Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Deal Done:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.deal === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Order Deal Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Amount:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>                                                                    
                                                                    <span className="fs-5 text-success fw-bold">
                                                                    {item.dealamount}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Deal Amount:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>                                                                    
                                                                    <span className="fs-6">
                                                                    {item.amount === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Deal Amount Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>Work Done:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.work === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">Order Work Panding</span>}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-2">
                                                                <p><strong>PayMent Done:</strong></p>
                                                            </div>
                                                            <div className="col-10">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.payment === true ? <span><i class="bi-check-lg fs-4 text-success"></i></span> : <span className="text-danger fw-bold">PayMent Panding</span>}
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
export default DashboardShowOrder;