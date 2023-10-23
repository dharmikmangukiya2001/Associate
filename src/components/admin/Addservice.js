import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addservice = () => {

// =====================================================| Service Type  |==========================================================================

    const token = localStorage.getItem("token");
    const nevigate = useNavigate();

    // service Type
    const [servicetype, setServicetype] = useState('')
    const handleServiceType = (e) => {
        e.preventDefault();

        const typedetails = {
            btype: servicetype,
        }

        setServicetype(servicetype);
        console.log(servicetype);

        axios.post(`${process.env.REACT_APP_URL}/admin/add_btype`, typedetails)
            .then(function (response) {
                // hendle success
                console.log(response.data);
                setServicetype('')
            })
            .catch(function (error) {
                console.log(error);
            })

    };
// ==================================================| Bussiness Formation  |======================================================================

    // bussiness formation
    const [bussinessformation, setBussinessformation] = useState('')
    const handleBussinessFormation = (e) => {
        e.preventDefault();

        const formationdetails = {
            bussinessformation: bussinessformation,
        }


        setBussinessformation(bussinessformation);
        console.log(bussinessformation);

        axios.post(`${process.env.REACT_APP_URL}/admin/add_bformation`, formationdetails)
            .then(function (response) {
                // hendle success
                console.log(response.data);
                setBussinessformation('')
            })
            .catch(function (error) {
                console.log(error);
            })

    };
// ========================================================| Category  |===========================================================================

    // category
    const [bussinesscategory, setBussinesscategory] = useState('')
    const handleCategory = (e) => {
        e.preventDefault();

        const categorydetails = {
            bussinesscategory: bussinesscategory,
        }

        setBussinesscategory(bussinesscategory);
        console.log(bussinesscategory);

        axios.post(`${process.env.REACT_APP_URL}/admin/add_bcategory`, categorydetails)
            .then(function (response) {
                // hendle success
                console.log(response.data);
                setBussinesscategory('')
            })
            .catch(function (error) {
                console.log(error);
            })

    };

// ================================================| Select Bussiness Category  |==================================================================
    
    //Select Bussiness category
    const [bcategory, setBcategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bcategory`).then(function (response) {
            // handle success

            // console.log(response.data, "ddd");
            setBcategory(response.data.bcategory);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    // subcategory
    const [bcategoryid,setBcategoryid] = useState('')
    const [bussinesssubcategory, setBussinesssubcategory] = useState('')
    const handleSubcategory = (e) => {
        e.preventDefault();

        const subcategorydetails = {
            bussinesssubcategory: bussinesssubcategory,
            bcategoryid:bcategoryid
        }

        setBussinesssubcategory(bussinesssubcategory);
        setBcategoryid(bcategoryid);

        console.log("Bussiness Subcategory:::",bussinesssubcategory,"Bussiness Category:::",bcategoryid);

        axios.post(`${process.env.REACT_APP_URL}/admin/add_bsubcategory`, subcategorydetails)
            .then(function (response) {
                // hendle success
                console.log(response.data);
                setBussinesssubcategory('')
                // setBcategoryid('')
            })
            .catch(function (error) {
                console.log(error);
            })

    };
// ================================================================================================================================================
    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start" >Add Services</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <form onSubmit={handleServiceType}>
                                                    <div className="row mb-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Business Type</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" id="floatingInput" value={servicetype} onChange={(e) => setServicetype(e.target.value)} placeholder="Services Name" />
                                                                <label htmlFor="floatingInput">Services type</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-0 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group">
                                                                <input type="submit" className="form-control bg-success text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <form onSubmit={handleBussinessFormation}>

                                                    <div className="row mb-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Bussiness Formation</label>
                                                        <div className="col-sm-10 ">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" placeholder="Bussiness Formation" value={bussinessformation} onChange={(e) => setBussinessformation(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Bussiness Formation</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-0 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group">
                                                                <input type="submit" className="form-control bg-success text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <form onSubmit={handleCategory}>
                                                    <div className="row mb-2">
                                                        <label className="col-sm-2 col-form-label fw-bold">Bussiness Category</label>
                                                        <div className="col-sm-10 ">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" placeholder="Provider Name" value={bussinesscategory} onChange={(e) => setBussinesscategory(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Bussiness Category</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-0 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group">
                                                                <input type="submit" className="form-control bg-success text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                        <label className="col-sm-2 fs-5 col-form-label mb-3 fw-bold"> Select Category :</label>
                                                <form onSubmit={handleSubcategory}>
                                                    <div className="row mb-2">
                                                        <label className="col-sm-2 col-form-label fw-bold"> Category</label>
                                                        <div className="col-sm-10 ">
                                                            <div className="form-floating mb-4">
                                                                <select class="form-select" aria-label="Default select example" value={bcategoryid} onChange={(e) => setBcategoryid(e.target.value)}>
                                                                    <option selected>---- Select Category ----</option>
                                                                   
                                                                {
                                                                    bcategory && bcategory.map((item, i) => {
                                                                        return (
                                                                            <>

                                                                                    <option value={item._id}>{item.bussinesscategory}</option>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label fw-bold">Bussiness Subcategory</label>
                                                        <div className="col-sm-10 ">
                                                            <div className="form-floating mb-4">
                                                                <input type="text" className="form-control" placeholder="Provider Name" value={bussinesssubcategory} onChange={(e) => setBussinesssubcategory(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Bussiness Subcategory</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-0 justify-content-end">
                                                        <div className="col-sm-2">
                                                            <div className="input-group">
                                                                <input type="submit" className="form-control bg-success text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>{/* End #main */}
                {/* <=+=+=+=+=+=+=| Footer |=+=+=+=+=+=+=> */}
                <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>

        </>
    )
}


export default Addservice;