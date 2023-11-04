import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Memberdetails = () => {


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





    //  Show Member data
    const [user, setUser] = useState([])
    const id = useParams()
    const memberid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/userdetails/${memberid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data, "dsdsdsd");
            setUser([response.data.user]);
            setTempservice(response.data.user);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [memberid]);



    // Delete Member

    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.delete(`${process.env.REACT_APP_URL}/admin/deleteuser/${memberid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data, "dfdf");
            nevigate('/admin_allmember')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }




    // Update Member

    const [changed, setChanged] = useState(false);
    const [tempservice, setTempservice] = useState([], { productService: [] })
    const [UpdateAddOption, setUpdateAddOption] = useState(false);
    const UpdateAdd = (e) => {
        e.preventDefault();
        setUpdateAddOption(true)
    };


    useEffect(()=>{
        // console.log(tempservice,'dsdd');
    })


    const handleSubmit = (e) => {


        e.preventDefault()


        try {
            axios.patch(`${process.env.REACT_APP_URL}/admin/updateuser/${memberid}`,tempservice, {
                headers: {
                    'token': token,
                   
                    // 'Content-Type': 'multipart/form-data',
                }
            })
                .then((response) => {
                    console.log(response.data,"defsdd");
                    console.log(tempservice,"dsd");
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }

    }





    return (
        <>
{
            isLoading ? (<><Loader /></>) : (<>

            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1 className="text-start">Member Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Member</li>
                            <li className="breadcrumb-item active">Show Member</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        {/* Provider Data */}
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Member Details</h5>
                                            <div className="pe-4 col-12 text-end">
                                                <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 w-25 mb-3">Delete</button></Link>

                                                <Link><button onClick={UpdateAdd} id="updateButton" className="btn btn-primary w-25 me-1 px-5 mb-3">Update</button></Link>
                                            </div>

                                            {user.map((item, i) => (
                                                <div className='prodetails'>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member ID :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                        {
                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                return (
                                                                                    <>{key == 'ids' ? (<>
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Name :</strong></p>
                                                            </div>
                                                            <div className="col-8">
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Email :</strong></p>
                                                            </div>
                                                            <div className="col-8">
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Number :</strong></p>
                                                            </div>
                                                            <div className="col-8">
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member D.O.B. :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                        {
                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                return (
                                                                                    <>{key == 'DOB' ? (<>
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member Occupation :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                        {
                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                return (
                                                                                    <>{key == 'occupation' ? (<>
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Member address :</strong></p>
                                                            </div>
                                                            <div className="col-8">
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
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Reference Name :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                        {
                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                return (
                                                                                    <>{key == 'reference' ? (<>
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
                                                                <p><strong>Reference Number :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                        {
                                                                            Object.entries(item).map(([key, value], index) => {
                                                                                return (
                                                                                    <>{key == 'ref_no' ? (<>
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
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    {
                        UpdateAddOption ? (
                            <>
                                <div className="row">
                                        {/* Provider Data */}
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card recent-sales overflow-auto">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Member Update</h5>
                                                            <div>
                                                                <form  encType='multipart/formData'>
                                                                    <div className='card recent-sales overflow-auto'>
                                                                        <div className='card-body'>
                                                                            <div>          
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member ID <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.ids} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, ids: e.target.value, }) }} placeholder='Provider Name' />
                                                                                            <label htmlFor="floatingTextarea">Member ID</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Name <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.name} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, name: e.target.value, }) }} placeholder='Provider Name' />
                                                                                            <label htmlFor="floatingTextarea">Member Name</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Email <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='Email' className='form-control' required value={tempservice.email} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, email: e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Member Number</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Numbar <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='Email' className='form-control' required value={tempservice.number} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, number: e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Member Number</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member DOB <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='date' className='form-control' required value={tempservice.DOB} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, DOB: e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Member DOB</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Occupation <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.occupation} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, occupation : e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Member Occupation </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Address <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.address} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, address : e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Member Occupation </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Reference Name <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.reference} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, reference : e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Reference Name </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                                <div className='row mb-5'>
                                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Reference Number <span className='text-red'>*</span></label>
                                                                                    <div className='col-sm-9 col-lg-10'>
                                                                                        <div className='me-3 form-floating'>
                                                                                            <input type='text' className='form-control' required value={tempservice.ref_no} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, ref_no : e.target.value, }) }} placeholder='Provider Numbar' />
                                                                                            <label htmlFor="floatingTextarea">Reference Number </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mb-5 justify-content-center">
                                                                        <div className="col-sm-4">
                                                                            <div className="input-group mb-3">
                                                                                {changed ? (
                                                                                    <>
                                                                                        <div>
                                                                                            <button onClick={(e) => { setTempservice({ ...user }); setChanged(false); }} className="btn bg-primary-subtle">Cancel</button>
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

            </main>
            </>)}
        </>
    )

}
export default Memberdetails