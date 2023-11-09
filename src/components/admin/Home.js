import React, { useEffect, useState } from "react";
import '../../App.css'
import Header from "./Header";
import Loader from "./Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    // loader
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

    // Show All Order For Member Start
    const token = localStorage.getItem("token");
    const [userForms, setUserForms] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/all_userform`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            setUserForms(response.data.userForms);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // Show All Order For Member End



    // Show All Member Start
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/alluser`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            setUsers(response.data.users);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // Show All Member End


    // Show All Provider Start
    const [providers, setProviders] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showproviders`,{headers: {'token': token}}).then(function (response) {
            // handle success
            setProviders(response.data.providers);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // Show All Provider End





    //----------------------------------------------------------------||    Pay Ment Panel    ||-------------------------------------------------------------------------------------------------------//

    const [orders, setOrders] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/done_order`,{headers: {'token': token}}).then(function (response) {
            // handle success
            // console.log(response.data);
            setOrders(response.data.orders);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    const [totalDealAmountTotal, setTotalDealAmountTotal] = useState('');
    const [totalMemberCommissionTotal, setTotalMemberCommissionTotal] = useState('');
    const [totalCompanyCommissionTotal, setTotalCompanyCommissionTotal] = useState('');
    const [totalComission, setTotalComission] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/comission_total`,{headers: {'token': token}}).then(function (response) {
            // handle success
            // console.log(response.data);

            setTotalDealAmountTotal(response.data.totalDealAmountTotal);
            setTotalMemberCommissionTotal(response.data.totalMemberCommissionTotal);
            setTotalCompanyCommissionTotal(response.data.totalCompanyCommissionTotal);
            setTotalComission(response.data.totalComission);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    return (
        <>
            {
            isLoading ? (<><Loader /></>) : (<>


            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start m-0">Dashboard</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    {/* Sales Card */}
                                    <div className="col-xxl-4 col-md-6">
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
                                                <h5 className="card-title">Order</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {userForms &&
                                                            <h6>{userForms.length}</h6>
                                                        }
                                                        {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Sales Card */}
                                    {/* Revenue Card */}
                                    <div className="col-xxl-4 col-md-6">
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
                                                <h5 className="card-title">Member</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-people" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {users &&
                                                        <h6>{users.length}</h6>
                                                    }
                                                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End Revenue Card */}
                                    {/* Customers Card */}
                                    <div className="col-xxl-4 col-xl-12">
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
                                                <h5 className="card-title">Providers</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-people" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {providers &&
                                                        <h6>{providers.length}</h6>
                                                        // <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    {/* Sales Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/admin_doneorder">
                                            <div className="card info-card sales-card">
                                                <div className="filter">
                                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="/admin_doneorder">All Order</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Completed Totel Order</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-cart" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {orders &&
                                                                <h6>{orders.length}</h6>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Sales Card */}
                                    {/* Revenue Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/admin_doneorder">
                                            <div className="card info-card revenue-card">
                                                <div className="filter">
                                                    <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="/admin_doneorder">All Member</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Totel Order Amount</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-wallet2" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {totalDealAmountTotal &&
                                                                <h6>₹ {totalDealAmountTotal}</h6>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Revenue Card */}
                                    {/* Revenue Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/admin_doneorder">
                                            <div className="card info-card revenue-card">
                                                <div className="filter">
                                                    <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="/admin_doneorder">All Member</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Totel Commission</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-wallet" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {totalComission &&
                                                                <h6>₹ {totalComission}</h6>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Revenue Card */}
                                    {/* Customers Card */}
                                    <div className="col-xxl-3 col-md-6">
                                        <Link className="a-none" to="/admin_membercommission">
                                            <div className="card info-card customers-card">
                                                <div className="filter">
                                                    <a className="icon" href="" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Show</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="/admin_membercommission">All Provider</a></li>
                                                        {/* <li><a className="dropdown-item" href="#">This Month</a></li> */}
                                                        {/* <li><a className="dropdown-item" href="#">This Year</a></li> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Member Commission</h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bi bi-people" />
                                                        </div>
                                                        <div className="ps-3">
                                                            {totalMemberCommissionTotal &&
                                                                <h6>₹ {totalMemberCommissionTotal}</h6>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/* End Customers Card */}
                                    {/* Customers Card */}
                                    <div className="col-xxl-3 col-md-6">
                                    <Link className="a-none" to="/payment_dashboard_ordermamberdetails">
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
                                                <h5 className="card-title">Company Commission</h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-building" />
                                                    </div>
                                                    <div className="ps-3">
                                                        {totalCompanyCommissionTotal &&
                                                            <h6>₹ {totalCompanyCommissionTotal}</h6>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
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
            )}




        </>

    )

}

export default Home