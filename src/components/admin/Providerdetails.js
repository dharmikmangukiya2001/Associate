import { React, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import Loader from './Loader'

function Providerdetails() {
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
            }, 6000);
        });
    };




    const [providers, setProviders] = useState([])
    const [subcatdata, setSubcatdata] = useState([])
    const [commission, setCommission] = useState([])
    const id = useParams()
    const providerid = id.id
    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdetails/${providerid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            console.log(response.data, "dsdsdsd");
            setProviders([response.data.providers]);
            setSubcatdata(response.data.subcatData);
            setTempservice(response.data.providers);
            setCommission(response.data.commission);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);


    let hasDisplayedBussinessCategory = false;


    // delete provider

    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.delete(`${process.env.REACT_APP_URL}/admin/deleteprovider/${providerid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            nevigate('/admin_showproviders')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }





    // Update provider
    const [changed, setChanged] = useState(false);
    const [tempservice, setTempservice] = useState([], { productService: [] })
    const [UpdateAddOption, setUpdateAddOption] = useState(false);
    const UpdateAdd = (e) => {
        e.preventDefault();
        setUpdateAddOption(true)
    };




    // ADD BUSINESS DIV SHOW SELECT INPUT
    const [seletedOption, setSeletedOption] = useState(false);
    const handleAdd = (e) => {
        e.preventDefault();
        setSeletedOption(true)
    };
    // ADD BUSINESS DIV END

    // ADD BUSINESS DIV SHOW SELECT INPUT
    const [associate, setAssociate] = useState(false);
    const handleBussiness = (e) => {
        e.preventDefault();
        setAssociate(true)
    };
    // ADD BUSINESS DIV END


    // SELECT OPTION FOR SHOW DIV DATA
    const [bcatid, setBcatid] = useState('')
    const [sbcatid, setSbcatid] = useState([])

    const [bsubcategorys, setBsubcategorys] = useState('')

    const handleSecondSelectChange = (e) => {

        // console.log(bcatid,"dfsdfdsf");
        if (bcatid) {
            axios.post(`${process.env.REACT_APP_URL}/admin/subcatdata`, { bcatid: bcatid }, { headers: { 'token': token } }).then(function (response) {
                // hendle success
                //    console.log(response.data);
                const sub = response.data.bsubcategorys
                setBsubcategorys(sub);

            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else {
            console.log("error");
        }

    };
    // SELECT OPTION END



    // SELECT OPTION FOR SHOW DIV DATA
    const [productValue, setProductValue] = useState([])
    const [productService, setProductService] = useState('')
    const [nextProductIdBrok, setNextProductIdBrok] = useState(1);

    const handleSecondSelectProduct = (e) => {

        // console.log(bcatid,"dfsdfdsf");
        if (sbcatid) {
            axios.post(`${process.env.REACT_APP_URL}/admin/showproduct`, sbcatid, { headers: { 'token': token } }).then(function (response) {
                // hendle success
                console.log(response.data, ":::::");
                const pro = response.data.productService
                setProductService(pro);

            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else {
            console.log("error");
        }

    };


    const handleProductInputChangeRoom = (e) => {
        setProductValue(e.target.value);
    };

    const handleProductAddAmenityBrok = () => {
        if (productValue.trim() !== '') {
            const newAmenity = {
                id: nextProductIdBrok,
                name: productValue.trim()
            }
            setNextProductIdBrok(nextProductIdBrok + 1);
            setProductService([...productService, newAmenity]);
            setProductValue('');
        }
    }




    const handleProductRemoveBrok = (nameToRemove) => {
        const updatedAmenities = productService.filter(
            (amenity) => amenity !== nameToRemove
        );
        setProductService(updatedAmenities);
    }
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



    // image and document parh all start
    const [pfiles, setPfiles] = useState([]);

    const handleProfile = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setPfiles(selectedFiles);

    };

    const [adharfiles, setAdharfiles] = useState([]);

    const handleAdhar = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setAdharfiles(selectedFiles);

    };
    const [pancardfiles, setPancardfiles] = useState([]);

    const handlePancard = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setPancardfiles(selectedFiles);

    };
    const [gstfiles, setGstfiles] = useState([]);

    const handleGst = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setGstfiles(selectedFiles);

    };
    const [tdsfiles, setTdsfiles] = useState([]);

    const handleTds = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setTdsfiles(selectedFiles);

    };
    const [agreementfiles, setAgreementfiles] = useState([]);

    const handleAgreement = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setAgreementfiles(selectedFiles);

    };
    const [bfiles, setBfiles] = useState([]);

    const handlebrochure = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setBfiles(selectedFiles);

    };


    const [selectedBrok, setSelectedBrok] = useState('');
    const [inputValueBrok, setInputValueBrok] = useState('');
    const [nextIdBrok, setNextIdBrok] = useState(1);


    const handleInputChangeRoom = (e) => {
        setInputValueBrok(e.target.value);
    };

    const handleAddAmenityBrok = () => {
        if (inputValueBrok.trim() !== '') {
            const newAmenity = {
                id: nextIdBrok,
                name: inputValueBrok.trim()
            }
            setNextIdBrok(nextIdBrok + 1);
            setSelectedBrok([...selectedBrok, newAmenity]);


            setInputValueBrok('');
        }
    }

    const hendleAmenityRemoveBrok = (idToRemove) => {
        const updatedAmenities = selectedBrok.filter(
            (amenity) => amenity.id !== idToRemove
        );
        setSelectedBrok(updatedAmenities);
    }

    // const [tempservice, setTempservice] = useState({ productService: [] });

    // Create a separate state to hold the merged data
    const [mergedData, setMergedData] = useState([]);

    useEffect(() => {
        let merged = [];

        if (Array.isArray(selectedBrok)) {
            merged = selectedBrok.map(item => item.name);
        }

        // Update the merged data in the state
        setMergedData(merged.concat(productService));
    }, [selectedBrok, productService]);

    // Now, you can update the tempservice state using mergedData
    useEffect(() => {
        setTempservice({ ...tempservice, productService: mergedData });
    }, [mergedData]);



    const handleSubmit = (e) => {


        e.preventDefault()


        const formData = new FormData();


        for (const file of pfiles) {
            formData.append("profile", file);
        }
        for (const file of bfiles) {
            formData.append("b_brochure", file);
        }
        for (const file of adharfiles) {
            formData.append("adharcard", file);
        }
        for (const file of pancardfiles) {
            formData.append("pancard", file);
        }
        for (const file of gstfiles) {
            formData.append("gstfile", file);
        }
        for (const file of tdsfiles) {
            formData.append("tdsfile", file);
        }
        for (const file of agreementfiles) {
            formData.append("agreementfile", file);
        }

        for (const [key, value] of Object.entries(tempservice)) {
            // console.log(`${key}: ${value}`);
            formData.append(key, value);
        }

        formData.append("sbcatid", sbcatid);
        formData.append("product_service", productValue);


        try {
            axios.patch(`${process.env.REACT_APP_URL}/admin/updateprovider/${providerid}`, formData, {
                headers: {
                    'token': token,
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((response) => {
                    // console.log(response.data);
                    // console.log(data,"dsd");
                    nevigate('/admin_showproviders')
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }

    }






    // Select Bussiness Category START
    const [bcategory, setBcategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bcategory`, { headers: { 'token': token } }).then(function (response) {
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
    // Select Bussiness Category END



    // Select Bussiness Types START
    const [bussinessType, setBussinessType] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_btype`, { headers: { 'token': token } }).then(function (response) {
            // handle success

            // console.log(response.data, "ddd");
            setBussinessType(response.data.bussinessType);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    // Select Bussiness Types END



    // Select Bussiness Formation START
    const [bussinessFormation, setBussinessFormation] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bformation`, { headers: { 'token': token } }).then(function (response) {
            // handle success

            // console.log(response.data, "ddd");
            setBussinessFormation(response.data.bussinessFormation);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    // Select Bussiness Types END


    return (
        <>
            {
                isLoading ? (<><Loader /></>) : (<>
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
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card recent-sales overflow-auto">
                                                <div className="card-body">
                                                    <h5 className="card-title">Pay To Company Commission </h5>
                                                    <div className='prodetails'>
                                                        <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                            <div className="ms-3 d-flex col-12 ">
                                                                <div className="col-4">
                                                                    <strong className="fs-4">Provider Commission</strong>
                                                                </div>
                                                                <div className="col-8">
                                                                        <span className="fs-6">
                                                                            <div className="pe-4 col-12 text-end">
                                                                                <p className="fs-4 fw-bold">₹ {commission}</p>
                                                                            </div>
                                                                        </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                            <section className="section dashboard">
                                <div className="row">
                                    {/* Provider Data */}
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card recent-sales overflow-auto">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Provider Details</h5>
                                                        {/* <div className="ms-3 d-flex col-12 mt-5 mb-2"> */}
                                                        <div className="pe-4 col-12 text-end">
                                                            <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 w-25 mb-3">Delete</button></Link>

                                                            <Link><button id="updateButton" onClick={UpdateAdd} className="btn btn-primary w-25 me-1 px-5 mb-3">Update</button></Link>
                                                        </div>

                                                        {/* </div> */}
                                                        <div className='prodetails'>
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
                                                                {providers.map((item, i) => (
                                                                    <>

                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'profile' ? (<>
                                                                                                        <img className=" rounded-circle border border-5 w-25" src={value}></img>
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
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
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'name' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Provider Numbar &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'number' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Provider Email &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'email' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Provider B.O.D. &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'BOD' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Provider Address &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'address' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Type &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Btype' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Formation &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bformation' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Category &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">

                                                                                        {
                                                                                            subcatdata.map((item, i) => (
                                                                                                <>

                                                                                                    {/* {item.bussinesssubcategory} */}
                                                                                                    {

                                                                                                        subcatdata.map((item, i) => (
                                                                                                            <>
                                                                                                                {Object.entries(item).map(([key, value], index) => {
                                                                                                                    if (key === 'bcategoryid') {
                                                                                                                        return (
                                                                                                                            <div key={index}>
                                                                                                                                {Object.entries(value).map(([subKey, subValue], subIndex) => {
                                                                                                                                    if (subKey === 'bussinesscategory' && !hasDisplayedBussinessCategory) {
                                                                                                                                        hasDisplayedBussinessCategory = true; // Set the flag to true
                                                                                                                                        return <>{subValue}</>;
                                                                                                                                    } else {
                                                                                                                                        return null; // Skip other entries
                                                                                                                                    }
                                                                                                                                })}
                                                                                                                            </div>
                                                                                                                        );
                                                                                                                    }
                                                                                                                    return null; // Handle other keys, if needed
                                                                                                                })}
                                                                                                            </>
                                                                                                        ))
                                                                                                    }
                                                                                                </>
                                                                                            ))
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Subcategory &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            subcatdata.map((item, i) => (
                                                                                                <>

                                                                                                    <div key={i}>{
                                                                                                        item.bussinesssubcategory

                                                                                                    }</div>

                                                                                                </>
                                                                                            ))
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Website Url &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                    {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'socialmedia1' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Facebook Url &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                    {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'socialmedia2' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Instagram Url &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                    {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'socialmedia3' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Youtube Url &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                    {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'socialmedia4' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Name &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bname' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Number &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bnumber' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Email ID &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bemail' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Details &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bdetails' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Address &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Baddress' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness GSTIN &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'B_GSTnumber' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness TDS Details &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Btdsdetails' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bussiness Pancard Number &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'Bpancardnumber' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Product and Service &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>
                                                                                                        {key === 'product_service' ? (
                                                                                                            <div className="d-flex flex-wrap" key={index}>
                                                                                                                {Array.isArray(value) ? (
                                                                                                                    value.map((item, index1) => (
                                                                                                                        <button className='btn m-1 bg-primary-subtle p-2 rounded-md m-1' style={{ width: 'fit-content' }} key={index1}>{item}</button>
                                                                                                                    ))
                                                                                                                ) : null}
                                                                                                            </div>
                                                                                                        ) : null}
                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }

                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Collaboration Company &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'collaboration' ? (<>
                                                                                                        {value} %
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Collaboration Member &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'collaborationMember' ? (<>
                                                                                                        {value} %
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Company Profit &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'collaborationCompany' ? (<>
                                                                                                        {value} %
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Sales Person Name &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'salespersonName' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Sales Person Number &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'salespersonNumber' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Sales Person Email ID &nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'salespersonEmail' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Sales Person Position&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'salespersonPosition' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bank Name&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'bankName' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bank Account Number&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'bankAccountnumber' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bank IFSC Code&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'bankIFSCcode' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>Bank Branch Name&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'bankBranchname' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">
                                                                            <div className="col-4">
                                                                                <p className="fs-6">
                                                                                    <strong>UIP ID&nbsp;&nbsp;: </strong>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'upiid' ? (<>
                                                                                                        {value}
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Provider Document */}
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card recent-sales overflow-auto">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Document</h5>
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
                                                                {providers.map((item, i) => (
                                                                    <>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'adharcard' ? (<>
                                                                                                        <img className="w-100" src={value}></img>
                                                                                                        Addharcard
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'pancard' ? (<>
                                                                                                        <img className="w-100" src={value}></img>
                                                                                                        Pancard
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'b_brochure' ? (<>
                                                                                                        <iframe frameborder="0" style={{ height: '185px', overflow: 'scroll', width: '100%' }} src={value} marginheight="1" marginwidth="1" name="cboxmain" id="cboxmain" seamless="seamless" allowtransparency="true"></iframe>
                                                                                                        {/* <img className="w-100" src={value}></img> */}
                                                                                                        Bussiness Brochure
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'agreementfile' ? (<>
                                                                                                        <img className="w-100" src={value}></img>
                                                                                                        Agreement
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'gstfile' ? (<>
                                                                                                        <img className="w-100" src={value}></img>
                                                                                                        GSTIN File
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 d-flex col-12">

                                                                            <div className="col-8 pe-3">
                                                                                <p>
                                                                                    <span className="fs-6">
                                                                                        {
                                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                                return (
                                                                                                    <>{key == 'tdsfile' ? (<>
                                                                                                        <img className="w-100" src={value}></img>
                                                                                                        TDS File
                                                                                                    </>) : null}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                {
                                    UpdateAddOption ? (
                                        <>



                                            <div className="row">
                                                {/* Provider Data */}
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="card recent-sales overflow-auto">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Provider Details</h5>
                                                                    <div>
                                                                        <form onSubmit={handleSubmit} encType='multipart/formData'>
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
                                                                                                    <input type='file' required
                                                                                                        name="provide-profile"
                                                                                                        onChange={handleProfile}
                                                                                                        className='form-control' placeholder='Provider Name' />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Name <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' className='form-control' required value={tempservice.name} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, name: e.target.value, }) }} placeholder='Provider Name' />
                                                                                                    <label htmlFor="floatingTextarea">Provider Name</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Numbar <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='number' className='form-control' required value={tempservice.number} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, number: e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                                    <label htmlFor="floatingTextarea">Provider Number</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Email ID <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='email' required className='form-control' value={tempservice.email} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, email: e.target.value, }) }} placeholder='Provider Email ID' />
                                                                                                    <label htmlFor="floatingTextarea">Provider Email ID</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider B.O.D. <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='date' required className='form-control' value={tempservice.BOD} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, BOD: e.target.value, }) }} placeholder='Provider B.O.D' />
                                                                                                    <label htmlFor="floatingTextarea">Provider B.O.D.</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5'>
                                                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Address <span className='text-red'>*</span></label>
                                                                                            <div className='col-sm-9 col-lg-10'>
                                                                                                <div className='me-3 form-floating'>
                                                                                                    <input type='text' required className='form-control' value={tempservice.address} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, address: e.target.value, }) }} placeholder='Provider Address' />
                                                                                                    <label htmlFor="floatingTextarea">Provider Address</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row mb-5 text-end me-2'>
                                                                                            <div className='w-25'>
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
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Type <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            required
                                                                                                            aria-label="Default select example"
                                                                                                            value={tempservice.Btype}
                                                                                                            onChange={(e) => {
                                                                                                                setChanged(true);
                                                                                                                setTempservice({
                                                                                                                    ...tempservice,
                                                                                                                    Btype: e.target.value,
                                                                                                                });
                                                                                                            }}
                                                                                                        >
                                                                                                            <option selected>---- Select Business Type ----</option>
                                                                                                            {bussinessType &&
                                                                                                                bussinessType.map((item, i) => (
                                                                                                                    <option value={item.btype}>{item.btype}</option>
                                                                                                                ))}
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='row mt-5 mb-5'>
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Formation <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            required
                                                                                                            aria-label="Default select example"
                                                                                                            value={tempservice.Bformation}
                                                                                                            onChange={(e) => {
                                                                                                                setChanged(true);
                                                                                                                setTempservice({
                                                                                                                    ...tempservice,
                                                                                                                    Bformation: e.target.value,
                                                                                                                });
                                                                                                            }}
                                                                                                        >
                                                                                                            <option selected>---- Select Business Formation ----</option>
                                                                                                            {bussinessFormation &&
                                                                                                                bussinessFormation.map((item, i) => (
                                                                                                                    <option value={item.bussinessformation}>{item.bussinessformation}</option>
                                                                                                                ))}
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='row mt-5 mb-5'>
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Category <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            required
                                                                                                            aria-label="Default select example"
                                                                                                            value={bcatid}
                                                                                                            onChange={(e) => setBcatid(e.target.value)}
                                                                                                            onClick={handleSecondSelectChange}
                                                                                                        >
                                                                                                            <option selected>---- Select Category ----</option>
                                                                                                            {bcategory &&
                                                                                                                bcategory.map((item, i) => (
                                                                                                                    <option value={item._id}>{item.bussinesscategory}</option>
                                                                                                                ))}
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='row mt-5 mb-5'>
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Subcategory <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <select class="form-select" required aria-label="Default select example" multiple value={sbcatid} onChange={(e) => setSbcatid(Array.from(e.target.selectedOptions, option => option.value))} onClick={handleSecondSelectProduct}>
                                                                                                            {/* <option selected>---- Select Subcategory ----</option> */}
                                                                                                            {bsubcategorys &&
                                                                                                                bsubcategorys.map((item, i) => (
                                                                                                                    <option value={item._id} key={i}>
                                                                                                                        {item.bussinesssubcategory}
                                                                                                                    </option>
                                                                                                                ))}
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='row mt-5 mb-5'>
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Product and Service <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <div className="tags-input-container d-flex">
                                                                                                            <input
                                                                                                                hidden
                                                                                                                type="text"
                                                                                                                className="form-control w-75"
                                                                                                                placeholder="Type something and press Add button to add"
                                                                                                                value={productValue}
                                                                                                                onChange={(e) => handleProductInputChangeRoom(e)}
                                                                                                            />
                                                                                                            <div type="button" hidden onClick={handleProductAddAmenityBrok} className="text-center fs-4 add-btn btn-primary w-25">
                                                                                                                Add
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="d-flex flex-wrap">
                                                                                                            {productService &&
                                                                                                                productService.map((item, i) => (
                                                                                                                    <div className="tag-item mx-1 mt-2 btn btn-warning" key={i}>
                                                                                                                        <span className="text fs-5">{item}</span>
                                                                                                                        <span onClick={() => handleProductRemoveBrok(item)} className="close fs-4">
                                                                                                                            &nbsp; &times;
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                ))
                                                                                                            }
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='row mb-5 mt-5'>
                                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'> Add Product / Service <span className='text-red'>*</span></label>
                                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                                        <div className='me-3 form-floating'>
                                                                                                            <div className='tags-input-container d-flex'>
                                                                                                                <input
                                                                                                                    type='text'
                                                                                                                    className='form-control w-75'
                                                                                                                    placeholder='Type something and press Add buttton to add'
                                                                                                                    value={tempservice.inputValueBrok}
                                                                                                                    onChange={(e) => handleInputChangeRoom(e)}
                                                                                                                />
                                                                                                                <div type='buttom' onClick={handleAddAmenityBrok} className='rounded text-center fs-4 add-btn btn-primary w-25'>
                                                                                                                    Add
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className='d-flex flex-wrap' >
                                                                                                                {
                                                                                                                    selectedBrok && selectedBrok.map((item) => (
                                                                                                                        <div className='tag-item mx-1 btn btn-warning mt-2' key={item.id}>
                                                                                                                            <span className='text fs-5'> {item.name}</span>
                                                                                                                            <span onClick={() => hendleAmenityRemoveBrok(item.id)} className='close fs-4'>
                                                                                                                                &nbsp; &times;
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    ))
                                                                                                                }
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='mt-5 w-25'>
                                                                                                    <button className='btn bg-danger text-white' onClick={handleBussiness}>Add Business Details</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </>
                                                                                ) : (<></>)
                                                                            }

                                                                            {
                                                                                associate ? (
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
                                                                                                                <input type='text' required className='form-control' value={tempservice.Bname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Bname: e.target.value, }) }} placeholder='Business Name' />
                                                                                                                <label htmlFor="floatingTextarea">Business Name</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Numbar <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='number' required className='form-control' value={tempservice.Bnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Bnumber: e.target.value, }) }} placeholder='Business Numbar' />
                                                                                                                <label htmlFor="floatingTextarea">Business Number</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Email ID <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='email' required className='form-control' value={tempservice.Bemail} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Bemail: e.target.value, }) }} placeholder='Business Email ID' />
                                                                                                                <label htmlFor="floatingTextarea">Business Email ID</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3  col-lg-2 col-form-lable fw-bold'>Business Website Url  <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.socialmedia1}  onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, socialmedia1: e.target.value, }) }} placeholder='Business Website Url' />
                                                                                                                <label htmlFor="floatingTextarea">Business Website Url</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Facebook Url <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.socialmedia2}  onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, socialmedia2: e.target.value, }) }} placeholder='Business Facebook Url' />
                                                                                                                <label htmlFor="floatingTextarea">Business Facebook Url</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Instagram Url <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.socialmedia3}  onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, socialmedia3: e.target.value, }) }} placeholder='Business Instagram Url' />
                                                                                                                <label htmlFor="floatingTextarea">Business Instagram Url</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Youtube Url <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.socialmedia4}  onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, socialmedia4: e.target.value, }) }} placeholder='Business Youtube Url' />
                                                                                                                <label htmlFor="floatingTextarea">Business Youtube Url</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Details <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' required className='form-control' value={tempservice.Bdetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Bdetails: e.target.value, }) }} placeholder='Business Details' />
                                                                                                                <label htmlFor="floatingTextarea">Business Details</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Brochure <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3'>
                                                                                                                <input type='file' name='bussiness-brosar' onChange={handlebrochure} multiple className='form-control' placeholder='Business Brosar' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Address <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' required className='form-control' value={tempservice.Baddress} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Baddress: e.target.value, }) }} placeholder='Business Address' />
                                                                                                                <label htmlFor="floatingTextarea">Business Address</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business GST IN Numbar <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.B_GSTnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, B_GSTnumber: e.target.value, }) }} placeholder='Business GST IN Numbar' />
                                                                                                                <label htmlFor="floatingTextarea">Business GST IN Numbar</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business TDS Details <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.Btdsdetails} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Btdsdetails: e.target.value, }) }} placeholder='Business TDS Details' />
                                                                                                                <label htmlFor="floatingTextarea">Business TDS Details</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Pan Card Number</label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.Bpancardnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, Bpancardnumber: e.target.value, }) }} placeholder='Business Pan Card Number' />
                                                                                                                <label htmlFor="floatingTextarea">Business Pan Card Number</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Category <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinesscategory} onChange={(e) => setBussinesscategory(e.target.value)} placeholder='Business Category' />
                                                                        <label htmlFor="floatingTextarea">Business Category</label>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                                                                    {/* <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Type <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinesstype} onChange={(e) => setBussinesstype(e.target.value)} placeholder='Business Type' />
                                                                        <label htmlFor="floatingTextarea">Business Type</label>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Collaboration Company<span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                                                                <input className="form-control" value={tempservice.collaboration} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, collaboration: e.target.value, }) }} placeholder="Leave a comment here" />

                                                                                                                <label for="floatingTextarea2">Comments</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Company Profit <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                                                                <input className="form-control" value={tempservice.collaborationCompany} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, collaborationCompany: e.target.value, }) }} placeholder="Leave a comment here" />

                                                                                                                <label for="floatingTextarea2">Comments</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Collaboration Member <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                                                                <textarea className="form-control" value={tempservice.collaborationMember} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, collaborationMember: e.target.value, }) }} placeholder="Leave a comment here" />

                                                                                                                <label for="floatingTextarea2">Comments</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className='row mb-5 text-end me-2'>
                                                                                                        <div className='w-25'>
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
                                                                                                                <input type='text' className='form-control' value={tempservice.salespersonName} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonName: e.target.value, }) }} placeholder='Sales Person Name' />
                                                                                                                <label htmlFor="floatingTextarea">Sales Person Name</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Number </label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='number' className='form-control' value={tempservice.salespersonNumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonNumber: e.target.value, }) }} placeholder='Sales Person Number' />
                                                                                                                <label htmlFor="floatingTextarea">Sales Person Number</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Email ID </label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='email' className='form-control' value={tempservice.salespersonEmail} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonEmail: e.target.value, }) }} placeholder='Sales Person Email ID' />
                                                                                                                <label htmlFor="floatingTextarea">Sales Person Email ID</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Position </label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' className='form-control' value={tempservice.salespersonPosition} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, salespersonPosition: e.target.value, }) }} placeholder='Sales Person Position' />
                                                                                                                <label htmlFor="floatingTextarea">Sales Person Position</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5 text-end me-2'>
                                                                                                        <div className='w-25'>
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
                                                                                                                <input type='text' required className='form-control' value={tempservice.bankName} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankName: e.target.value, }) }} placeholder='Bank Name' />
                                                                                                                <label htmlFor="floatingTextarea">Bank Name</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Account Number <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='number' required className='form-control' value={tempservice.bankAccountnumber} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankAccountnumber: e.target.value, }) }} placeholder='Banck Account Number' />
                                                                                                                <label htmlFor="floatingTextarea">Banck Account Number</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank IFSC Code <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' required className='form-control' value={tempservice.bankIFSCcode} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankIFSCcode: e.target.value, }) }} placeholder='Bank IFSC Code' />
                                                                                                                <label htmlFor="floatingTextarea">Bank IFSC Code</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Branch Name <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' required className='form-control' value={tempservice.bankBranchname} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, bankBranchname: e.target.value, }) }} placeholder='Bank Branch Name' />
                                                                                                                <label htmlFor="floatingTextarea">Bank Branch Name</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>UPI ID <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 form-floating'>
                                                                                                                <input type='text' required className='form-control' value={tempservice.upiid} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, upiid: e.target.value, }) }} placeholder='Bank Branch Name' />
                                                                                                                <label htmlFor="floatingTextarea">UPI ID</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5 text-end me-2'>
                                                                                                        <div className='w-25'>
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
                                                                                                                <input type='file' name='adharcard-image' onChange={handleAdhar} className='form-control' placeholder='Aadharcard Image JPEG' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Pancard Image JPEG <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 '>
                                                                                                                <input type='file' name='pancard-image' onChange={handlePancard} className='form-control' placeholder='Pancard Image JPEG' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>GST File JPEG <span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3 '>
                                                                                                                <input type='file' name='gst-file' onChange={handleGst} className='form-control' placeholder='GST File JPEG' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>TDS File JPEG<span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3'>
                                                                                                                <input type='file' name='tds-file' onChange={handleTds} className='form-control' placeholder='TDS File JPEG' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='row mb-5'>
                                                                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Agreement File JPEG<span className='text-red'>*</span></label>
                                                                                                        <div className='col-sm-9 col-lg-10'>
                                                                                                            <div className='me-3'>
                                                                                                                <input type='file' name='agreement-file' onChange={handleAgreement} className='form-control' placeholder='Agreement File JPEG' />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    {/* <div className='row mb-5 text-end me-2'>
                                                                                                    <div className='w-25'>
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
                                                                                                <div>
                                                                                                    <button onClick={(e) => { setTempservice({ ...providers }); setChanged(false); }} className="btn bg-primary-subtle">Cancel</button>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <button onClick={handleSubmit} className="btn bg-primary-subtle">Update</button>
                                                                                                </div>
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
                                                </div>
                                            </div>
                                        </>
                                    ) : (<></>)
                                }
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
                </>)
            }




        </>
    )
}

export default Providerdetails
