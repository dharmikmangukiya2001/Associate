import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";


const AllMember = () => {


const [users, setUsers] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/alluser`,{headers: {'token': token}}).then(function (response) {
            // handle success
            // console.log(response.data,"fgdg");
            setUsers(response.data.users);
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
                                                            <th>Email ID</th>
                                                            <th>Address</th>
                                                            <th>Reference By</th>
                                                            <th>Reference Number</th>
                                                            <th>Occupation</th>
                                                            <th>D.O.B.</th>
                                                            
                                                            <th>Show</th>
                                                        </tr>

                                                        <>
                                                            {users &&
                                                                users.map((item, i) => (
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
                                                                           
                                                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                                                          
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
 

export default AllMember