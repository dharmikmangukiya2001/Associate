import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import axios from "axios";
import { Link } from "react-router-dom";

import { logDOM } from "@testing-library/react";

const Showprovider = () => {

    const [providerdata, setProvider] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdata`, { headers: { token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setProvider(response.data.providerdata);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <>
            <Header />
            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start'>Show Providers</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Providers</li>
                            </ol>
                        </nav>
                    </div>

                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Show All Providers</h5>
                                                <table className="rwd-table">

                                                    <tbody>
                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Provider Name</th>
                                                            <th>Provider Number</th>
                                                            <th>Business Name</th>
                                                            {/* <th>Provider Number</th> */}
                                                            <th>Category Name</th>
                                                            {/* <th>Provider Email</th> */}
                                                            <th>Business Details</th>
                                                            <th>Show Details</th>
                                                        </tr>
                                                        {/* {
                                                            providerdata && providerdata.map((item, i) => {
                                                                return ( */}
                                                        <>
                                                            {providerdata &&
                                                                providerdata.map((item, i) => (
                                                                    <tr key={i}>
                                                                        <td>
                                                                            <h5>
                                                                                {i + 1}
                                                                            </h5>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.providername}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.providernumber}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.bussinessname}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.bussinesscategory}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.bussinessdetails}
                                                                            </h6>
                                                                        </td>
                                                                        <td data-th="Net Amount">
                                                                            <Link to={`/admin_providerdetails/${item._id}`}>
                                                                                <button type="button" className="btn btn-danger btn-sm">Show All Details</button>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>

                                                                ))}
                                                        </>
                                                        {/* )
                                                            })
                                                        } */}

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
                <footer id='footer' className='footer'>
                    <div className='copyright'>
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className='credits'>
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>
            </div >

        </>
    )
}
export default Showprovider