import React, { useEffect, useState } from "react";
import Provider_Header from "./Provider_Header";
import axios from "axios";

const Provider_Dashboard = () => {

  const providertoken = localStorage.getItem("providertoken");

  const [completed, setCompleted] = useState('');
  const [totalProviderCommission, setTotalProviderCommission] = useState('');
  const [totalDealAmount, setTotalDealAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/provider/completed_order`, { headers: { 'providertoken': providertoken } }).then(function (response) {
      // handle success
      // console.log(response.data);
      setCompleted(response.data.completed);
      setTotalProviderCommission(response.data.totalProviderCommission);
      setTotalDealAmount(response.data.totalDealAmount);
      setTotalAmount(response.data.totalAmount);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])



  return (
    <>
      <Provider_Header />

      <div>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1 className="text-start">Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>{/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-12">
                <div className="row">
                  {/* Sales Card */}
                  <div className="col-xxl-3 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Total</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Order <span>| Total</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                          </div>
                          <div className="ps-3">
                            {completed &&
                            <h6>{completed.length}</h6>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-3 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">All</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Total Payment <span>| All</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-wallet" />
                          </div>
                          <div className="ps-3">
                            {totalDealAmount &&
                            <h6>{totalDealAmount}</h6>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Revenue Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-3 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">All</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Company Commission <span>| All</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-credit-card" />
                          </div>
                          <div className="ps-3">
                            {totalProviderCommission &&
                            <h6>{totalProviderCommission}</h6>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Customers Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-3 col-xl-12">
                    <div className="card info-card customers-card1">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">All</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Your Total Payment <span>| All</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-wallet2" />
                          </div>
                          <div className="ps-3">
                            {totalAmount &&
                            <h6>{totalAmount}</h6>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Customers Card */}
                 
                </div>
              </div>
            </div>
          </section>
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="copyright">
            © Copyright <strong><span>Morsy Infotech</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Mangukiya</a>
          </div>
        </footer>{/* End Footer */}
      </div>
    </>
  )

}
export default Provider_Dashboard;