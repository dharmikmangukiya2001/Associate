import React from "react";
import Provider_Header from "./Provider_Header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Provider_Completed = () => {

    const providertoken = localStorage.getItem("providertoken");

    const [completed, setCompleted] = useState('');
    const [totalProviderCommission, setTotalProviderCommission] = useState('');
    const [totalDealAmount, setTotalDealAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/completed_order`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setCompleted(response.data.completed);
            setTotalProviderCommission(response.data.totalProviderCommission);
            setTotalDealAmount(response.data.totalDealAmount);
            setTotalAmount(response.data.totalAmount);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            <Provider_Header />

            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start m-0'>Completed Order</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Orders</li>
                            </ol>
                        </nav>
                    </div>

                    <section className="section dashboard">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12 d-flex flex-wrap">
                                            <div className="card col-6 recent-sales overflow-auto">
                                                <div className="card-body">
                                                    <h5 className="card-title">Totel Order Payment </h5>
                                                    <div className='prodetails'>
                                                        <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                            <div className="ms-3 d-flex col-12 ">
                                                                <div className="col-4">
                                                                    <strong className="card-title">Payment</strong>
                                                                </div>
                                                                <div className="col-8">
                                                                        <span className="fs-6">
                                                                            <div className="pe-4 col-12 text-end">
                                                                                <p className="fs-4 fw-bold">₹ {totalDealAmount}</p>
                                                                            </div>
                                                                        </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card col-6 recent-sales overflow-auto">
                                                <div className="card-body">
                                                    <h5 className="card-title">Company Commission </h5>
                                                    <div className='prodetails'>
                                                        <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                            <div className="ms-3 d-flex col-12 ">
                                                                <div className="col-4">
                                                                    <strong className="card-title">Company Commission</strong>
                                                                </div>
                                                                <div className="col-8">
                                                                        <span className="fs-6">
                                                                            <div className="pe-4 col-12 text-end">
                                                                                <p className="fs-4 fw-bold">₹ {totalProviderCommission}</p>
                                                                            </div>
                                                                        </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card col-12 recent-sales overflow-auto">
                                                <div className="card-body">
                                                    <h5 className="card-title">Your Payment </h5>
                                                    <div className='prodetails'>
                                                        <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                            <div className="ms-3 d-flex col-12 ">
                                                                <div className="col-4">
                                                                    <strong className="card-title">Your Total Payment</strong>
                                                                </div>
                                                                <div className="col-8">
                                                                        <span className="fs-6">
                                                                            <div className="pe-4 col-12 text-end">
                                                                                <p className="fs-4 fw-bold">₹ {totalAmount}</p>
                                                                            </div>
                                                                        </span>
                                                                </div>
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

                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div class="collapse col-12" id="collapseExample">

                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="col-7">
                                                        <h5 className="card-title">Completed Order</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                    </div>
                                                    <div className="col-2">
                                                    </div>
                                                </div>

                                                <table className="rwd-table">
                                                    <tbody>

                                                        <tr>
                                                            <th>Order Id</th>
                                                            <th>Order Date</th>
                                                            <th>Mamber Name</th>
                                                            <th>Order Service</th>
                                                            <th>Order Deal Amount</th>
                                                            <th>Company Commission</th>
                                                            <th>PayMent Done</th>

                                                        </tr>

                                                        <>
                                                            {completed &&
                                                                completed.map((item, i) => (
                                                                    <tr key={i}>


                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.no}
                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.updatedAt.slice(0, 10)}

                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.userid.name}

                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.productid.bsubcategoryid[0].bussinesssubcategory}
                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.dealamount}

                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.providercommission}

                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                <span className="fs-5">
                                                                                    {item.payment === true ? <span><i class="bi-check-circle-fill ms-4 fs-2 text-success"></i></span> : <span className="text-danger fw-bold">PayMent Panding</span>}
                                                                                </span>
                                                                            </p>
                                                                        </td>

                                                                    </tr>

                                                                ))}
                                                        </>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Morsy Infotech</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Mangukiya</a>
                    </div>
                </footer>{/* End Footer */}
            </div >
        </>
    )
}
export default Provider_Completed;