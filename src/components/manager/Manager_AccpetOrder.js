import React from "react";
import ManagerHeader from "./ManagerHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Manager_Order = () => {

    const managertoken = localStorage.getItem("managertoken");
    const [order, setOrder] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/manager/accepted_order`, { headers: { 'managertoken': managertoken } }).then(function (response) {
            // handle success
            setOrder(response.data.order);
            // console.log(order, "Order:::");

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
        const dataAsArray = order.map((item) => [
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
                            <div className="col-lg-12">
                                <div className="row">

                                    <div class="card card-body">
                                        <div className="col-12 d-flex">


                                            <div className="col-2  me-3">
                                                <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-body">
                                <table className="rwd-table">
                                    <tbody>
                                        <tr>
                                            <th>Order Id</th>
                                            <th>Customer Name</th>
                                            <th>Customer Number</th>
                                            <th>Provider Name</th>
                                            <th>Provider Numbar</th>
                                            <th>Category</th>
                                            <th>Sub Category</th>
                                            <th>Product and Service</th>
                                            <th>Description</th>
                                            <th>Show</th>
                                        </tr>
                                        {order &&
                                            order.map((item, i) => (
                                                <tr key={i}>


                                                    <td>
                                                        <h6 className="">
                                                            {item.no}
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
                                                            {item.providerid[0].name}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="">
                                                            {item.providerid[0].number}
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
                                                        <Link to={`/manager_acceptdetails/${item._id}`}>
                                                            <button type="button" className="btn btn-primary btn-sm">Show</button>
                                                        </Link>
                                                    </td>
                                                </tr>

                                            ))}
                                    </tbody>
                                </table>
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