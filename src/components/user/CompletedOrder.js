import React from "react";
import UserHeader from "./UserHeader";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CompletedOrder = () => {

    const usertoken = localStorage.getItem("usertoken");

    const [order, setOrder] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/completed_order`, { headers: { 'usertoken': usertoken } }).then(function (response) {
            // handle success
            console.log(response.data);
            setOrder(response.data.order);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return(
    <>
    <UserHeader/>

    <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start m-0'>Completed Order</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Completed Order</li>
                            </ol>
                        </nav>
                    </div>

                    <section className="section dashboard">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div class="collapse col-12" id="collapseExample">

                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="col-7">
                                                        {/* <h5 className="card-title">Your Order</h5> */}
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
                                                            <th>Order Service</th>
                                                            <th>Order Deal Amount</th>
                                                            <th>Your Commission</th>
                                                            
                                                        </tr>

                                                        <>
                                                            {order &&
                                                                order.map((item, i) => (
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
                                                                              {item.memberCommission}

                                                                            </h6>
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
export default CompletedOrder;