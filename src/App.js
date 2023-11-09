import './App.css';
import './components/admin/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



// Error Panel Page Start
import Error from './components/Error/Error';
// Error Panel Page End



// Admin Panel Page Start
import Home from './components/admin/Home';
import Login from './components/admin/Login'
import Addservice from './components/admin/Addservice'
import Showservices from './components/admin/Showservices'
import Addprovider from './components/admin/Addprovider';
import Showprovider from './components/admin/Showprovider';
import Providerdetails from './components/admin/Providerdetails';
import Addmember from './components/admin/Addmember';
import AllMember from './components/admin/AllMember';
import Memberdetails from './components/admin/Memberdetails';
import Allorder from './components/admin/Allorder';
import Orderdetails from './components/admin/Orderdetails';
import Addmanager from './components/admin/Addmanager';
import Allmanager from './components/admin/Allmanager';
import Managerdetails from './components/admin/Managerdetails'
// Payment Panel Page Start
import DashboardOrder from './components/payment/DashboardOrder'
import DashboardDoneOrder from './components/payment/DashboardDoneOrder'
import DashboardShowOrder from './components/payment/DashboardShowOrder'
import DashboardMamberCommission from './components/payment/DashboardMamberCommission'
import DashboardMamberOrderShow from './components/payment/DashboardMamberOrderShow'
// Payment Panel Page End
// Admin Panel Page End



// Provider Panel Page Start
import Provider_Login from './components/provider/Provider_Login';
import Provider_Dashboard from './components/provider/Provider_Dashboard';
import Provider_Profile from './components/provider/Provider_Profile';
import Provider_Allorder from './components/provider/Provider_Allorder';
import Provider_Accept from './components/provider/Provider_Accept';
import Provider_Completed from './components/provider/Provider_Completed';
// Provider Panel Page End



// Manager Panel Page Start
import ManagerLogin from './components/manager/ManagerLogin'
import Manager_Forget_Password from './components/manager/Manager_Forget_Password'
import Manager_Forget_Password_Otp from './components/manager/Manager_Forget_Password_Otp'
import Manager_Reset_Password from './components/manager/Manager_Reset_Password'
import Manager_dashboard from './components/manager/Manager_dashboard'
import Manager_Order from './components/manager/Manager_Order'
import Manager_Orderdetails from './components/manager/Manager_Orderdetails'
import Manager_AccpetOrder from './components/manager/Manager_AccpetOrder'
import Manager_Accpetdetails from './components/manager/Manager_Accpetdetails'
// Manager Panel Page End



