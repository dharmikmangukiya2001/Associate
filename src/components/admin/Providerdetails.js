import { React, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

function Providerdetails() {
    const [provider, setProvider] = useState([])
    const id = useParams()
    const providerid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdetails/${providerid}`, { headers: { token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setProvider(response.data.providerdata);
            setTempservice(response.data.providerdata);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);





    // delete provider

    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.get(`${process.env.REACT_APP_URL}/admin/deleteprovider/${providerid}`, { headers: { token } }).then(function (response) {
            // handle success
            console.log(response.data);
            nevigate('/admin_showproviders')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }



    // update page hides and shows
    const [updates, setUpdates] = useState(false);
    const onAddUpdate = () => {
        setUpdates(true)

    }



    // data update


    // const [providername, setProvidername] = useState('');
    // const [providernumber, setProvidernumber] = useState('');
    // const [provideremailid, setProvideremailid] = useState('');
    // const [providerbod, setProviderbod] = useState('');
    // const [provideraddress, setProvideraddress] = useState('');
    // // Bussiness Details
    // const [bussinessname, setBussinessname] = useState('');
    // const [bussinessnumber, setBussinessnumber] = useState('');
    // const [bussinessemailid, setBussinessemailid] = useState('');
    // const [bussinessdetails, setBussinessdetails] = useState('');
    // const [bussinesswebsiteurl, setBussinesswebsiteurl] = useState('');
    // const [bussinessgstnumber, setBussinessgstnumber] = useState('');
    // const [bussinesstype, setBussinesstype] = useState('');
    // const [bussinesstdsdetails, setBussinesstdsdetails] = useState('');
    // const [bussinesspancardnumber, setBussinesspancardnumber] = useState('');
    // const [bussinesscategory, setBussinesscategory] = useState('');
    // const [bussinessaddress, setBussinessaddress] = useState('');
    // const [collaborationdetails, setCollaborationdetails] = useState('');
    // // Sales Details
    // const [salespersonname, setSalespersonname] = useState('');
    // const [salespersonnumber, setSalespersonnumber] = useState('');
    // const [salespersonemailid, setSalespersonemailid] = useState('');
    // const [salespersonposition, setSalespersonposition] = useState('');
    // // Bank Details
    // const [bankname, setBankname] = useState('');
    // const [bankaccountnumber, setBankaccountnumber] = useState('');
    // const [bankifsccode, setBankifsccode] = useState('');
    // const [bankbranchname, setBankbranchname] = useState('');
    // Files
    const [files, setSelectedFiles] = useState([]);
    const [changed, setChanged] = useState(false);
    const [tempservice, setTempservice] = useState([])
    // Main object

    // Token


    // ADD BUSINESS DIV SHOW SELECT INPUT
    const [seletedOption, setSeletedOption] = useState(false);
    const handleAdd = (e) => {
        e.preventDefault();
        setSeletedOption(true)
    };
    // ADD BUSINESS DIV END
    // SELECT OPTION FOR SHOW DIV DATA
    const [associate, setAssociate] = useState('')
    const handleSecondSelectChange = (e) => {
        setAssociate(e.target.value);
    };
    // SELECT OPTION END
    // ADD SELES PROSAN DIV SHOW
    const [selectedSelesOption, setSelectedSelesOption] = useState(false);
    const personAdd = (e) => {
        e.preventDefault();
        setSelectedSelesOption(true)
    };
    // ADD SELES PROSAN DIV END
    // ADD BANK DETAILS DIV SHOW
    const [selectedBankOption, setSelectedBankOption] = useState(false);
    const bankAdd = (e) => {
        e.preventDefault();
        setSelectedBankOption(true);
    };
    // ADD BANK DETAILS DIV END
    // ADD IMAGE DOCUMENT DIV SHOW
    const [selectedDocument, setSelectedDocument] = useState(false);
    const documentAdd = (e) => {
        e.preventDefault();
        setSelectedDocument(true);
    }
    // ADD IMAGE DOCUMENT DIV END


    useEffect(() => {
        console.log('tempservice 1', tempservice);
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (files.length === 0) {
        //     console.log("Please select at least one file");
        //     return
        // }

        const formData = new FormData();

        // append all selected files to the FromData object

        for (const file of files) {
            formData.append("providerimg", file);
        }

        for (const [key, value] of Object.entries(tempservice)) {
            console.log(`${key}: ${value}`);
            formData.append(key, value);
        }


        try {

            const response = fetch(`${process.env.REACT_APP_URL}/admin/updateprovider/${providerid}`, {
                method: "PUT",
                body: formData,
                headers: { token }
            });

            if (response) {
                console.log("Successfully uploaded images");
                nevigate('/admin_showproviders')
            } else {
                console.log("Error uploading images");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

    }
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        console.log("Selected files:", selectedFiles)
        setSelectedFiles(selectedFiles);

    };

    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Provider Details</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Provider</li>
                                <li className="breadcrumb-item active">Show Provider</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Services Details</h5>
                                                <div>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 pb-5">
                                                            <div className="col-4">

                                                            </div>
                                                            <div className="col-8">


                                                                {/* {provider.img.map((image, index) => (
                                                                    <img
                                                                        key={index} // Make sure to provide a unique key for each image if within a loop.
                                                                        className='rounded-circle border border-3 border-secondary'
                                                                        src={`${process.env.REACT_APP_URL}/${image}`} // Assuming 'image' contains the path to the image.
                                                                        height={100}
                                                                        alt={`Image ${index}`}
                                                                    />
                                                                ))} */}
                                                                {/* <img className='rounded-circle border border-3 border-secondary' src={`${process.env.REACT_APP_URL}/${provider.img}`} height={100} /> */}

                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Name &nbsp;&nbsp;: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6">{provider.providername}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p><span className="fs-6">{provider.providernumber}</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.provideremailid}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider B.O.D. : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.providerbod}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Address : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.provideraddress}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessnumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessemailid}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Website Url : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinesswebsiteurl}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness GSTIN Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessgstnumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Type : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinesstype}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessdetails}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness TDS Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinesstdsdetails}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Pancard Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinesspancardnumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Category : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinesscategory}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Address : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bussinessaddress}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Collaboration Details: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.collaborationdetails}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.salespersonname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.salespersonnumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.salespersonemailid}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Personposition : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.salespersonposition}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bankname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Account Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bankaccountnumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank ISFC Code : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bankifsccode}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Branch Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.bankbranchname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Document : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                {provider.img && Array.isArray(provider.img) && provider.img.map((image, index) => (
                                                                    <img
                                                                        key={index}
                                                                        className='rounded-circle border border-3 border-secondary'
                                                                        src={`${process.env.REACT_APP_URL}/${image}`}
                                                                        height={35}
                                                                        alt={`Image ${index}`}
                                                                    />
                                                                ))}

                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 mt-5 mb-2">
                                                            <div className="pe-4 col-12 text-end">
                                                                <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 mb-3">Delete</button></Link>

                                                                <Link><button id="updateButton" onClick={() => onAddUpdate()} className="btn btn-primary me-1 px-5 mb-3">Update</button></Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                updates ? (
                                    <>
                                        <div className='col-lg-6'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='card recent-sales overflow-auto'>
                                                        <div className='card-body'>
                                                            <h5 className="card-title">Update Services</h5>
                                                            <form>
                                                                <div className='card recent-sales overflow-auto'>
                                                                    <div className='card-body'>
                                                                        <h5 className='card-title mb-5'>Add Provider <span>| Today</span></h5>
                                                                        <div>
                                                                            <h6 className='fw-bold text-blue'>Provider Details :</h6>
                                                                            <hr className='me-3' />

                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Profile Photos <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3'>
                                                                                        <input type='file'
                                                                                            name="provide-profile"
                                                                                            onChange={handleFileChange}
                                                                                            multiple className='form-control' placeholder='Provider Name' />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Name <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3 form-floating'>
                                                                                        <input type='text' className='form-control' value={tempservice.providername} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providername: e.target.value, }) }} placeholder='Provider Name' />
                                                                                        <label htmlFor="floatingTextarea">Provider Name</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Numbar <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3 form-floating'>
                                                                                        <input type='number' className='form-control' value={tempservice.providernumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providernumber: e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                        <label htmlFor="floatingTextarea">Provider Number</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Email ID <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3 form-floating'>
                                                                                        <input type='text' className='form-control' value={tempservice.provideremailid} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, provideremailid: e.target.value, }) }} placeholder='Provider Email ID' />
                                                                                        <label htmlFor="floatingTextarea">Provider Email ID</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider B.O.D. <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3 form-floating'>
                                                                                        <input type='date' className='form-control' value={tempservice.providerbod} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, providerbod: e.target.value, }) }} placeholder='Provider B.O.D' />
                                                                                        <label htmlFor="floatingTextarea">Provider B.O.D.</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5'>
                                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Address <span className='text-red'>*</span></label>
                                                                                <div className='col-sm-9 col-lg-10'>
                                                                                    <div className='me-3 form-floating'>
                                                                                        <input type='text' className='form-control' value={tempservice.provideraddress} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, provideraddress: e.target.value, }) }} placeholder='Provider Address' />
                                                                                        <label htmlFor="floatingTextarea">Provider Address</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row mb-5 text-end me-2'>
                                                                                <div>
                                                                                    <button className='btn bg-danger text-white' onClick={handleAdd}>Select Business</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    seletedOption ? (
                                                                        <>
                                                                            <div className='card recent-sales overflow-auto'>
                                                                                <div className='card-body'>
                                                                                    <div className='row mt-5 mb-5'>
                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Category<span className='text-red'>*</span></label>
                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                            <select className="form-select" onChange={handleSecondSelectChange} value={associate} aria-label="Default select example">
                                                                                                <option >------ Select Option ------</option>
                                                                                                <option value="Property" >Property</option>
                                                                                                <option value="Design" >Design</option>
                                                                                                {/* {getSecondSelectOptions()} */}
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </>
                                                                    ) : (<></>)
                                                                }

                                                                {
                                                                    associate === 'Property' ? (
                                                                        <>
                                                                            <div className='card recent-sales overflow-auto'>
                                                                                <div className='card-body'>
                                                                                    <div>
                                                                                        <h6 className='fw-bold text-blue mt-5'>Business Details :</h6>
                                                                                        <hr className='me-3' />

                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Name <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinessname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessname: e.target.value, }) }} placeholder='Business Name' />
                                                                                                    <label htmlFor="floatingTextarea">Business Name</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Numbar <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='number' className='form-control' value={tempservice.bussinessnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessnumber: e.target.value, }) }} placeholder='Business Numbar' />
                                                                                                    <label htmlFor="floatingTextarea">Business Number</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Email ID <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinessemailid} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessemailid: e.target.value, }) }} placeholder='Business Email ID' />
                                                                                                    <label htmlFor="floatingTextarea">Business Email ID</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Website Url <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinesswebsiteurl} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinesswebsiteurl: e.target.value, }) }} placeholder='Business Website Url' />
                                                                                                    <label htmlFor="floatingTextarea">Business Website Url</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Details <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinessdetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessdetails: e.target.value, }) }} placeholder='Business Details' />
                                                                                                    <label htmlFor="floatingTextarea">Business Details</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Brosar <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3'>
                                                                                                    <input type='file' name='bussiness-brosar' onChange={handleFileChange} multiple className='form-control' placeholder='Business Brosar' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Address <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinessaddress} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessaddress: e.target.value, }) }} placeholder='Business Address' />
                                                                                                    <label htmlFor="floatingTextarea">Business Address</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business GST IN Numbar <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinessgstnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinessgstnumber: e.target.value, }) }} placeholder='Business GST IN Numbar' />
                                                                                                    <label htmlFor="floatingTextarea">Business GST IN Numbar</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business TDS Details <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinesstdsdetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinesstdsdetails: e.target.value, }) }} placeholder='Business TDS Details' />
                                                                                                    <label htmlFor="floatingTextarea">Business TDS Details</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Pan Card Number</label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinesspancardnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinesspancardnumber: e.target.value, }) }} placeholder='Business Pan Card Number' />
                                                                                                    <label htmlFor="floatingTextarea">Business Pan Card Number</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Category <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinesscategory} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinesscategory: e.target.value, }) }} placeholder='Business Category' />
                                                                                                    <label htmlFor="floatingTextarea">Business Category</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Type <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bussinesstype} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bussinesstype: e.target.value, }) }} placeholder='Business Type' />
                                                                                                    <label htmlFor="floatingTextarea">Business Type</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Collaboration Details <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                                                    <textarea className="form-control" value={tempservice.collaborationdetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, collaborationdetails: e.target.value, }) }} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />

                                                                                                    <label for="floatingTextarea2">Comments</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5 text-end me-2'>
                                                                                            <div>
                                                                                                <button className='btn bg-danger text-white' onClick={personAdd}>Add Sales Person</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                        </>
                                                                    ) : (<></>)
                                                                }


                                                                {
                                                                    selectedSelesOption ? (
                                                                        <>
                                                                            <div className='card recent-sales overflow-auto'>
                                                                                <div className='card-body'>
                                                                                    <div>
                                                                                        <h6 className='fw-bold text-blue mt-5'>Sales Person Details :</h6>
                                                                                        <hr className='me-3' />

                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Name </label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.salespersonname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonname: e.target.value, }) }} placeholder='Sales Person Name' />
                                                                                                    <label htmlFor="floatingTextarea">Sales Person Name</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Number </label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.salespersonnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonnumber: e.target.value, }) }} placeholder='Sales Person Number' />
                                                                                                    <label htmlFor="floatingTextarea">Sales Person Number</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Email ID </label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.salespersonemailid} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonemailid: e.target.value, }) }} placeholder='Sales Person Email ID' />
                                                                                                    <label htmlFor="floatingTextarea">Sales Person Email ID</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Position </label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.salespersonposition} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonposition: e.target.value, }) }} placeholder='Sales Person Position' />
                                                                                                    <label htmlFor="floatingTextarea">Sales Person Position</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5 text-end me-2'>
                                                                                            <div>
                                                                                                <button className='btn bg-danger text-white' onClick={bankAdd}>Add Bank Details</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    ) : (<></>)
                                                                }

                                                                {
                                                                    selectedBankOption ? (
                                                                        <>
                                                                            <div className='card recent-sales overflow-auto'>
                                                                                <div className='card-body'>
                                                                                    <div>
                                                                                        <h6 className='fw-bold text-blue mt-5'>Bank Details :</h6>
                                                                                        <hr className='me-3' />

                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Name <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bankname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankname: e.target.value, }) }} placeholder='Bank Name' />
                                                                                                    <label htmlFor="floatingTextarea">Bank Name</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Account Number <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bankaccountnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankaccountnumber: e.target.value, }) }} placeholder='Banck Account Number' />
                                                                                                    <label htmlFor="floatingTextarea">Banck Account Number</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank IFSC Code <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bankifsccode} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankifsccode: e.target.value, }) }} placeholder='Bank IFSC Code' />
                                                                                                    <label htmlFor="floatingTextarea">Bank IFSC Code</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Branch Name<span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' value={tempservice.bankbranchname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankbranchname: e.target.value, }) }} placeholder='Bank Branch Name' />
                                                                                                    <label htmlFor="floatingTextarea">Bank Branch Name</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5 text-end me-2'>
                                                                                            <div>
                                                                                                <button className='btn bg-danger text-white' onClick={documentAdd}>Add Document</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    ) : (<></>)
                                                                }

                                                                {
                                                                    selectedDocument ? (
                                                                        <>
                                                                            <div className='card recent-sales overflow-auto'>
                                                                                <div className='card-body'>
                                                                                    <div>
                                                                                        <h6 className='fw-bold text-blue mt-5'>Upload Document :</h6>
                                                                                        <hr className='me-3' />

                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Aadharcard Image JPEG <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3'>
                                                                                                    <input type='file' name='adharcard-image' onChange={handleFileChange} className='form-control' placeholder='Aadharcard Image JPEG' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Pancard Image JPEG <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 '>
                                                                                                    <input type='file' name='pancard-image' onChange={handleFileChange} className='form-control' placeholder='Pancard Image JPEG' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>GST File JPEG <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 '>
                                                                                                    <input type='file' name='gst-file' onChange={handleFileChange} className='form-control' placeholder='GST File JPEG' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>TDS File JPEG<span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3'>
                                                                                                    <input type='file' name='tds-file' onChange={handleFileChange} className='form-control' placeholder='TDS File JPEG' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Agreement File JPEG<span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3'>
                                                                                                    <input type='file' name='agreement-file' onChange={handleFileChange} className='form-control' placeholder='Agreement File JPEG' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* <div className='row mb-5 text-end me-2'>
                                                                                            <div>
                                                                                                <button className='btn bg-success text-white' >Submit Data</button>
                                                                                            </div>
                                                                                        </div> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    ) : (<></>)
                                                                }

                                                                <div className="row mb-5 justify-content-center">
                                                                    <div className="col-sm-4">
                                                                        <div className="input-group mb-3">
                                                                            {changed ? (
                                                                                <>
                                                                                    <button onClick={(e) => {
                                                                                        setTempservice({ ...provider });
                                                                                        setChanged(false);
                                                                                    }}
                                                                                        className="btn btn-dark">Cancel</button>
                                                                                    <button onClick={handleSubmit} className="btn btn-dark">Update</button>
                                                                                </>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null}


                        </div>
                    </section>
                </main>{/* End #main */}
                {/* ======= Footer ======= */}
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

export default Providerdetails
