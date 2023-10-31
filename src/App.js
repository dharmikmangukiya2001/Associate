import './App.css';
import './components/admin/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error/Error';
import Home from './components/admin/Home';
import Login from './components/admin/Login'
import Addservice from './components/admin/Addservice'
import Showservices from './components/admin/Showservices'
import Addprovider from './components/admin/Addprovider';
import Showprovider from './components/admin/Showprovider';
import Providerdetails from './components/admin/Providerdetails';
import Addmember from './components/admin/Addmember';
import Allorder from './components/admin/Allorder';
import AllMember from './components/admin/AllMember';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Provider_Login from './components/provider/Provider_Login';
import Provider_Dashboard from './components/provider/Provider_Dashboard';
import AddService from './components/provider/AddServices';
import { useEffect, useState } from 'react';

import User from './components/user/User';
import UserLogin from './components/user/UserLogin';
import ServiceFrom from './components/user/ServiceFrom';
import UserProviderDetails from './components/user/UserProviderDetails';




function App() {


  // admin Login Security Start

  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

  const adminhandleLogin = () => {
    setIsLoggedInAdmin(true);
    localStorage.setItem('isLoggedInAdmin', 'true');
    console.log('User logged in.');
  };
  
  const adminhandleLogout = () => {
    setIsLoggedInAdmin(false);
    localStorage.removeItem('isLoggedInAdmin');
    console.log('User logged out.');
  };
  

  useEffect(() => {

      const savedLoginStatus = localStorage.getItem('isLoggedInAdmin');
      if (savedLoginStatus === 'true') {
        setIsLoggedInAdmin(true);
      } else {
        setIsLoggedInAdmin(false);
      }
      
   
  }, []);
  // admin Login Security End


  // Provider Login Security Start

  const [isLoggedInProvider, setIsLoggedInProvider] = useState(false);

  const ProviderhandleLogin = () => {
    setIsLoggedInProvider(true);
    localStorage.setItem('isLoggedInProvider', 'true');
    console.log('User logged in.');
  };
  
  const ProviderhandleLogout = () => {
    setIsLoggedInProvider(false);
    localStorage.removeItem('isLoggedInProvider');
    console.log('User logged out.');
  };
  

  useEffect(() => {

      const savedLoginStatus = localStorage.getItem('isLoggedInProvider');
      if (savedLoginStatus === 'true') {
        setIsLoggedInProvider(true);
      } else {
        setIsLoggedInProvider(false);
      }
      
   
  }, []);
  // Provider Login Security End



  // Member Login Security Start

  const [isLoggedInMember, setIsLoggedInMember] = useState(false);

  const MemberhandleLogin = () => {
    setIsLoggedInMember(true);
    localStorage.setItem('isLoggedInMember', 'true');
    console.log('User logged in.');
  };
  
  const MemberhandleLogout = () => {
    setIsLoggedInMember(false);
    localStorage.removeItem('isLoggedInMember');
    console.log('User logged out.');
  };
  

  useEffect(() => {

      const savedLoginStatus = localStorage.getItem('isLoggedInMember');
      if (savedLoginStatus === 'true') {
        setIsLoggedInMember(true);
      } else {
        setIsLoggedInMember(false);
      }
      
   
  }, []);
  // Member Login Security End
  
  
  return (
    <>
    
      <Routes>


        <Route path="*" element={<Error/>} />
        {/* ADMIN SITE START */}
        <Route path="/admin" element={!isLoggedInAdmin ? <Login onLogin={adminhandleLogin} onLogout={adminhandleLogout} /> : <Navigate to="/admin_home" />} />
        <Route path="/admin_home" element={isLoggedInAdmin ? <Home onLogout={adminhandleLogout} /> : <Navigate to="/admin_home" />} />
        <Route path="/admin_addservice" element={isLoggedInAdmin ? <Addservice onLogout={adminhandleLogout}/>:<Navigate to="/admin_addservice"/>} />
        <Route path="/admin_showservices" element={isLoggedInAdmin ? <Showservices onLogout={adminhandleLogout}/>:<Navigate to="/admin_showservices"/>} />

        <Route path="/admin_addprovider" element={isLoggedInAdmin ? <Addprovider onLogout={adminhandleLogout}/>:<Navigate to="/admin_addprovider"/>} />
        <Route path="/admin_showproviders" element={isLoggedInAdmin ? <Showprovider onLogout={adminhandleLogout}/>:<Navigate to="/admin_showproviders"/>} />
        <Route path="/admin_providerdetails/:id" element={isLoggedInAdmin ? <Providerdetails onLogout={adminhandleLogout}/>:<Providerdetails onLogout={adminhandleLogout}/>} />

        <Route path='/admin_addmember' element={isLoggedInAdmin ?< Addmember onLogout={adminhandleLogout}/>:<Navigate to="/admin_addmember"/>} />
        <Route path='/admin_allorder' element={isLoggedInAdmin ?< Allorder onLogout={adminhandleLogout}/>:<Navigate to="/admin_allorder"/> }/>
        <Route path="/admin_allmember" element={isLoggedInAdmin ? <AllMember onLogout={adminhandleLogout} /> : <Navigate to="/admin_allmember"/>} />
        {/* ADMIN SITE END */}





        {/* PROVIDER SITE START */}
        <Route path="/provider" element={!isLoggedInProvider ? <Provider_Login onLogin={ProviderhandleLogin} />:<Navigate to="/provider_dashboard"/>} />
        <Route path="/provider_dashboard" element={isLoggedInProvider ? <Provider_Dashboard  onLogin={ProviderhandleLogout} />:<Navigate to="/provider_dashboard"/>} />
        <Route path="/provider_addservice" element={isLoggedInProvider ? <AddService onLogin={ProviderhandleLogout} />:<Navigate to="/provider_addservice"/>} />
        {/* PROVIDER SITE END */}







        {/* PROVIDER SITE START */}
        <Route path="/" element={!isLoggedInMember ? <UserLogin onLogin={MemberhandleLogin} />:<Navigate to="/member"/>} />
        <Route path="/member" element={isLoggedInMember ? <User onLogin={MemberhandleLogout} />:<Navigate to="/member"/>} />
        <Route path="/member_addask" element={isLoggedInMember ? <ServiceFrom onLogin={MemberhandleLogout} />:<Navigate to="/member_addask"/>} />
        <Route path='/member_provider_details/:id' element={isLoggedInMember ? <UserProviderDetails onLogin={MemberhandleLogout} />:<Navigate to="/member_provider_details/:id"/>} />
        {/* PROVIDER SITE END */}




      </Routes>


    </>
  );
}

export default App;
