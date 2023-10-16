import './App.css';
import './components/admin/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/admin/Home';
import Login from './components/admin/Login'
import Addservice from './components/admin/Addservice'
import Showservices from './components/admin/Showservices'
import Servicedetails from './components/admin/Servicedetails'
import Addprovider from './components/admin/Addprovider';
import Showprovider from './components/admin/Showprovider';
import Providerdetails from './components/admin/Providerdetails';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Provider_Login from './components/provider/Provider_Login';
import Provider_Dashboard from './components/provider/Provider_Dashboard';
import { useEffect, useState } from 'react';

import User from './components/user/User';
import UserLogin from './components/user/UserLogin';
import ServiceDetails from './components/user/ServiceDetails';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    try {
      const savedLoginStatus = localStorage.getItem('isLoggedIn');
      if (savedLoginStatus === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      const adminControl = JSON.parse(localStorage.getItem('admincontrol'));
      // console.log('admincontrol:', adminControl);
    } catch (error) {
      console.error('Error while handling local storage:', error);
    }
  }, []);

  // console.log('isLoggedIn:', isLoggedIn);



  return (
    <>

      <Routes>
        {/* ADMIN SITE START */}
        <Route path="/admin" element={<Login />}/>
        <Route path="/admin_home"element={<Home />}/>
        <Route path="/admin_addservice" element={<Addservice/>} />
        <Route path="/admin_showservices" element={<Showservices/>} />
        {/* <Route path="/admin_servicesdetails/:id" element={isLoggedIn ? <Servicedetails onLogout={handleLogout} /> : <Navigate to="/admin"/>} /> */}

        {/* <Route path="/admin_addprovider" element={isLoggedIn ? <Addprovider onLogout={handleLogout} /> : <Navigate to="/admin"/>} /> */}
        {/* <Route path="/admin_showproviders" element={isLoggedIn ? <Showprovider onLogout={handleLogout} /> : <Navigate to="/admin"/>} /> */}
        {/* <Route path="/admin_providerdetails/:id" element={isLoggedIn ? <Providerdetails onLogout={handleLogout} /> : <Navigate to="/admin"/>} /> */}

        {/* ADMIN SITE END */}

        {/* PROVIDER SITE START */}
        {/* <Route path="/provider" element={<Provider_Login />} /> */}
        {/* <Route path="/provider_dashboard" element={<Provider_Dashboard />} /> */}
        {/* PROVIDER SITE END */}


        {/* PROVIDER SITE START */}
        {/* <Route path="/" element={<User />} /> */}
        {/* <Route path="/user_login" element={<UserLogin/>} /> */}
        {/* <Route path="/servicedetails/:id" element={<ServiceDetails />} /> */}
        {/* PROVIDER SITE END */}
      </Routes>


    </>
  );
}

export default App;
