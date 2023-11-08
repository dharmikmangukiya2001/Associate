import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../admin/Header";
import { useParams } from "react-router-dom";

const DashboardMamberOrderShow = () => {

    const token = localStorage.getItem("token");

    const [order, setOrder] = useState('');
    const id = useParams()
    const orderid = id.id
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/user_order/${orderid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setOrder(response.data.order);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>

        <Header/>
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
                                                            <th>Provider Name</th>
                                                            <th>Order Deal Amount</th>
                                                            <th>Member Commission</th>
                                                            <th>Company Commission</th>

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
                                                                                {item.providerid[0].name}
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

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.companyCommission}

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
export default DashboardMamberOrderShow;