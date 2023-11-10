import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../admin/Header";
import Loader from "../admin/Loader";

const DashboardDoneOrder = () => {


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



    const token = localStorage.getItem("token");
    const [orders, setOrders] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/done_order`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            console.log(response.data);
            setOrders(response.data.orders);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    const XLSX = require('xlsx');
    const exportToExcel = () => {
        const headers = ['Order Id', 'Order Date', 'Mamber Name', 'Provider Name', 'Order Service', 'Order Deal Amount', 'Mamber Commission', 'Company Commission'];
        // Fetch data from the API and store it in the 'data' variable
        const dataAsArray = orders.map((item) => [
            item.no,
            item.updatedAt.slice(0, 10),
            item.userid.name,
            item.providerid[0].name,
            item.productid.bsubcategoryid[0].bussinesssubcategory,
            item.dealamount,
            item.memberCommission,
            item.companyCommission,
        ]);

        const excelData = [headers, ...dataAsArray];
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        XLSX.writeFile(wb, 'exported_data.xlsx');
    }

    return (
        <>
            {
                isLoading ? (<><Loader /></>) : (<>
                    <Header />
                    <main id="main" className='main'>
                        <div className='pagetitle'>
                            <h1 className='text-start m-0'>Done Order</h1>
                            <nav>
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>Home</li>
                                    <li className='breadcrumb-item activ'>Done Order</li>
                                </ol>
                            </nav>
                        </div>

                        <section className="section dashboard">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="collapse col-12" id="collapseExample">

                                            </div>
                                            <div className="card recent-sales overflow-auto">
                                                <div className="card-body">
                                                    <div className="d-flex mb-3">
                                                        <div className="">
                                                            <button className="btn btn-success" onClick={exportToExcel}>Export Excel</button>
                                                        </div>
                                                        <div className="col-2 ms-5 me-3">
                                                        </div>
                                                        <div className="col-2">
                                                        </div>
                                                    </div>

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
                </>)}
        </>
    )
}
export default DashboardDoneOrder;