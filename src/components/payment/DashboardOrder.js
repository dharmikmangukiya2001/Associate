import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../admin/Header";

const DashboardOrder = () => {

    const token = localStorage.getItem("token");

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
    return(
        <>
        <Header/>
        <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start m-0'>Your Order</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Your Order</li>
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
                                                            <th>Customer Name</th>
                                                            <th>Customer Number</th>
                                                            <th>Provider Name</th>
                                                            <th>Provider Numbar</th>
                                                            <th>Category</th>
                                                            <th>Sub Category</th>
                                                            <th>Product and Service</th>
                                                            <th>Description</th>
                                                            <th>Show</th>
                                                        </tr>

                                                        <>
                                                            {orders &&
                                                                orders.map((item, i) => (
                                                                    <tr key={i}>


                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.no}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.otherName}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.otherNumber}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.providerid[0].name}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.providerid[0].number}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.productid.bsubcategoryid[0].bcategoryid.bussinesscategory}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.productid.bsubcategoryid[0].bussinesssubcategory}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.productid.product}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.description}
                                                                            </h6>
                                                                        </td>
                                                                        <td data-th="Net Amount">
                                                                            <Link to={`/admin_showacceptorder/${item._id}`}>
                                                                                <button type="button" className="btn btn-primary btn-sm">Show</button>
                                                                            </Link>
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
export default DashboardOrder;