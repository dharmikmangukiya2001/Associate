import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ServiceFrom = () => {

    const nevigate = useNavigate();
    const [description, setDescription] = useState('')
    const [customername, setCustomername] = useState('');
    const [customernumber, setCustomernumber] = useState('');
    const [selectedValue, setSelectedValue] = useState('');


    // Select Bussiness Category START
    const [bcategory, setBcategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bcategory`).then(function (response) {
            // handle success

            // console.log(response.data, "Show_bcategory");
            setBcategory(response.data.bcategory);
            // console.log("Bussiness Category:::", bussinesscategory);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // Select Bussiness Category END





    // SELECT OPTION FOR SHOW DIV DATA
    const [bcatid, setBcatid] = useState('')
    const [sbcatid, setSbcatid] = useState()
    const [bsubcategorys, setBsubcategorys] = useState('')

    const handleSecondSelectChange = (e) => {

        // console.log(bcatid,"dfsdfdsf");
        if (bcatid) {
            axios.post(`${process.env.REACT_APP_URL}/admin/subcatdata`, { bcatid: bcatid }).then(function (response) {
                // hendle success
                //    console.log(response.data,"subcatdata");
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
    const [productValue, setProductValue] = useState('')
    const [productService, setProductService] = useState('')

    const handleSecondSelectProduct = (e) => {

        // console.log(bcatid,"dfsdfdsf");
        if (sbcatid) {
            axios.post(`${process.env.REACT_APP_URL}/admin/productid`, sbcatid).then(function (response) {
                // hendle success
                console.log(response.data, "showproduct");
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






    const [selectedSelesOption, setSelectedSelesOption] = useState(false);
    const handleAdd = (e) => {
        e.preventDefault();
        setSelectedSelesOption(true)
    };
    const handleAdd0 = (e) => {
        e.preventDefault();
        setSelectedSelesOption(false)
        setCustomername('')
        setCustomernumber('')
    };



    const askdata = {
        productid: productValue,
        description,
        otherName: customername,
        otherNumber: customernumber,
        selectedValue

    }
    console.log(askdata);
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };


    const usertoken = localStorage.getItem('usertoken')
    // console.log(usertoken);

    const handleSubmit = (e) => {
        e.preventDefault();


        try {
            axios.post(`${process.env.REACT_APP_URL}/user/userform`, askdata, {
                headers: {
                    'usertoken': usertoken,
                }
            })
                .then((response) => {
                    console.log(response.data, "sdsdsd");
                    // console.log(data,"dsd");
                    nevigate('/member')
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

            <UserHeader />


            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h3 className="fw-bold text-start">Add Ask ?</h3>

                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-11">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit}>
                                                    {/* <img src={`${process.env.REACT_APP_URL}/${service.servicesimg}`} height={363} /> */}
                                                    <div className='row mt-5 mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Category <span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <select class="form-select" aria-label="Default select example" value={bcatid} onChange={(e) => setBcatid(e.target.value)} onClick={handleSecondSelectChange}>
                                                                <option selected> Select Category </option>
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
                                                    <div className='row mt-5 mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Subcategory <span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <select class="form-select" aria-label="Default select example" value={sbcatid} onChange={(e) => setSbcatid(Array.from(e.target.selectedOptions, option => option.value))} onClick={handleSecondSelectProduct}>
                                                                <option selected> Select Subcategory </option>
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
                                                            <select class="form-select" aria-label="Default select example" value={productValue} onChange={(e) => setProductValue(Array.from(e.target.selectedOptions, option => option.value))}>
                                                                <option selected> Select Subcategory </option>
                                                                {productService &&
                                                                    productService.map((item, i) => (
                                                                        <option value={item._id} key={i}>
                                                                            {item.product}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className='row mt-5 mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Description <span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} rows="4">

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-5 mb-5'>
                                                        <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Option <span className='text-red'>*</span></label>
                                                        <div className='col-sm-9 col-lg-10'>
                                                            <label className="me-5">
                                                                <input
                                                                    type="radio"
                                                                    value="Your Self"
                                                                    checked={selectedValue === 'Your Self'}
                                                                    onChange={handleRadioChange}
                                                                    onClick={handleAdd0}
                                                                />
                                                                &nbsp; Your Self
                                                            </label>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    value="Other Person"
                                                                    checked={selectedValue === 'Other Person'}
                                                                    onChange={handleRadioChange}
                                                                    onClick={handleAdd}
                                                                />
                                                                &nbsp; Other Person
                                                            </label>




                                                        </div>
                                                    </div>

                                                    {
                                                        selectedSelesOption ? (
                                                            <>
                                                                <div className='row mb-5'>
                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Customer Name <span className='text-red'>*</span></label>
                                                                    <div className='col-sm-9 col-lg-10'>
                                                                        <div className='me-3 form-floating'>
                                                                            <input type='text' className='form-control' value={customername} onChange={(e) => setCustomername(e.target.value)} placeholder='customer Name' />
                                                                            <label htmlFor="floatingTextarea">Customer Name</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row mb-5'>
                                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Customer Numbar <span className='text-red'>*</span></label>
                                                                    <div className='col-sm-9 col-lg-10'>
                                                                        <div className='me-3 form-floating'>
                                                                            <input type='number' className='form-control' value={customernumber} onChange={(e) => setCustomernumber(e.target.value)} placeholder='customer Numbar' />
                                                                            <label htmlFor="floatingTextarea">Customer Number</label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </>
                                                        ) : null
                                                    }

                                                    <div className='row mb-5'>

                                                        <div className='col-sm-9 col-lg-12'>
                                                            <div className='me-3 form-floating text-end'>
                                                                <button className='btn btn-danger w-25'>Submit</button>
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
export default ServiceFrom;