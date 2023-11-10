import React, { useEffect, useState } from "react";
import '../../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagerHeader = () => {

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




    const [manager, setManager] = useState([])

    const managertoken = localStorage.getItem("managertoken");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/Manager/home`, { headers: { managertoken } }).then(function (response) {
            // handle success
            setManager(response.data.manager)
            // console.log(response.data,"Manager:::");

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])



    const nevigate = useNavigate();
    const handleLogout = () => {
        axios.get(`${process.env.REACT_APP_URL}/manager/logout`).then(function (response) {
            localStorage.removeItem('managertoken');
            localStorage.removeItem('isLoggedInManager');
            nevigate('/manager');
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
                    <a href="/provider_dashboard" className="logo d-flex align-items-center">
                        <img src="/assets/img/Logos.png" alt="Logos" />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn d-lg-none" onClick={toggleSidebar} />
                </div>{/* End Logo */}
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form>
                </div>{/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="">
                                <i className="bi bi-search" />
                            </a>
                        </li>{/* End Search Icon*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                <span className="badge bg-primary badge-number">4</span>
                            </a>{/* End Notification Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                            You have 4 new notifications
                            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-exclamation-circle text-warning" />
                            <div>
                                <h4>Lorem Ipsum</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>30 min. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-x-circle text-danger" />
                            <div>
                                <h4>Atque rerum nesciunt</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>1 hr. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-check-circle text-success" />
                            <div>
                                <h4>Sit rerum fuga</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>2 hrs. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-info-circle text-primary" />
                            <div>
                                <h4>Dicta reprehenderit</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>4 hrs. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="dropdown-footer">
                            <a href="#">Show all notifications</a>
                        </li> 
                            </ul>{/* End Notification Dropdown Items */}
                        </li>{/* End Notification Nav */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text" />
                                <span className="badge bg-success badge-number">3</span>
                            </a>{/* End Messages Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                            You have 3 new messages
                            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="message-item">
                            <a href="#">
                                <img src="assets/img/messages-1.jpg" alt className="rounded-circle" />
                                <div>
                                    <h4>Maria Hudson</h4>
                                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="message-item">
                            <a href="#">
                                <img src="assets/img/messages-2.jpg" alt className="rounded-circle" />
                                <div>
                                    <h4>Anna Nelson</h4>
                                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                    <p>6 hrs. ago</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="message-item">
                            <a href="#">
                                <img src="assets/img/messages-3.jpg" alt className="rounded-circle" />
                                <div>
                                    <h4>David Muldon</h4>
                                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                    <p>8 hrs. ago</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="dropdown-footer">
                            <a href="#">Show all messages</a>
                        </li>
                            </ul>{/* End Messages Dropdown Items */}
                        </li>{/* End Messages Nav */}
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="" data-bs-toggle="dropdown">
                                <img src="../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                {/* <img className="rounded-circle" src={provider.profile} height={50} /> */}
                                <span className="d-none d-md-block dropdown-toggle ps-2">{manager.name}</span>
                            </a>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{manager.name}</h6>
                                    <span>{manager.email }</span>
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
                        <a className="nav-link collapsed" href="/provider_dashboard">
                            <i className="bi bi-menu-button-wide" /><span>Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                            <i className="bi bi-journal-text" /><span>Order</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="forms-nav" className="nav-content collapse ">
                            <li>
                                <a href="/manager_allorder" class="a-none">
                                    <i className="bi bi-cart3 fs-5" /><span>All Order</span>
                                </a>
                            </li>
                            <li>
                                <a href="/manager_acceptorder" class="a-none">
                                    <i className="bi bi-server fs-5" /><span>Accept Order</span>
                                </a>
                            </li>
                            <li>
                                <a href="/manager_doneorder" class="a-none">
                                    <i className="bi bi-server fs-5" /><span>Done Order</span>
                                </a>
                            </li>
                            <li>
                                <a href="/manager_cancelorder" class="a-none">
                                    <i className="bi bi-server fs-5" /><span>Cancel Order</span>
                                </a>
                            </li>
                        </ul>
                    </li>{/* End Forms Nav */}
                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                            <i className="bi bi-layout-text-window-reverse" /><span>Provider Details</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="" class="a-none">
                                    <i className="bi bi-plus-square fs-5" /><span>Add Provider</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="a-none">
                                    <i className="bi bi-server fs-5" /><span>Show Providers</span>
                                </a>
                            </li>
                        </ul>
                    </li>End Tables Nav */}
                   
                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </a>
                    </li>{/* End Profile Page Nav */}
                    
                </ul>
            </aside>



        </>
    )

}
export default ManagerHeader