// Member Panel Page Start
import User from './components/user/User';
import UserLogin from './components/user/UserLogin';
import ServiceFrom from './components/user/ServiceFrom';
import ShowAskFrom from './components/user/ShowAskFrom';
import Showorder from './components/user/Showorder';
import PayMent from './components/user/PayMent';
import CompletedOrder from './components/user/CompletedOrder';
// Member Panel Page End



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



  // Member Login Security Start

  const [isLoggedInManager, setIsLoggedInManager] = useState(false);

  const ManagerhandleLogin = () => {
    setIsLoggedInManager(true);
    localStorage.setItem('isLoggedInManager', 'true');
    console.log('User logged in.');
  };

  const ManagerhandleLogout = () => {
    setIsLoggedInManager(false);
    localStorage.removeItem('isLoggedInManager');
    console.log('User logged out.');
  };


  useEffect(() => {

    const savedLoginStatus = localStorage.getItem('isLoggedInManager');
    if (savedLoginStatus === 'true') {
      setIsLoggedInManager(true);
    } else {
      setIsLoggedInManager(false);
    }


  }, []);
  // Member Login Security End


  return (
    <>

      <Routes>


        <Route path="*" element={<Error />} />
        {/* ADMIN SITE START */}
        <Route path="/admin" element={!isLoggedInAdmin ? <Login onLogin={adminhandleLogin} onLogout={adminhandleLogout} /> : <Navigate to="/admin_home" />} />
        <Route path="/admin_home" element={isLoggedInAdmin ? <Home onLogout={adminhandleLogout} /> : <Navigate to="/admin_home" />} />
        <Route path="/admin_addservice" element={isLoggedInAdmin ? <Addservice onLogout={adminhandleLogout} /> : <Navigate to="/admin_addservice" />} />
        <Route path="/admin_showservices" element={isLoggedInAdmin ? <Showservices onLogout={adminhandleLogout} /> : <Navigate to="/admin_showservices" />} />

        <Route path="/admin_addprovider" element={isLoggedInAdmin ? <Addprovider onLogout={adminhandleLogout} /> : <Navigate to="/admin_addprovider" />} />
        <Route path="/admin_showproviders" element={isLoggedInAdmin ? <Showprovider onLogout={adminhandleLogout} /> : <Navigate to="/admin_showproviders" />} />
        <Route path="/admin_providerdetails/:id" element={isLoggedInAdmin ? <Providerdetails onLogout={adminhandleLogout} /> : <Providerdetails onLogout={adminhandleLogout} />} />

        <Route path='/admin_addmember' element={isLoggedInAdmin ? < Addmember onLogout={adminhandleLogout} /> : <Navigate to="/admin_addmember" />} />
        <Route path="/admin_allmember" element={isLoggedInAdmin ? <AllMember onLogout={adminhandleLogout} /> : <Navigate to="/admin_allmember" />} />
        <Route path="/admin_memberdetails/:id" element={isLoggedInAdmin ? <Memberdetails onLogout={adminhandleLogout} /> : <Memberdetails onLogout={adminhandleLogout} />} />
        <Route path='/admin_allorder' element={isLoggedInAdmin ? < Allorder onLogout={adminhandleLogout} /> : <Navigate to="/admin_allorder" />} />
        <Route path="/admin_orderdetails/:id" element={isLoggedInAdmin ? <Orderdetails onLogout={adminhandleLogout} /> : <Orderdetails onLogout={adminhandleLogout} />} />

        <Route path='/admin_addmanager' element={isLoggedInAdmin ? < Addmanager onLogout={adminhandleLogout} /> : <Navigate to="/admin_addmanager" />} />
        <Route path="/admin_allmanager" element={isLoggedInAdmin ? <Allmanager onLogout={adminhandleLogout} /> : <Navigate to="/admin_allmanager" />} />
        <Route path="/admin_managerdetails/:id" element={isLoggedInAdmin ? <Managerdetails onLogout={adminhandleLogout} /> : <Managerdetails onLogout={adminhandleLogout} />} />
        
        <Route path='/admin_acceptorder'  element={isLoggedInAdmin ? <DashboardOrder onLogout={adminhandleLogout} /> : <Navigate to="/admin_acceptorder" />} />
        <Route path='/admin_showacceptorder/:id' element={isLoggedInAdmin ? <DashboardShowOrder onLogout={adminhandleLogout} /> :  <DashboardShowOrder onLogout={adminhandleLogout}/>} />
        <Route path='/admin_doneorder' element={isLoggedInAdmin ? <DashboardDoneOrder onLogout={adminhandleLogout} /> : <Navigate to="/admin_doneorder" />} />
        <Route path='/admin_membercommission' element={isLoggedInAdmin ? <DashboardMamberCommission onLogout={adminhandleLogout} /> : <Navigate to="/admin_membercommission" />} />
        <Route path='/admin_memberordershow/:id' element={isLoggedInAdmin ? <DashboardMamberOrderShow onLogout={adminhandleLogout} /> : <DashboardMamberOrderShow onLogout={adminhandleLogout} />} />
        {/* ADMIN SITE END */}



        {/* PROVIDER SITE START */}
        <Route path="/provider" element={!isLoggedInProvider ? <Provider_Login onLogin={ProviderhandleLogin} /> : <Navigate to="/provider_dashboard" />} />
        <Route path="/provider_dashboard" element={isLoggedInProvider ? <Provider_Dashboard onLogin={ProviderhandleLogout} /> : <Navigate to="/provider_dashboard" />} />
        <Route path="/provider_profile" element={isLoggedInProvider ? <Provider_Profile onLogin={ProviderhandleLogout} /> : <Navigate to="/provider_profile" />} />
        <Route path='/provider_allorder' element={isLoggedInProvider ? < Provider_Allorder onLogout={ProviderhandleLogout} /> : < Provider_Allorder onLogout={ProviderhandleLogout} />} />
        <Route path='/provider_acceptorder' element={isLoggedInProvider ? < Provider_Accept onLogout={ProviderhandleLogout} /> : < Provider_Accept onLogout={ProviderhandleLogout} />} />
        <Route path='/provider_completedorder' element={isLoggedInProvider ? < Provider_Completed onLogout={ProviderhandleLogout} /> : < Provider_Completed onLogout={ProviderhandleLogout} />} />
        {/* PROVIDER SITE END */}



        {/* G MANAGER SITE START */}
        <Route path="/manager" element={!isLoggedInManager ? <ManagerLogin onLogin={ManagerhandleLogin} onLogout={ManagerhandleLogout} /> : <Navigate to="/manager_dashboard" />} />
        <Route path="/manager_forget_password" element={!isLoggedInManager ? <Manager_Forget_Password onLogout={ManagerhandleLogout} /> : <Navigate to="/manager" />} />
        <Route path="/manager_send_otp" element={!isLoggedInManager ? <Manager_Forget_Password_Otp onLogout={ManagerhandleLogout} /> : <Navigate to="/manager" />} />
        <Route path="/manager_Reset_password" element={!isLoggedInManager ? <Manager_Reset_Password onLogout={ManagerhandleLogout} /> : <Navigate to="/manager" />} />
        <Route path="/manager_dashboard" element={isLoggedInManager ? <Manager_dashboard onLogin={ManagerhandleLogout} /> : <Navigate to="/manager_dashboard" />} />
        <Route path="/manager_allorder" element={isLoggedInManager ? <Manager_Order onLogin={ManagerhandleLogout} /> : <Navigate to="/manager_allorder" />} />
        <Route path="/manager_orderdetails/:id" element={isLoggedInManager ? <Manager_Orderdetails onLogout={ManagerhandleLogout} /> : <Manager_Orderdetails onLogout={ManagerhandleLogout} />} />
        <Route path="/manager_acceptorder" element={isLoggedInManager ? <Manager_AccpetOrder onLogin={ManagerhandleLogout} /> : <Navigate to="/manager_acceptorder" />} />
        <Route path="/manager_acceptdetails/:id" element={isLoggedInManager ? <Manager_Accpetdetails onLogout={ManagerhandleLogout} /> : <Manager_Accpetdetails onLogout={ManagerhandleLogout} />} />
        {/* G MANAGER SITE END */}




        {/* PROVIDER SITE START */}
        <Route path="/" element={!isLoggedInMember ? <UserLogin onLogin={MemberhandleLogin} /> : <Navigate to="/member" />} />
        <Route path="/member" element={isLoggedInMember ? <User onLogin={MemberhandleLogout} /> : <Navigate to="/member" />} />
        <Route path="/member_addask" element={isLoggedInMember ? <ServiceFrom onLogin={MemberhandleLogout} /> : <Navigate to="/member_addask" />} />
        <Route path='/member_showaskform' element={isLoggedInMember ? <ShowAskFrom onLogin={MemberhandleLogout} /> : <Navigate to="/member_showaskform" />} />
        <Route path='/user_showorder/:id' element={isLoggedInMember ? <Showorder onLogin={MemberhandleLogout} /> : <Showorder onLogin={MemberhandleLogout} />} />
        <Route path='/member_yourpayment' element={isLoggedInMember ? <PayMent onLogin={MemberhandleLogout} /> :  <Navigate to="/member_yourpayment" />}/>
        <Route path='/member_completedorder' element={isLoggedInMember ? <CompletedOrder onLogin={MemberhandleLogout} /> :  <Navigate to="/member_completedorder" />}/>
        {/* PROVIDER SITE END */}




      </Routes>


    </>
  );
}

export default App;
