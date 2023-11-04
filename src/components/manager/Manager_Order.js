import React from "react";
import ManagerHeader from "./ManagerHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Manager_Order = () => {

    const managertoken = localStorage.getItem("managertoken");
    const [adminorder, setAdminorder] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/manager/showorders`, { headers: { 'managertoken': managertoken } }).then(function (response) {
            // handle success
            setAdminorder(response.data.adminorder);
            // console.log(adminorder,"Order:::");

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // Show All Order For Member End

    // Provider show data

    const [providers, setProvider] = useState('')
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/manager/allprovider`, { headers: { 'managertoken': managertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setProvider(response.data.providers);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])





    const XLSX = require('xlsx');
    const exportToExcel = () => {
        const headers = ['Member ID', 'Member Name', 'Member Number', 'D.O.B.', 'Category', 'Sub Category', 'Product and Service', 'Reference Name', 'Reference Number', 'Description'];
        // Fetch data from the API and store it in the 'data' variable
        const dataAsArray = adminorder.map((item) => [
            item.userid.ids,
            item.userid.name,
            item.userid.number,
            item.userid.DOB,
            item.productid.bsubcategoryid[0].bcategoryid.bussinesscategory,
            item.productid.bsubcategoryid[0].bussinesssubcategory,
            item.productid.product,
            item.otherName,
            item.otherNumber,
            item.description,
        ]);

        const excelData = [headers, ...dataAsArray];
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        XLSX.writeFile(wb, 'exported_data.xlsx');
    }


    //Order Multiple Select Options

    const [selectedProviderIds, setSelectedProviderIds] = useState([]);

    // Function to handle checkbox changes
    const handleProviderCheckboxChange = (itemId) => {
        if (selectedProviderIds.includes(itemId)) {
            // If the ID is already in the array, remove it
            setSelectedProviderIds(selectedProviderIds.filter(id => id !== itemId));
        } else {
            // If the ID is not in the array, add it
            setSelectedProviderIds([...selectedProviderIds, itemId]);
        }
    };
    // console.log(selectedProviderIds,"Provider");




    //Order Multiple Select Options

    const [selectedOrderIds, setSelectedOrderIds] = useState([]);

    // Function to handle checkbox changes
    const handleCheckboxChange = (itemId) => {
        if (selectedOrderIds.includes(itemId)) {
            // If the ID is already in the array, remove it
            setSelectedOrderIds(selectedOrderIds.filter(id => id !== itemId));
        } else {
            // If the ID is not in the array, add it
            setSelectedOrderIds([...selectedOrderIds, itemId]);
        }
    };
    //  console.log(selectedOrderIds,"Order");





    const handleSubmit = (e) => {
        e.preventDefault();
        const OrderData = {
            orderid: selectedOrderIds,
            providerid: selectedProviderIds
        }

        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/manager/provider_order`, OrderData, { headers: { 'managertoken': managertoken } })
            .then(function (response) {
                console.log(response.data);
                window.location.reload();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    return (
        <>

            <ManagerHeader />


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
                                            <div class="card card-body">
                                                {providers && providers.map((item, i) => (
                                                    <div key={i}>
                                                        <p>
                                                            <span>
                                                                <input
                                                                    className="form-check-input me-3"
                                                                    type="checkbox"
                                                                    value={item._id}
                                                                    id="flexCheckMDefault"
                                                                    onChange={() => handleProviderCheckboxChange(item._id)}
                                                                    checked={selectedProviderIds.includes(item._id)}
                                                                />
                                                            </span>
                                                            <strong>
                                                                {item.name}
                                                            </strong>

                                                        </p>

                                                    </div>
                                                ))}
                                                <button onClick={handleSubmit} className="btn btn-dark" style={{ width: 'fit-content' }}>Send</button>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="col-7">
                                                        <h5 className="card-title">Show All Member</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                        <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
                                                    </div>
                                                    <div className="col-2">
                                                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                            Send to Provider
                                                        </button>
                                                    </div>
                                                </div>

                                                <table className="rwd-table">
                                                    <tbody>

                                                        <tr>
                                                            <th>Select</th>
                                                            <th>Member ID</th>
                                                            <th>Member Name</th>
                                                            <th>Member Number</th>
                                                            <th>Category</th>
                                                            <th>Sub Category</th>
                                                            <th>Product and Service</th>
                                                            {/* <th>Description</th> */}
                                                            {/* <th>Customer Name</th> */}
                                                            {/* <th>Customer Number</th> */}
                                                            {/* <th>Send</th> */}
                                                            <th>Show</th>
                                                        </tr>

                                                        <>
                                                            {adminorder &&
                                                                adminorder.map((item, i) => (
                                                                    <tr key={i}>

                                                                        <td>
                                                                            <div class="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value={item._id}
                                                                                    id="flexCheckDefault"
                                                                                    onChange={() => handleCheckboxChange(item._id)}
                                                                                    checked={selectedOrderIds.includes(item._id)}
                                                                                />
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.userid.ids}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.userid.name}
                                                                            </h6>
                                                                        </td>
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.userid.number}
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
                                                                        {/* <td>
                                                                            <h6 className="">
                                                                                {item.description}
                                                                            </h6>
                                                                        </td> */}
                                                                        {/* <td>
                                                                            <h6 className="">
                                                                                {item.otherName}
                                                                            </h6>
                                                                        </td> */}
                                                                        {/* <td>
                                                                            <h6 className="">
                                                                                {item.otherNumber}
                                                                            </h6>
                                                                        </td> */}
                                                                        {/* <td data-th="Net Amount">
                                                                            <Link to={`/admin_providerdetails/${}`}>
                                                                            <button type="button" className="btn btn-success btn-sm">Send Manager</button>
                                                                            </Link>
                                                                        </td>                                                 */}
                                                                        <td data-th="Net Amount">
                                                                            <Link to={`/admin_orderdetails/${item._id}`}>
                                                                                <button type="button" className="btn btn-primary btn-sm">Show</button>
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
export default Manager_Order;