import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const AllMember = () => {


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
        const headers = ['Member ID', 'Member Name', 'Member Number', 'Email ID', 'Address', 'Reference By', 'Reference Number', 'Occupation', 'D.O.B.'];
        // Fetch data from the API and store it in the 'data' variable
        const dataAsArray = users.map((item) => [
            item.ids,
            item.name,
            item.number,
            item.email,
            item.address,
            item.reference,
            item.ref_no,
            item.occupation,
            item.DOB
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
    const filteredUsers = users.filter((users) => {
        return (
            users.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            users.number.includes(searchTerm) ||
            users.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            users.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            users.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
            // users.ref_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
            users.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            users.DOB.toLowerCase().includes(searchTerm.toLowerCase())

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
                                <h1 className='text-start'>Show Allorder</h1>
                                <nav>
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'>Home</li>
                                        <li className='breadcrumb-item activ'>Order</li>
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
                                                                <h5 className="card-title">Show All Member</h5>
                                                            </div>
                                                            <div className="">
                                                                <button className="btn btn-success" style={{width:'fit-content'}} onClick={exportToExcel}>Export to Excel</button>
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive mt-2">
                                                            <table className="table">
                                                                <thead className="table-primary">

                                                                <tr>
                                                                    <th>Member ID</th>
                                                                    <th>Member Name</th>
                                                                    <th>Member Number</th>
                                                                    <th>Email ID</th>
                                                                    <th>Address</th>
                                                                    <th>Reference By</th>
                                                                    <th>Reference Number</th>
                                                                    <th>Occupation</th>
                                                                    <th>D.O.B.</th>

                                                                    <th>Show</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody className="table-light">
                                                                <>
                                                                    {
                                                                        filteredUsers.map((item, i) => (
                                                                            <tr key={i}>

                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.ids}
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
                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.address}
                                                                                    </h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.reference}
                                                                                    </h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.ref_no}
                                                                                    </h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.occupation}
                                                                                    </h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="">
                                                                                        {item.DOB}
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


export default AllMember