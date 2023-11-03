import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";


const Allorder = () => {


    const [userForms, setUserForms] = useState([])
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/all_userform`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setUserForms(response.data.userForms);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    adminorder



    return (
        <>
            <Header />

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
                                                {managers && managers.map((item, i) => (
                                                    <div key={i}>
                                                        <p>
                                                            <span>
                                                                <input
                                                                    className="form-check-input me-3"
                                                                    type="checkbox"
                                                                    value={item._id}
                                                                    id="flexCheckMDefault"
                                                                    onChange={() => handleManagerCheckboxChange(item._id)}
                                                                    checked={selectedManagerIds.includes(item._id)}
                                                                />
                                                            </span>
                                                            <strong>
                                                                {item.name}
                                                            </strong>

                                                        </p>

                                                    </div>
                                                ))}
                                                <button onClick={handleSubmit} className="btn btn-dark" style={{width:'fit-content'}}>Send</button>
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
                                                            Send to Manager
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
                                                            {userForms &&
                                                                userForms.map((item, i) => (
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
export default Allorder;