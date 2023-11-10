import React from "react";
import Provider_Header from "./Provider_Header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Provider_Completed = () => {

    const providertoken = localStorage.getItem("providertoken");

    const [canceled, setCanceled] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/completed_order`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setCanceled(response.data.canceled);  
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
                        <h1 className='text-start m-0'>Cancel Order</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Orders</li>
                            </ol>
                        </nav>
                    </div>

                    

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
                                                        <h5 className="card-title">Cancel Order</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                    </div>
                                                    <div className="col-2">
                                                    </div>
                                                </div>

                                                <div className="table-responsive mt-2">
                                                            <table className="table">
                                                                <thead className="table-primary">

                                                        <tr>
                                                            <th>Order Id</th>
                                                            <th>Order Date</th>
                                                            <th>Mamber Name</th>
                                                            <th>Order Service</th>
                                                            <th>Order Deal Amount</th>
                                                            <th>Company Commission</th>
                                                            <th>PayMent Done</th>

                                                        </tr>
                                                        </thead>
                                                                <tbody className="table-light">
                                                        <>
                                                            {canceled &&
                                                                canceled.map((item, i) => (
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
                                                                                0
                                                                            </h6>
                                                                        </td>

                                                                        <td>
                                                                            <h6 className="">
                                                                                0
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                <span className="fs-5">
                                                                                    <span className="text-danger fw-bold">CancelOrder</span>
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