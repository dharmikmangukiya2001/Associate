import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import axios from "axios";

const PayMent = () => {

    const usertoken = localStorage.getItem("usertoken");

    const [order, setOrder] = useState('');
    const [commission, setCommission] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/completed_order`, { headers: { 'usertoken': usertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setOrder(response.data.order);
            setCommission(response.data.totalMemberCommission);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
            <UserHeader />

            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start m-0">Your Payment</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Your Payment</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    {/* Sales Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/member_completedorder">
                                            <div className="card info-card sales-card">
                                                <div className="filter">
                                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="/admin_Allorder">All Order</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Totel Order</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-cart" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {order &&
                                                             <h6>{order.length}</h6>
                                                            }
                                                            {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Sales Card */}
                                    {/* Revenue Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/member_completedorder">
                                            <div className="card info-card revenue-card">
                                                <div className="filter">
                                                    <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="admin_allmember">All Member</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Totel Commission</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-shield" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {commission &&
                                                            <h6>{commission}</h6>
                                                            }
                                                            {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Revenue Card */}
                                    {/* Customers Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card customers-card">
                                            <div className="filter">
                                                <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li className="dropdown-header text-start">
                                                        <h6>Show</h6>
                                                    </li>
                                                    <li><a className="dropdown-item" href="admin_showproviders">All Provider</a></li>
                                                    {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                    {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Commission Remain</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-shield-exclamation" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {/* {providers && */}
                                                        {/* <h6>{providers.length}</h6> */}
                                                        {/* <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span> */}
                                                        {/* } */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Customers Card */}
                                    {/* Customers Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card customers-card1">
                                            <div className="filter">
                                                <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li className="dropdown-header text-start">
                                                        <h6>Show</h6>
                                                    </li>
                                                    <li><a className="dropdown-item" href="admin_showproviders">All Provider</a></li>
                                                    {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                    {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Commission Paid</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-shield-check" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {/* {providers && */}
                                                        {/* <h6>{providers.length}</h6> */}
                                                        {/* <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span> */}
                                                        {/* } */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Customers Card */}

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
export default PayMent