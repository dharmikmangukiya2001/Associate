import React from "react";
import Provider_Header from "./Provider_Header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Provider_Allorder = () => {

    const [providerorder, setProviderorder] = useState('')
    const providertoken = localStorage.getItem("providertoken");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/orders`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data.providerorder);
            setProviderorder(response.data.providerorder);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return(
        <>
       <Provider_Header/>

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
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div class="collapse col-12" id="collapseExample">
                                            {/* <div class="card card-body">
                                                {managers && managers.map((item, i) => (
                                                    <div key={i}>
                                                        <p>
                                                            <span>
                                                                <input
                                                                    className="form-check-input me-3"
                                                                    type="checkbox"
                                                                    value={item._id}
                                                                    id="flexCheckMDefault"
                                                                    onChange={() => handleManagerCheckboxChange(item._id)}
                                                                    checked={selectedManagerIds.includes(item._id)}
                                                                />
                                                            </span>
                                                            <strong>
                                                                {item.name}
                                                            </strong>

                                                        </p>

                                                    </div>
                                                ))}
                                                <button onClick={handleSubmit} className="btn btn-dark" style={{width:'fit-content'}}>Send</button>
                                                <div>

                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="col-7">
                                                        <h5 className="card-title">Show All Member</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                        {/* <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button> */}
                                                    </div>
                                                    <div className="col-2">
                                                        {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                            Send to Manager
                                                        </button> */}
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
                                                            <th>Accept Order</th>
                                                        </tr>

                                                        <>
                                                            {providerorder &&
                                                                providerorder.map((item, i) => (
                                                                    <tr key={i}>

                                                                        
                                                                        <td>
                                                                            <h6 className="">
                                                                                {i+1}
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
                                                                            <Link to="">
                                                                                <button type="button" className="btn btn-primary btn-sm">Accept Order</button>
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
export default Provider_Allorder;