import React from "react";
import ManagerHeader from "./ManagerHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Manager_DoneOrder = () => {

    const managertoken = localStorage.getItem("managertoken");
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/manager/done_order`, { headers: { 'managertoken': managertoken } }).then(function (response) {
            // handle success
            console.log(response.data, "Order:::");
            setOrders(response.data.orders);

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
        const dataAsArray = orders.map((item) => [
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
                                                <button className="btn btn-success" style={{ width: 'fit-content' }} onClick={exportToExcel}>Export Excel</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive mt-2">
                                <div className="table-responsive mt-2">
                                    <table className="table">
                                        <thead className="table-primary">

                                            <tr>
                                                <th>Order Id</th>
                                                <th>Order Date</th>
                                                <th>Mamber Name</th>
                                                <th>Provider Name</th>
                                                <th>Order Service</th>
                                                <th>Order Deal Amount</th>
                                                <th>Mamber Commission</th>
                                                <th>Company Commission</th>

                                            </tr>
                                        </thead>
                                        <tbody className="table-light">
                                            <>
                                                {orders &&
                                                    orders.map((item, i) => (
                                                        <tr key={i}>


                                                            <td>
                                                                <h6 className="">
                                                                    {item.orderid.no}
                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.updatedAt.slice(0, 10)}

                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.orderid.userid.name}

                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.orderid.providerid}

                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.orderid.productid.bsubcategoryid[0].bussinesssubcategory}
                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.dealamount}

                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.memberCommission}

                                                                </h6>
                                                            </td>

                                                            <td>
                                                                <h6 className="">
                                                                    {item.companyCommission}

                                                                </h6>
                                                            </td>

                                                        </tr>

                                                    ))}
                                            </>
                                        </tbody>
                                    </table>
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
export default Manager_DoneOrder;