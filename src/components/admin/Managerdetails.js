import React from "react";
import Header from "./Header";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Managerdetails = () => {

    // // loader
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
        }, 1000);
      });
    };




    // Show Manager details

    const [Manager, setManagers] = useState([])
    const id = useParams()
    const managerid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/manager_detail/${managerid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setManagers([response.data.manager]);
            setTempservice(response.data.manager);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [managerid]);


    // Delete Manager

    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.delete(`${process.env.REACT_APP_URL}/admin/delete_manager/${managerid}`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data, "dfdf");
            nevigate('/admin_allmanager')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }





    // Update Member

    const [changed, setChanged] = useState(false);
    const [tempservice, setTempservice] = useState([])
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
            axios.patch(`${process.env.REACT_APP_URL}/admin/update_manager/${managerid}`,tempservice, {
                headers: {
                    'token': token,
                   
                    // 'Content-Type': 'multipart/form-data',
                }
            })
                .then((response) => {
                    // console.log(response.data,"defsdd");
                    // console.log(tempservice,"dsd");
                    // window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }

    }



    return(
        <>
         {
            isLoading ? (<><Loader /></>) : (<>

        <Header/>
        <main id="main" className="main">
                <div className="pagetitle">
                    <h1 className="text-start m-0">Orders Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Notification</li>
                            <li className="breadcrumb-item active">Show Order</li>
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
                                            <h5 className="card-title">Order Details :</h5>
                                            <div className="pe-4 col-12 text-end">
                                                <Link><button onClick={deleteService} className="btn btn-danger px-5 me-2 w-25 mb-3">Delete</button></Link>

                                                <Link><button onClick={UpdateAdd} id="updateButton" className="btn btn-primary w-25 me-1 px-5 mb-3">Update</button></Link>
                                            </div>

                                            {Manager.map((item, i) => (
                                                <div className='prodetails'>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Manager Name :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.name}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Manager Numbar :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.number}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 ">
                                                            <div className="col-4">
                                                                <p><strong>Manager Email :</strong></p>
                                                            </div>
                                                            <div className="col-8">
                                                                <p>
                                                                    <span className="fs-6">
                                                                    {item.email}
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
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Name <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' required value={tempservice.name} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, name: e.target.value, }) }} placeholder='Provider Name' />
                                                                        <label htmlFor="floatingTextarea">Member Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Member Number <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='number' className='form-control' required value={tempservice.number} onChange={(e) => { setChanged(true); setTempservice({ ...tempservice, number: e.target.value, }) }} placeholder='Provider Name' />
                                                                        <label htmlFor="floatingTextarea">Member Number</label>
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
                                                             
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-5 justify-content-center">
                                                    <div className="col-sm-4">
                                                        <div className="input-group mb-3">
                                                            {changed ? (
                                                                <>
                                                                    <div>
                                                                        <button onClick={(e) => { setTempservice({ ...Manager }); setChanged(false); }} className="btn bg-primary-subtle">Cancel</button>
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
export default Managerdetails;