import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import axios from 'axios';


const Addprovider = () => {

    const [providername, setProvidername] = useState('');
    const [providernumber, setProvidernumber] = useState('');
    const [provideremailid, setProvideremailid] = useState('');
    const [providerbod, setProviderbod] = useState('');
    const [provideraddress, setProvideraddress] = useState('');
    // Bussiness Details
    const [bussinessname, setBussinessname] = useState('');
    const [bussinessnumber, setBussinessnumber] = useState('');
    const [bussinessemailid, setBussinessemailid] = useState('');
    const [bussinessdetails, setBussinessdetails] = useState('');
    const [bussinesswebsiteurl, setBussinesswebsiteurl] = useState('');
    const [bussinessfacebookurl, setBussinessfacebookurl] = useState('');
    const [bussinessinstagramurl, setBussinessinstagramurl] = useState('');
    const [bussinessyoutubeurl, setBussinessyoutubeurl] = useState('');
    const [bussinessgstnumber, setBussinessgstnumber] = useState('');
    const [bussinesstype, setBussinesstype] = useState('');
    const [bussinessformation, setBussinessformation] = useState('');
    const [bussinesstdsdetails, setBussinesstdsdetails] = useState('');
    const [bussinesspancardnumber, setBussinesspancardnumber] = useState('');
    // const [sbcatid, setSbcatid] = useState('');
    const [bussinessaddress, setBussinessaddress] = useState('');
    const [collaborationdetails, setCollaborationdetails] = useState('');
    // Sales Details
    const [salespersonname, setSalespersonname] = useState('');
    const [salespersonnumber, setSalespersonnumber] = useState('');
    const [salespersonemailid, setSalespersonemailid] = useState('');
    const [salespersonposition, setSalespersonposition] = useState('');
    // Bank Details
    const [bankname, setBankname] = useState('');
    const [bankaccountnumber, setBankaccountnumber] = useState('');
    const [bankifsccode, setBankifsccode] = useState('');
    const [bankbranchname, setBankbranchname] = useState('');
    // Files
    const [img, setImg] = useState([]);

    // Main object

    // Token
    const token = localStorage.getItem('token');


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
    const [sbcatid, setSbcatid] = useState('')
    const [bsubcategorys,setBsubcategorys] = useState('')

    const handleSecondSelectChange = (e) => {
        
        // console.log(bcatid,"dfsdfdsf");
        if(bcatid){
            axios.post(`${process.env.REACT_APP_URL}/admin/subcatdata`,{bcatid:bcatid} ).then(function (response) {
                // hendle success
            //    console.log(response.data);
               const sub=response.data.bsubcategorys
               setBsubcategorys(sub);
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        else{
            console.log("category id not found");
        }
        
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

    const data = {
        providername,
        providernumber,
        provideremailid,
        providerbod,
        provideraddress,
        bussinessname,
        bussinessnumber,
        bussinessemailid,
        bussinessdetails,
        bussinesswebsiteurl,
        bussinessfacebookurl,
        bussinessinstagramurl,
        bussinessyoutubeurl,
        bussinessgstnumber,
        bussinesstype,
        bussinessformation,
        bussinesstdsdetails,
        bussinesspancardnumber,
        sbcatid,
        bussinessaddress,
        collaborationdetails,
        salespersonname,
        salespersonnumber,
        salespersonemailid,
        salespersonposition,
        bankname,
        bankaccountnumber,
        bankifsccode,
        bankbranchname,
    }
    



    const handleSubmit = (e) => {


        e.preventDefault()
        const provider = {
            providerdata: data
        }
        if (img.length === 0) {
            console.log("Please select at least one file");
            return;
        }
        const formData = new FormData();
        
        for (const file of img) {
            // console.log(file,":::dfsfs::::");
            formData.append("documents", file);
        }


        formData.append("name", data.providername);//
        formData.append("numbar", data.providernumber);
        formData.append("email", data.provideremailid);//
        formData.append("BOD", data.providerbod);//
        formData.append("address", data.provideraddress);//
        formData.append("Bname", data.bussinessname);//
        formData.append("Bnumber", data.bussinessnumber);//
        formData.append("Bemail", data.bussinessemailid);//
        formData.append("Bdetails", data.bussinessdetails);//
        formData.append("B_GSTnumbar", data.bussinessgstnumber);
        formData.append("Bsocialmedia", data.bussinesswebsiteurl);//
        formData.append("Bsocialmedia", data.bussinessfacebookurl);//
        formData.append("Bsocialmedia", data.bussinessinstagramurl);//
        formData.append("Bsocialmedia", data.bussinessyoutubeurl);//
        formData.append("Btype", data.bussinesstype);
        formData.append("Bformation", data.bussinessformation);
        formData.append("Btdsdetails", data.bussinesstdsdetails);
        formData.append("Bpancardnumbar", data.bussinesspancardnumber);
        formData.append("bsubcategoryid", data.sbcatid);
        formData.append("Baddress", data.bussinessaddress);
        formData.append("collaborationDetails", data.collaborationdetails);
        formData.append("salespersonName", data.salespersonname);
        formData.append("salespersonNumber", data.salespersonnumber);
        formData.append("salespersonEmail", data.salespersonemailid);
        formData.append("salespersonPosition", data.salespersonposition);
        formData.append("bankName", data.bankname);
        formData.append("bankAccountnumber", data.bankaccountnumber);
        formData.append("bankIFSCcode", data.bankifsccode);
        formData.append("bankbranchName", data.bankbranchname);

        try {
            axios.post(`${process.env.REACT_APP_URL}/admin/addprovider`, formData, {
                headers: {
                    'token': token,
                    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
                }
            })
            .then((response) => {
                console.log(response.data);
                console.log(data,"dsd");
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            console.error(error);
        }

    }
    // const handleFileChange = (event) => {
    //     const selectedFiles = Array.from(event.target.files);
    //     setFiles(selectedFiles);

    // };
    
    const handleFileChange = (event) => {
        console.log('event', event)
        const selectedFiles = event.target.files;
        const myNewFile = new File([selectedFiles], 'new_name.png', {type: event.target.files[0].type});
        setImg((prevFiles) => {
            
            console.log('check:::',[...prevFiles, ...Array.from(selectedFiles)]);
            return [...prevFiles, ...Array.from(selectedFiles)]
        });
    };

    // const handleFileChange = (event) => {
    //     const file_obj = {
    //         [event.target.name]: Array.from(event.target.files)[0]
    //     };
    //     console.log('event 1', file_obj);
    //     setImg((prevFiles) => ({...prevFiles, ...file_obj}));
    //     console.log('event 2', img);
    // };

    // const handleFileChange = (event) => {
    //     const file_obj = {
    //         [event.target.name]: event.target.files[0]
    //     };
    //     setImg([...img, file_obj]);
    //     setImg([...img, event.target.files[0]]);
    // };
    


    // Select Bussiness Category START
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
    // Select Bussiness Category END



    // Select Bussiness Types START
    const [bussinessType, setBussinessType] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/show_btype`).then(function (response) {
            // handle success

            console.log(response.data, "ddd");
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
        axios.get(`${process.env.REACT_APP_URL}/admin/show_bformation`).then(function (response) {
            // handle success

            console.log(response.data, "ddd");
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
        <Header/>
            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start'>Add Providers</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Providers</li>
                            </ol>
                        </nav>
                    </div>
                    <section className='section dashboard'>
                        <div className='row'>
                            <div className='col-12'>
                                {/* <div className='card recent-sales overflow-auto'>
                                    <div className='card-body'> */}

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
                                                            <input type='text' className='form-control' value={providername} onChange={(e) => setProvidername(e.target.value)} placeholder='Provider Name' />
                                                            <label htmlFor="floatingTextarea">Provider Name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Numbar <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='number' className='form-control' value={providernumber} onChange={(e) => setProvidernumber(e.target.value)} placeholder='Provider Numbar' />
                                                            <label htmlFor="floatingTextarea">Provider Number</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Email ID <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' value={provideremailid} onChange={(e) => setProvideremailid(e.target.value)} placeholder='Provider Email ID' />
                                                            <label htmlFor="floatingTextarea">Provider Email ID</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider B.O.D. <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='date' className='form-control' value={providerbod} onChange={(e) => setProviderbod(e.target.value)} placeholder='Provider B.O.D' />
                                                            <label htmlFor="floatingTextarea">Provider B.O.D.</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Address <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' value={provideraddress} onChange={(e) => setProvideraddress(e.target.value)} placeholder='Provider Address' />
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
                                                                <select class="form-select" aria-label="Default select example" value={bussinesstype} onChange={(e) => setBussinesstype(e.target.value)}>
                                                                    <option selected>---- Select Business Type ----</option>
                                                                   
                                                                {
                                                                    bussinessType && bussinessType.map((item, i) => {
                                                                        return (
                                                                            <>

                                                                                    <option value={item.btype}>{item.btype}</option>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                </select>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className='row mt-5 mb-5'>
                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Formation <span className='text-red'>*</span></label>
                                                            <div className='col-sm-9 col-lg-10'>
                                                                <select class="form-select" aria-label="Default select example" value={bussinessformation} onChange={(e) => setBussinessformation(e.target.value)}>
                                                                    <option selected>---- Select Business Formation ----</option>
                                                                   
                                                                {
                                                                    bussinessFormation && bussinessFormation.map((item, i) => {
                                                                        return (
                                                                            <>

                                                                                    <option value={item.bussinessformation}>{item.bussinessformation}</option>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                </select>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className='row mt-5 mb-5'>
                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Category <span className='text-red'>*</span></label>
                                                            <div className='col-sm-9 col-lg-10'>
                                                                <select class="form-select" aria-label="Default select example" value={bcatid} onChange={(e) => setBcatid(e.target.value)} onClick={handleSecondSelectChange}>
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
                                                        <div className='row mt-5 mb-5'>
                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Subcategory <span className='text-red'>*</span></label>
                                                            <div className='col-sm-9 col-lg-10'>
                                                            <select class="form-select" aria-label="Default select example" value={sbcatid} onChange={(e) => setSbcatid(e.target.value)}>
                                                                    <option selected>---- Select Subcategory ----</option>
                                                                   
                                                                {
                                                                    bsubcategorys && bsubcategorys.map((item, i) => {
                                                                        return (
                                                                            <>

                                                                                    <option value={item._id}>{item.bussinesssubcategory}</option>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                </select>
                                                                
                                                            </div>
                                                    <div className='mt-5 w-25'>
                                                        <button className='btn bg-danger text-white' onClick={handleBussiness}>Add Business Details</button>
                                                    </div>
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
                                                                        <input type='text' className='form-control' value={bussinessname} onChange={(e) => setBussinessname(e.target.value)} placeholder='Business Name' />
                                                                        <label htmlFor="floatingTextarea">Business Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Numbar <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='number' className='form-control' value={bussinessnumber} onChange={(e) => setBussinessnumber(e.target.value)} placeholder='Business Numbar' />
                                                                        <label htmlFor="floatingTextarea">Business Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Email ID <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessemailid} onChange={(e) => setBussinessemailid(e.target.value)} placeholder='Business Email ID' />
                                                                        <label htmlFor="floatingTextarea">Business Email ID</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Website Url <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinesswebsiteurl} onChange={(e) => setBussinesswebsiteurl(e.target.value)} placeholder='Business Website Url' />
                                                                        <label htmlFor="floatingTextarea">Business Website Url</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Facebook Url <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessfacebookurl} onChange={(e) => setBussinessfacebookurl(e.target.value)} placeholder='Business Facebook Url' />
                                                                        <label htmlFor="floatingTextarea">Business Facebook Url</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Instagram Url <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessinstagramurl} onChange={(e) => setBussinessinstagramurl(e.target.value)} placeholder='Business Instagram Url' />
                                                                        <label htmlFor="floatingTextarea">Business Instagram Url</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Youtube Url <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessyoutubeurl} onChange={(e) => setBussinessyoutubeurl(e.target.value)} placeholder='Business Youtube Url' />
                                                                        <label htmlFor="floatingTextarea">Business Youtube Url</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessdetails} onChange={(e) => setBussinessdetails(e.target.value)} placeholder='Business Details' />
                                                                        <label htmlFor="floatingTextarea">Business Details</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Brochure <span className='text-red'>*</span></label>
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
                                                                        <input type='text' className='form-control' value={bussinessaddress} onChange={(e) => setBussinessaddress(e.target.value)} placeholder='Business Address' />
                                                                        <label htmlFor="floatingTextarea">Business Address</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business GST IN Numbar <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinessgstnumber} onChange={(e) => setBussinessgstnumber(e.target.value)} placeholder='Business GST IN Numbar' />
                                                                        <label htmlFor="floatingTextarea">Business GST IN Numbar</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business TDS Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinesstdsdetails} onChange={(e) => setBussinesstdsdetails(e.target.value)} placeholder='Business TDS Details' />
                                                                        <label htmlFor="floatingTextarea">Business TDS Details</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Pan Card Number</label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bussinesspancardnumber} onChange={(e) => setBussinesspancardnumber(e.target.value)} placeholder='Business Pan Card Number' />
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
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Collaboration Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                        <textarea className="form-control" value={collaborationdetails} onChange={(e) => setCollaborationdetails(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />

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
                                                                        <input type='text' className='form-control' value={salespersonname} onChange={(e) => setSalespersonname(e.target.value)} placeholder='Sales Person Name' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Number </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={salespersonnumber} onChange={(e) => setSalespersonnumber(e.target.value)} placeholder='Sales Person Number' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Email ID </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={salespersonemailid} onChange={(e) => setSalespersonemailid(e.target.value)} placeholder='Sales Person Email ID' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Email ID</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Position </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={salespersonposition} onChange={(e) => setSalespersonposition(e.target.value)} placeholder='Sales Person Position' />
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
                                                                        <input type='text' className='form-control' value={bankname} onChange={(e) => setBankname(e.target.value)} placeholder='Bank Name' />
                                                                        <label htmlFor="floatingTextarea">Bank Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Account Number <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bankaccountnumber} onChange={(e) => setBankaccountnumber(e.target.value)} placeholder='Banck Account Number' />
                                                                        <label htmlFor="floatingTextarea">Banck Account Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank IFSC Code <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bankifsccode} onChange={(e) => setBankifsccode(e.target.value)} placeholder='Bank IFSC Code' />
                                                                        <label htmlFor="floatingTextarea">Bank IFSC Code</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Branch Name <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' value={bankbranchname} onChange={(e) => setBankbranchname(e.target.value)} placeholder='Bank Branch Name' />
                                                                        <label htmlFor="floatingTextarea">Bank Branch Name</label>
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

                                                            <div className='row mb-5 text-end me-2'>
                                                                <div className='w-25'>
                                                                    <button className='btn bg-success text-white' >Submit Data</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (<></>)
                                    }
                                </form>

                                {/* </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </main>
                <footer id='footer' className='footer'>
                    <div className='copyright'>
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className='credits'>
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>
            </div >
        </>
    )

}

export default Addprovider