import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import axios from "axios";
import { Link } from "react-router-dom";

import { logDOM } from "@testing-library/react";
import Loader from "./Loader.js";

const Showprovider = () => {

    //loarder
    const [isLoading, setIsLoading] = useState(true);
    const [data1, setData] = useState(null);

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




    const [providers, setProviders] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/showproviders`, { headers: { 'token': token } }).then(function (response) {
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



    // Search Term

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // You can implement search logic here or filter the data as needed
    };

    // Filter providers based on the search term
    const filteredProviders = providers.filter((provider) => {
        return (
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.number.includes(searchTerm) ||
            provider.Bname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.Btype.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            {
                isLoading ? (<><Loader /></>) : (<>

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
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card recent-sales overflow-auto">
                                                    <div className="card-body">
                                                        
                                                        <div className="App">
                                                            <div className="input-group mb-3">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2"
                                                                    placeholder="Search Term"
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                />
                                                                <div class="input-group-append">
                                                                    <button class="btn btn-outline-info" onClick={handleSearch} type="button">Button</button>
                                                                </div>
                                                                {/* <button className="btn btn-info" style={{ width: 'fit-content' }} onClick={handleSearch}>Search</button> */}
                                                            </div>
                                                            <div className="">
                                                            <div className="">
                                                                <h5 className="card-title">Show All Providers</h5>
                                                            </div>
                                                            <div className="">
                                                                <button className="btn btn-success" style={{width:'fit-content'}} onClick={exportToExcel}>
                                                                    Export Excel
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive mt-2">
                                                            <table className="table">
                                                                <thead className="table-primary">
                                                                    <tr>
                                                                        <th>No.</th>
                                                                        <th>Provider Name</th>
                                                                        <th>Provider Number</th>
                                                                        <th>Business Name</th>
                                                                        <th>Business Type</th>
                                                                        <th>Provider Email</th>
                                                                        <th>Show Details</th>
                                                                    </tr>
                                                                    </thead>
                                                                <tbody className="table-light">
                                                                    {filteredProviders.map((item, i) => (
                                                                        <tr key={item._id}>
                                                                            <td>
                                                                                <h5>{i + 1}</h5>
                                                                            </td>
                                                                            <td>
                                                                                <h6 className="">{item.name}</h6>
                                                                            </td>
                                                                            <td>
                                                                                <h6 className="">{item.number}</h6>
                                                                            </td>
                                                                            <td>
                                                                                <h6 className="">{item.Bname}</h6>
                                                                            </td>
                                                                            <td>
                                                                                <h6 className="">{item.Btype}</h6>
                                                                            </td>
                                                                            <td>
                                                                                <h6 className="">{item.email}</h6>
                                                                            </td>
                                                                            <td data-th="Net Amount">
                                                                                <Link to={`/admin_providerdetails/${item._id}`}>
                                                                                    <button type="button" className="btn btn-danger btn-sm">
                                                                                        Show
                                                                                    </button>
                                                                                </Link>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                            </div>
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

                </>)}

        </>
    )
}
export default Showprovider