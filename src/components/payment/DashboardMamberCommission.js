import React from "react";
import Header from "../admin/Header";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loader from "../admin/Loader";

const DashboardMamberCommission = () => {

    // loader
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



    const [commissionTotals, setCommissionTotals] = useState('')
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/comission_total`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setCommissionTotals(response.data.commissionTotals)
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
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

                            <div className="d-flex">
                                <>
                                    {Object.keys(commissionTotals).map((key) => (
                                        <div key={key} className="m-2 p-2">
                                            <a href={`/admin_memberordershow/${commissionTotals[key].userId}`} className="a-none">
                                                <div className="card p-2">
                                                    <div className="card-body">
                                                        <p className="fw-bold">Mamber Name: {commissionTotals[key].userName}</p>
                                                        <p>Total Orders: {commissionTotals[key].totalOrders}</p>
                                                        <p>Total Member Commission: {commissionTotals[key].totalMemberCommission}</p>
                                                        <p>Total Company Commission: {commissionTotals[key].totalCompanyCommission}</p>
                                                        {/* Add more properties as needed */}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}

                                </>
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
export default DashboardMamberCommission;