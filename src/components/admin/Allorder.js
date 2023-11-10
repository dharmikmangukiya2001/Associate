import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";


const Allorder = () => {

    //loarder
    const [isLoading, setIsLoading] = useState(true);
    const [data1, setData] = useState(null);

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


    // Provider show data

    const [managers, setManagers] = useState('')
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/allmanager`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setManagers(response.data.managers);
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
        const dataAsArray = userForms.map((item) => [
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

    const [selectedManagerIds, setSetSelectedManagerIds] = useState([]);

    // Function to handle checkbox changes
    const handleManagerCheckboxChange = (itemId) => {
        if (selectedManagerIds.includes(itemId)) {
            // If the ID is already in the array, remove it
            setSetSelectedManagerIds(selectedManagerIds.filter(id => id !== itemId));
        } else {
            // If the ID is not in the array, add it
            setSetSelectedManagerIds([...selectedManagerIds, itemId]);
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
            Orderid: selectedOrderIds,
            Managerid: selectedManagerIds
        }

        // data get karavava mate
        axios.post(`${process.env.REACT_APP_URL}/admin/forward_order`, OrderData, { headers: { 'token': token } })
            .then(function (response) {
                console.log(response.data);
                window.location.reload();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    // search Input
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Assuming your initial data is stored in the `adminorder` state
    // const [adminorder, setAdminOrder] = useState([]);

    useEffect(() => {
        // Filter the data based on the search input
        const filtered = userForms.filter((item) => {
            return (
                item.userid.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                (typeof item.userid.number === 'string' && item.userid.number.includes(searchInput)) ||
                (item.no.toString().includes(searchInput.toLowerCase())) ||  // Convert to string
                item.productid.bsubcategoryid[0].bcategoryid.bussinesscategory.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.productid.bsubcategoryid[0].bussinesssubcategory.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.productid.product.toLowerCase().includes(searchInput.toLowerCase())
            );
        });

        setFilteredData(filtered);
    }, [searchInput, userForms]);

    // Handler for the search input change
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };



    return (
        <>

            {
                isLoading ? (<><Loader /></>) : (<>

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
                                                        <button onClick={handleSubmit} className="btn btn-dark" style={{ width: 'fit-content' }}>Send</button>
                                                        <div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        {/* <!-- Search Input --> */}
                                                        <div className="ms-3 me-3">
                                                            <div className="input-group mb-3">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2"
                                                                    placeholder="Search Term"
                                                                    value={searchInput}
                                                                    onChange={handleSearchInputChange}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* <!-- Table Actions --> */}
                                                        <div className="d-flex">
                                                            <div className="col-7">
                                                                <h5 className="card-title">Show All Member</h5>
                                                            </div>
                                                            <div className="mt-3">
                                                                <button className="btn btn-success me-2" style={{ width: 'fit-content' }} onClick={exportToExcel}>Export Excel</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-primary" style={{ width: 'fit-' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                                Send to Manager
                                                            </button>
                                                        </div>


                                                        <div className="table-responsive mt-2">
                                                            <table className="table">
                                                                <thead className="table-primary">
                                                                    <tr>
                                                                        <th>Select</th>
                                                                        <th>Order ID</th>
                                                                        <th>Member ID</th>
                                                                        <th>Member Name</th>
                                                                        <th>Member Number</th>
                                                                        <th>Category</th>
                                                                        <th>Sub Category</th>
                                                                        <th>Product and Service</th>
                                                                        <th>Show</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="table-light">
                                                                    <>
                                                                        {
                                                                            filteredData.map((item, i) => (
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
                                                                                            {item.no}
                                                                                        </h6>
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
                                                                                            <button type="button" style={{ width: 'fit-content' }} className="btn btn-primary btn-sm"> Show</button>
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

                </>)}

        </>
    )

}
export default Allorder;