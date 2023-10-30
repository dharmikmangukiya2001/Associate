import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Allorder = () => {


    const [userForms, setUserForms] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/all_userform`).then(function (response) {
            // handle success
            console.log(response.data);
            setUserForms(response.data.userForms);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <>
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
                                                <div className="d-flex">
                                                    <div className="col-10">
                                                        <h5 className="card-title">Show All Member</h5>
                                                    </div>

                                                </div>
                                                <table className="rwd-table">


                                                    <tbody>

                                                        <tr>
                                                            <th>Member ID</th>
                                                            <th>Member Name</th>
                                                            <th>Member Number</th>
                                                            <th>Category</th>
                                                            <th>Sub Category</th>
                                                            <th>Product and Service</th>
                                                            <th>Description</th>
                                                            <th>Customer Name</th>
                                                            <th>Customer Number</th>
                                                            <th>Show</th>
                                                        </tr>

                                                        <>
                                                            {userForms &&
                                                                userForms.map((item, i) => (
                                                                    <tr key={i}>

                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.no}
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
                                                                        <td>
                                                                            <h6 className="">
                                                                                {item.description}
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
                                                                        <td data-th="Net Amount">
                                                                            {/* <Link to={`/admin_providerdetails/${}`}> */}
                                                                            <button type="button" className="btn btn-danger btn-sm">Show</button>
                                                                            {/* </Link> */}
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