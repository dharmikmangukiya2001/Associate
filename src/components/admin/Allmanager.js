import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const Allmanager = () => {

    // // loader
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
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



    const [managers, setManagers] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/allmanager`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data,"fgdg");
            setManagers(response.data.managers);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const XLSX = require('xlsx');
    const exportToExcel = () => {
        const headers = ['Manager Name', 'Manager Number', 'Manager Email ID'];
        // Fetch data from the API and store it in the 'data' variable
        const dataAsArray = managers.map((item) => [
            item.name,
            item.number,
            item.email,
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
    const filteredManagers = managers.filter((managers) => {
        return (
            managers.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            managers.number.includes(searchTerm) ||
            managers.email.toLowerCase().includes(searchTerm.toLowerCase())
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
                                <h1 className='text-start'>Show Manager</h1>
                                <nav>
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'>Home</li>
                                        <li className='breadcrumb-item activ'>Manager</li>
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
                                                                <h5 className="card-title">Show All Manager</h5>
                                                            </div>
                                                            <div className="">
                                                                <button className="btn btn-success" style={{width:'fit-content'}} onClick={exportToExcel}>Export Excel</button>
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive mt-2">
                                                            <table className="table">
                                                                <thead className="table-primary">

                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Manager Name</th>
                                                                    <th>Manager Number</th>
                                                                    <th>Manager Email ID</th>
                                                                    <th>Show</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody className="table-light">
                                                                <>
                                                                    {
                                                                        filteredManagers.map((item, i) => (
                                                                            <tr key={i}>

                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {i + 1}
                                                                                    </h6>
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
                                                                                        {item.email}
                                                                                    </h6>
                                                                                </td>


                                                                                <td data-th="Net Amount">
                                                                                    <Link to={`/admin_managerdetails/${item._id}`}>
                                                                                        <button type="button" className="btn btn-danger btn-sm">Show</button>
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
export default Allmanager;