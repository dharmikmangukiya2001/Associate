import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import axios from "axios";
import { useParams } from "react-router-dom";


const UserProviderDetails = ()=>{


    const [providers, setProviders] = useState([])
    const [subcatdata, setSubcatdata] = useState([])
    const id = useParams()
    const providerid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdetails/${providerid}`).then(function (response) {
            // handle success
            console.log(response.data);
            setProviders([response.data.providers]);
            setSubcatdata(response.data.subcatData);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);





    return(
    <>
    <UserHeader/>
    </>
    )
}
export default UserProviderDetails