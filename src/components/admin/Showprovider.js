import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import axios from "axios";
import { Link } from "react-router-dom";

import { logDOM } from "@testing-library/react";

const Showprovider = () => {

    const [providers, setProviders] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showproviders`,{headers: {'token': token}}).then(function (response) {
            // handle success
            // console.log(response.data);
            setProviders(response.data.providers);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    const XLSX = require('xlsx');
    const exportToExcel = () => {
        const headers = ['Provider Name', 'Provider Number', 'Business Name', 'Business Type', 'Provider Email'];
        // Fetch data from the API and store it in the 'data' variable
        const dataAsArray = providers.map((item) => [
            item.name,
            item.number,
            item.Bname,
            item.Btype,
            item.email
        ]);

        const excelData = [headers, ...dataAsArray];
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        XLSX.writeFile(wb, 'exported_data.xlsx');
    }

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
                                                <div className="d-flex">
                                                    <div className="col-10">
                                                        <h5 className="card-title">Show All Providers</h5>
                                                    </div>
                                                    <div className="col-2">
                                                        <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
                                                    </div>
                                                </div>
                                                <table className="rwd-table">


                                                    <tbody>

                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Provider Name</th>
                                                            <th>Provider Number</th>
                                                            <th>Business Name</th>
                                                            {/* <th>Provider Number</th> */}
                                                            <th>Bussiness Type</th>
                                                            {/* <th>Provider Email</th> */}
                                                            <th>Provider Email</th>
                                                            <th>Show Details</th>
                                                        </tr>
                                                        {/* {
                                                            providerdata && providerdata.map((item, i) => {
                                                                return ( */}
                                                        <>
                                                            {providers &&
                                                                providers.map((item, i) => (
                                                                    <tr key={i}>
                                                                        <td>
                                                                            <h5>
                                                                                {i + 1}
                                                                            </h5>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.name}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.number}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.Bname}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.Btype}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.email}
                                                                            </h6>
                                                                        </td>
                                                                        <td data-th="Net Amount">
                                                                            <Link to={`/admin_providerdetails/${item._id}`}>
                                                                                <button type="button" className="btn btn-danger btn-sm">Show</button>
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
export default Showprovider