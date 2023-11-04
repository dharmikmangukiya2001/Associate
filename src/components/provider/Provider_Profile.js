import { React, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Provider_Header from './Provider_Header'

function Provider_Profile() {
    const [providers, setProviders] = useState([])
    const [subcatdata, setSubcatdata] = useState([])
    const providertoken = localStorage.getItem("providertoken");


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/provider/profile`, { headers: { 'providertoken': providertoken } }).then(function (response) {
            // handle success
            // console.log(response.data, "dsdsdsd");
            setProviders([response.data.profile]);
            setSubcatdata(response.data.subcatData);
            // setTempservice(response.data.providers);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    let hasDisplayedBussinessCategory = false;
   


    return (
        <>
            <Provider_Header />
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
                            {/* Provider Data */}
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Provider Details</h5>
                                                {/* <div className="ms-3 d-flex col-12 mt-5 mb-2"> */}
                                                <div className="pe-4 col-12 text-end">
                                                    {/* <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 w-25 mb-3">Delete</button></Link> */}

                                                    {/* <Link><button id="updateButton" onClick={UpdateAdd} className="btn btn-primary w-25 me-1 px-5 mb-3">Update</button></Link> */}
                                                </div>

                                                {/* </div> */}
                                                <div className='prodetails'>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 pb-5">
                                                            <div className="col-4">

                                                            </div>
                                                            <div className="col-8">


                                                                

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
                                                                                        if (key === 'Bsocialmedia' && Array.isArray(value) && value.length > 0) {
                                                                                            return (
                                                                                                <div key={index}>
                                                                                                    {value[0]}
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                        return null; // Handle other keys, if needed
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
                                                                                        if (key === 'Bsocialmedia' && Array.isArray(value) && value.length > 0) {
                                                                                            return (
                                                                                                <div key={index}>
                                                                                                    {value[1]}
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                        return null; // Handle other keys, if needed
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
                                                                                        if (key === 'Bsocialmedia' && Array.isArray(value) && value.length > 0) {
                                                                                            return (
                                                                                                <div key={index}>
                                                                                                    {value[2]}
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                        return null; // Handle other keys, if needed
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
                                                                                        if (key === 'Bsocialmedia' && Array.isArray(value) && value.length > 0) {
                                                                                            return (
                                                                                                <div key={index}>
                                                                                                    {value[3]}
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                        return null; // Handle other keys, if needed
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
                                                                            <strong>Collaboration Details &nbsp;&nbsp;: </strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-8 pe-3">
                                                                        <p>
                                                                            <span className="fs-6">
                                                                                {
                                                                                    Object.entries(item).map(([key, value], index) => {
                                                                                        return (
                                                                                            <>{key == 'collaborationDetails' ? (<>
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

export default Provider_Profile
