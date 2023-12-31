import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {

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


    const [admins, setAdmins] = useState([])

    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/home`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data,"admindata:::");
            setAdmins(response.data.admindata)
            // console.log("admin:::", admins);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const nevigate = useNavigate();
    const handleLogout = () => {
        axios.get(`${process.env.REACT_APP_URL}/admin/logout`).then(function (response) {
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedInAdmin');
            nevigate('/admin');
            window.location.reload();
        })
            .catch(function (error) {
                console.log(error);
            })
    }


    // Toady Order Start

    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/today_order`, { headers: { 'token': token } }).then(function (response) {
            // handle success
            // console.log(response.data);
            setOrders(response.data.orders);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
     // Toady Order End


    
    return (
        <>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <Link to="/admin_home"><img src="/assets/img/Logos.png" alt="Logos" /></Link>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn d-lg-none" onClick={toggleSidebar} />
                </div>{/* End Logo */}
              
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        {/* <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                {orders &&
                                <span className="badge bg-primary badge-number">{orders.length}</span>
                            }
                            </a>{/* End Notification Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            {orders &&
                                    
                                    
                                <li className="dropdown-header">
                                    You have {orders.length} new notifications
                                    <a href="/admin_Allorder"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                 }
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                {orders &&
                                    orders.map((item, i) => (
                                        <li className="notification-item">
                                            <i className="bi bi-exclamation-circle text-warning" />
                                            <div>
                                                <h4>{item.userid.name}</h4>
                                                <p>{item.description}</p>
                                                <p>{item.productid.product}</p>
                                            </div>
                                        </li>

                                    ))}
                                <li className="dropdown-footer">
                                    <a href="/admin_allorder">Show all notifications</a>
                                </li>
                            </ul>{/* End Notification Dropdown Items */}
                        </li>{/* End Notification Nav */}
                        
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{admins.name}</span>
                            </a>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{admins.name}</h6>
                                    <span>{admins.email}</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
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
                        <Link className="nav-link collapsed" to='/admin_home'><i className="bi bi-menu-button-wide" /><span>Dashboard</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                            <i className="bi bi-journal-text" /><span>Services</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/admin_addservice" class="a-none ps-0">
                                    <Link className='a-none' to='/admin_addservice'><i className="bi bi-person-plus fs-5" /><span>Add Services</span></Link>
                                </a>
                            </li>
                            <li>
                                <a href="/admin_showservices" class="a-none ps-0">
                                    <Link className='a-none' to="/admin_showservices"><i className="bi bi-clipboard-data fs-5" /><span>Show Services</span></Link>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Forms Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                            <i className="bi bi-layout-text-window-reverse" /><span>Providers</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/admin_addprovider" class="a-none ps-0">
                                    <Link className='a-none' to='/admin_addprovider'><i className="bi bi-person-plus fs-5" /><span>Add Provider</span></Link>
                                </a>
                            </li>
                            <li>
                                <a href="/admin_showproviders" class="a-none ps-0">
                                    <Link className='a-none' to='/admin_showproviders'><i className="bi bi-clipboard-data fs-5" /><span>Show Providers</span></Link>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Tables Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart" /><span>Member</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/admin_adduser" class="a-none ps-0" >
                                    <Link className='a-none' to="/admin_addmember"><i className="bi bi-person-plus fs-5" /><span>Add Member</span></Link>
                                </a>
                            </li>
                            <li>
                                <a href="/admin_adduser" class="a-none ps-0" >
                                    <Link className='a-none' to="/admin_allmember"><i className="bi bi-clipboard-data fs-5" /><span>Show Member</span></Link>
                                </a>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    {/* <i className="bi bi-circle" /><span>ECharts</span> */}
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Charts Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#Manager" data-bs-toggle="collapse" href="#">
                            <i className="bi  bi-kanban" /><span>Manager</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="Manager" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link className='a-none' to="/admin_addmanager">
                                    <i className="bi-person-plus fs-5" /><span>Add Manager</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='a-none' to="/admin_allmanager">
                                    <i className="bi-clipboard-data fs-5" /><span>Show Manager</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Icons Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi  bi-cart" /><span>Order</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link className='a-none' to="/admin_allorder">
                                    <i className="bi bi-bag fs-5" /><span>Show Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='a-none' to="/admin_acceptorder">
                                    <i className="bi bi-check2 fs-5" /><span>Accept Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='a-none' to="/admin_doneorder">
                                    <i className="bi bi-check2-all fs-5" /><span>Done Order</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Icons Nav */}                    
                                     
                    {/* <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </a>
                    </li>End Profile Page Nav */}
                    
                </ul>
            </aside>

        </>
    )
}


export default Header