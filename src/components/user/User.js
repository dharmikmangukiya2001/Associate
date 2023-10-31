import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import { BsSearch } from 'react-icons/bs';

import Loader from "./Loader";
import { error } from "jquery";


const User = () => {


    // loader
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // Set the duration for showing the loader in milliseconds
        const showTime = 5000; // 5 seconds

        // Function to hide the loader and set isLoading to false
        function hideLoader() {
            setIsLoading(false);
        }

        // Show the loader for the specified showTime
        const timer = setTimeout(hideLoader, showTime);

        // Clear the timer when the component unmounts to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);
    // loader closed




    const usertoken = localStorage.getItem('usertoken')

    const [seletedOption, setSeletedOption] = useState(false);
    const handleAdd = (e) => {
        e.preventDefault();
        setSeletedOption(true)
    };


    const [searchData, setSearchData] = useState([]); // Store search results

    const [search, setSearch] = useState('');
    const handleSearch = (e) => {

        axios.post(`${process.env.REACT_APP_URL}/user/search`, { search },{headers: {'usertoken': usertoken}})
            .then(response => {
                setSearchData(response.data);
                // console.log("Search::", response.data);
                // console.log("Search Data::", searchData);
            })
            .catch(error => {
                console.log("Error", error);
            })

    }

    // useEffect(() => {
        // console.log("Search Data::", searchData)
    // })

    const searchResultsArray = Object.entries(searchData);





    return (
        <>
            <UserHeader />
            <main id="main" className="main">

                    <div className="col-12 col-md-6 col-lg-4 p-3">
                        <input
                            className="w-75"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="query"
                            placeholder="Search"
                            title="Enter search keyword"
                        />
                        <button type="submit" onClick={handleSearch} className=" mb-1 btn btn-primary" style={{ width: '50px', marginLeft: '-50px' }} title="Search">
                            <i>
                                <BsSearch />
                            </i>
                        </button>
                    </div>
                {/* <div className="pagetitle d-flex flex-row-reverse me-5"> */}


                        {/* <div className="text-end"> */}

                        <Link to='/member_addask'><button class="position-fixed z-3 custom-btn btn-10 p-0" style={{bottom: '20px',right:' 20px'}}>
                            Add Ask
                            </button></Link>
                        {/* </div> */}

                    {/* <div class="container"> */}
                    <div class="row">
                        {searchResultsArray.map(([key, value], i) => (
                            <div className="col-12">
                                <div class="col-12 flex-wrap d-flex" key={i}>
                                    {value.map((value1, j) => (
                                        <div class="our-team shadow border border-2 rounded col-lg-2 col-md-3 col-12 col-sm-6 m-3 p-3" key={j}>
                                            <div class="picture">
                                                {value1.profile && (
                                                    <div>
                                                        <img style={{ height: "130px" }} class="img-fluid" src={value1.profile} alt={value1.name} />
                                                    </div>
                                                )}
                                            </div>
                                            <div class="team-content">
                                                <h3 class="name fs-4 text-capitalize">{value1.name}</h3>
                                                <p class="title mb-5 text-lowercase">{value1.email}</p>
                                                {/* Add other fields you want to display */}
                                            </div>
                                            <ul class="social">
                                                <Link to={`/member_provider_details/${value1._id}`}>
                                                <button className="btn text-white">Viwe More</button>
                                                </Link>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                   

                <section className="section dashboard">
                    <div className="row">
                        <div className="pagetitle">
                            <h1 className="text-start">Select Category Services</h1>
                        </div>{/* End Page Title */}
                        <div className="col-lg-12 col-12">
                            <div className="col-lg-12 col-12 d-flex flex-wrap">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body  p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Advertising Service</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Agriculture & Agro</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1636761358760-101cabeeb699?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Automobile</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1617220377936-6423b02875d1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Beauty care & Cosmetic Product</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1583912267550-d974311a9a6e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Chemicals</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1520520688967-7bdc16e77dc2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Computer Hardware & Cctv</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Construction Materials</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Consulancy & Service</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="row">

                                <div className="text-center">
                                    <button onClick={handleAdd} className="btn btn-danger" style={{width:'200px'}}>Viwe More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        seletedOption ? (
                            <>
                                <div className="row mt-5">
                                    <div className="col-lg-12 col-12">
                                        <div className="col-lg-12 col-12 d-flex flex-wrap">
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body  p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Ecommerce</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Education</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Electronics & Electricals</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1467579424161-6bbc141569d7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Energy & Power</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Engineering & Foundry</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Financial & Legal Service</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Food & beverages</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Garments & accessories</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1474169482634-9d0381a70510?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Gems & Jewelry</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Health Care & Doctor & medicals</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80&w=2067&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Home Decor & Handicraft Items</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1605775934918-7185fc56498f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Hospitality</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Insurance</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1600866816938-1453a77efc8f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">It & softwar</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&q=80&w=2090&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Logistics & Packaging</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Other</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1470940511639-1068d7764233?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Photography & entertainment</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1607432750402-48f85c94f63a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Pollution Control Equipment</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Real Estate & construction Service</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Textiles</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1680633480293-b64ec2e61e01?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Textile Parts & Assessories</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                                <div className="mx-2 me-sm-4">
                                                    <Link className="a-none" to={`/servicedetails`}>
                                                        <div class="card">
                                                            <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                                <img src="https://images.unsplash.com/photo-1505164294036-5fad98506d20?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                                <a href="">
                                                                    <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body p-0 text-center">
                                                                <h5 class="card-title font-weight-bold">Travel & Tourism</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </>
                        ) : (<></>)
                    }
                </section>
                <section className="section dashboard">
                    <div className="row">
                        <div className="pagetitle">
                            <h1 className="text-start">Select Business Type Services</h1>
                        </div>{/* End Page Title */}
                        <div className="col-lg-12 col-12">
                            <div className="col-lg-12 col-12 d-flex flex-wrap">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.unsplash.com/photo-1614068979501-5608bdfaa4bd?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body  p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Retailer</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://cdn.globalagmedia.com/poultry/articles/post-production-and-products/cold-storage-adobe-stock-editorial-use-only.jpeg" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Wholesaler / Distributor</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://www.a2ztaxcorp.com/wp-content/uploads/2015/11/manufacture.jpg" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Manufacturer</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://images.squarespace-cdn.com/content/v1/5dd690a25b18f2114837b3f6/1586340036202-VI9LVFI5MXXR0YTCJXXN/AdobeStock_111996963.jpeg" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Supplier</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://www.komunitasmea.web.id/wp-content/uploads/2021/12/ezgif.com-gif-maker-1.webp" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Reseller</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://www.supernormalstudio.it/wp-content/uploads/2023/06/stipendio-medio-Capo-Verde-scaled.jpg " class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Service Provider</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="mx-2 me-sm-4">
                                        <Link className="a-none" to={`/servicedetails`}>
                                            <div class="card">
                                                <div class="bg-image hover-overlay ripple" style={{ overflow: 'hidden' }} data-mdb-ripple-color="light">
                                                    <img src="https://hitechfm.com/wp-content/uploads/2023/06/qtq80-KBigT7.jpeg" class="img-fluid" />
                                                    <a href="">
                                                        <div class="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                    </a>
                                                </div>
                                                <div class="card-body p-0 text-center">
                                                    <h5 class="card-title font-weight-bold">Home Industry</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main > {/* End #main */}
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Morsy Infotech</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Mangukiya</a>
                    </div>
                </footer>{/* End Footer */}
        </>
    )
}
export default User;