import React from "react";
import Provider_Header from "./Provider_Header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Provider_Allorder = () => {

    const providertoken = localStorage.getItem("providertoken");

    const [providerorder, setProviderorder] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/orders`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setProviderorder(response.data.providerorder);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const { id } = useParams();
    const handleAccept = (id) => {

        // data get karavava mate
        axios.get(`${process.env.REACT_APP_URL}/provider/accept_order/${id}`, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                // console.log(response.data, "Successfully logged in");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    const handleCancel = (id) => {

        // data get karavava mate
        axios.get(`${process.env.REACT_APP_URL}/provider/decline_order/${id}`, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                // console.log(response.data, "Successfully logged in");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <>
            <Provider_Header />

            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start m-0'>Allorder</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Show Order</li>
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
                                                        <h5 className="card-title">All Order</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                    </div>
                                                    <div className="col-2">
                                                    </div>
                                                </div>

                                                <table className="rwd-table">
                                                    <tbody>

                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Customer Name</th>
                                                            <th>Customer Number</th>
                                                            <th>Customer Email</th>
                                                            <th>Category</th>
                                                            <th>Sub Category</th>
                                                            <th>Product and Service</th>
                                                            <th>Description</th>
                                                            <th>Accept</th>
                                                            <th>Cancel</th>
                                                        </tr>

                                                        <>
                                                            {providerorder &&
                                                                providerorder.map((item, i) => (
                                                                    <tr key={i}>


                                                                        <td>
                                                                            <h6 className="">
                                                                                {i + 1}
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
                                                                                {item.otherEmail}
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
                                                                            <button type="button" onClick={() => handleAccept(item._id)} className="btn btn-danger btn-sm">Accept</button>
                                                                        </td>
                                                                        <td data-th="Net Amount">
                                                                            <button type="button" onClick={() => handleCancel(item._id)} className="btn btn-danger btn-sm">Cancel</button>
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
export default Provider_Allorder;