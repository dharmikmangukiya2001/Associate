import axios from "axios";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserHeader = () => {

    // toggl bar On lg-sizing
    const [sidebarOpen, setsidebarOpen] = useState(window.innerWidth > 1200);
    const toggleSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setsidebarOpen(window.innerWidth > 992);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Toggl Bar Closed


    const usertoken = localStorage.getItem("usertoken");
    const [member,setMember] = useState('')
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/home`, {headers: {'usertoken': usertoken}}).then(function (response) {
            // handle success
            // console.log(response.data,"userdata:::");
            setMember(response.data.Memberdata)
            // console.log("admin:::", admins);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
 


    const nevigate = useNavigate();
    const handleLogout = () => {
        axios.get(`${process.env.REACT_APP_URL}/user/logout`).then(function (response) {
            localStorage.removeItem('usertoken');
            localStorage.removeItem('isLoggedInMember');
            nevigate('/');
            window.location.reload();
        })
            .catch(function (error) {
                console.log(error);
            })
    }



    return (
        <>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/member" className="logo d-flex align-items-center">
                        <img src="/assets/img/Logos.png" alt="Logos" />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn d-lg-none " onClick={toggleSidebar}></i>
                    <div className="search-bar">
            {/* <div className="search-form d-flex align-items-center">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword"
                />
                <button type="submit" onClick={handleAdd} className="btn" title="Search">
                    <i>
                        <BsSearch />
                    </i>
                </button>
            </div> */}
            
        </div>
                </div>{/* End Logo */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        {/* End Search Icon*/}


                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                {/* <img className="rounded-circle" src={`${process.env.REACT_APP_URL}/${providers.img}`} height={50} /> */}
                                <span className="d-none d-md-block dropdown-toggle ps-2">{member.name}</span>
                            </a>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{member.name}</h6>
                                    <span>{member.email}</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="">
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="">
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" onClick={handleLogout} href="">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>{/* End Profile Dropdown Items */}
                        </li>{/* End Profile Nav */}
                    </ul>
                </nav>{/* End Icons Navigation */}
            </header>{/* End Header */}
            <aside id="sidebar" className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link ">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/member">
                            <i className="bi bi-menu-button-wide" /><span>All Services</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/member_showaskform">
                            <i className="bi bi-bag" /><span>Your Order</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/member_yourpayment">
                            <i className="bi bi-wallet2" /><span>Your PayMent</span>
                        </a>
                    </li>


                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </a>
                    </li>{/* End Profile Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="">
                            <i className="bi bi-question-circle" />
                            <span>F.A.Q</span>
                        </a>
                    </li>{/* End F.A.Q Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </a>
                    </li>{/* End Contact Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/user_login">
                            <i className="bi bi-card-list" />
                            <span>Register</span>
                        </a>
                    </li>{/* End Register Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/user_login">
                            <i className="bi bi-box-arrow-in-right" />
                            <span>Login</span>
                        </a>
                    </li>{/* End Login Page Nav */}
                </ul>
            </aside>

        </>
    )
}
export default UserHeader;