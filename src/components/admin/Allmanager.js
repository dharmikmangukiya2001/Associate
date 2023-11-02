import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Allmanager = () => {

    const [users, setUsers] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/alluser`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data,"fgdg");
            setUsers(response.data.users);
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
        const dataAsArray = users.map((item) => [
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
    return (
        <>
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
                                                <div className="d-flex">
                                                    <div className="col-10">
                                                        <h5 className="card-title">Show All Manager</h5>
                                                    </div>
                                                    <div className="col-2">
                                                        <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
                                                    </div>
                                                </div>
                                                <table className="rwd-table">


                                                    <tbody>

                                                        <tr>
                                                            <th>No</th>
                                                            <th>Manager Name</th>
                                                            <th>Manager Number</th>
                                                            <th>Manager Email ID</th>
                                                            <th>Show</th>
                                                        </tr>

                                                        <>
                                                            {users &&
                                                                users.map((item, i) => (
                                                                    <tr key={i}>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {i+1}
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
                                                                            <Link to={`/admin_memberdetails/${item._id}`}>
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
export default Allmanager;