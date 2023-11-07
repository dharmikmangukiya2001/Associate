import React from "react";
import Provider_Header from "./Provider_Header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Provider_Accept = () => {



    const providertoken = localStorage.getItem("providertoken");

    const [providerorder, setProviderorder] = useState('');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/accepted_orders`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setProviderorder(response.data.providerorder);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    const { id } = useParams();
    //---------------------------------------------------------------------|   CALL   |------------------------------------------------------------------------------------------------//
    const handleCall = (id) => {
        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/call`, { body: "call" }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                // console.log(response.data.updatedData,"call:::");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    //---------------------------------------------------------------------|   MEETING   |------------------------------------------------------------------------------------------------//

    const handleMeeting = (id) => {
        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/meeting`, { body: "meeting" }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                console.log(response.data, "meeting:::");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    //---------------------------------------------------------------------|   DEAL   |------------------------------------------------------------------------------------------------//

    const handleDeal = (id) => {
        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/deal`, { body: "deal" }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                console.log(response.data, "deal:::");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    //---------------------------------------------------------------------|   AMOUNT   |------------------------------------------------------------------------------------------------//

    const [dealamount, setDealamount] = useState({}); // Use an object to store values for each item

    const handleAmount = (id) => {
        axios
            .post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/amount`, {
                body: "amount",
                dealamount: dealamount[id] // Get the dealamount for the specific item
            }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                console.log(response.data, "dealamount:::");
                window.location.reload('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    //---------------------------------------------------------------------|   WORK   |------------------------------------------------------------------------------------------------//

    const handleWork = (id) => {
        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/work`, { body: "work" }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                console.log(response.data, "work:::");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    //---------------------------------------------------------------------|   PAYMENT   |------------------------------------------------------------------------------------------------//

    const handlePayMent = (id) => {
        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/provider/tracking/${id}/payment`, { body: "Payment" }, { headers: { 'providertoken': providertoken } })
            .then(function (response) {
                // handle success
                console.log(response.data, "payment:::");
                window.location.reload('')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    return (
        <>
            <Provider_Header />

            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start m-0'>Accept Order</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Orders</li>
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

                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="col-7">
                                                        <h5 className="card-title">Accept Order</h5>
                                                    </div>
                                                    <div className="col-2 ms-5 me-3">
                                                    </div>
                                                    <div className="col-2">
                                                    </div>
                                                </div>

                                                <table className="rwd-table">
                                                    <tbody>

                                                        <tr>
                                                            <th>Orderid</th>
                                                            <th>Customer Name</th>
                                                            <th>Customer Number</th>
                                                            <th>Call</th>
                                                            <th>Meeting</th>
                                                            <th>Deal</th>
                                                            <th>Amount</th>
                                                            <th>Work</th>
                                                            <th>Payment</th>
                                                        </tr>

                                                        <>
                                                            {providerorder &&
                                                                providerorder.map((item, i) => (
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
                                                                        <td data-th="">
                                                                            {item.call === true ? <span><i class="bi-check-lg fs-2 text-success"></i></span> :
                                                                                <a href={`tel:${item.otherNumber}`}>
                                                                                    <button type="button" onClick={() => handleCall(item._id)} className="btn btn-danger btn-sm">Call Done</button>
                                                                                </a>}
                                                                        </td>
                                                                        <td data-th="">
                                                                            {item.meeting === true ? <span><i class="bi-check-lg fs-2 text-success"></i></span> :
                                                                                <button type="button" onClick={() => handleMeeting(item._id)} className="btn btn-danger btn-sm">Meeting Done</button>}
                                                                        </td>
                                                                        <td data-th="">
                                                                            {item.deal === true ? <span><i class="bi-check-lg fs-2 text-success"></i></span> :
                                                                                <button type="button" onClick={() => handleDeal(item._id)} className="btn btn-danger btn-sm">Deal Done</button>}
                                                                        </td>
                                                                        <td data-th="">
                                                                            {item.amount === true ? (
                                                                                <span>
                                                                                    <i className="bi-check-lg fs-2 text-success"></i>
                                                                                </span>
                                                                            ) : (
                                                                                <div className="input-group mb-3">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        value={dealamount[item._id]|| dealamount || ''}
                                                                                        onChange={(e) => setDealamount({ ...dealamount, [item._id]: e.target.value })}
                                                                                        placeholder="Enter Your Deal Amount"
                                                                                        aria-label="Recipient's username"
                                                                                        aria-describedby="button-addon2"
                                                                                    />
                                                                                    <button
                                                                                        className="btn btn-danger"
                                                                                        onClick={() => handleAmount(item._id)}
                                                                                        type="button"
                                                                                        id="button-addon2"
                                                                                    >
                                                                                        Deal Amount
                                                                                    </button>
                                                                                </div>
                                                                            )}

                                                                        </td>
                                                                        <td data-th="">
                                                                            {item.work === true ? <span><i class="bi-check-lg fs-2 text-success"></i></span> :
                                                                                <button type="button" onClick={() => handleWork(item._id)} className="btn btn-danger btn-sm">Work Done</button>}
                                                                        </td>
                                                                        <td data-th="">
                                                                            {item.payment === true ? <span><i class="bi-check-lg fs-2 text-success"></i></span> :
                                                                                <button type="button" onClick={() => handlePayMent(item._id)} className="btn btn-danger btn-sm">PayMent Done</button>}
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
export default Provider_Accept;