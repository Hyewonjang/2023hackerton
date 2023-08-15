import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import AdminNavbar from "./Admin_Navbar";
import CustomerList from "./CustomerList";
import Footer from "./Footer";
import { useState } from "react";
import Sidebar from "./Sidebar";
import PurchaseHistoryList from "./PurchaseHistoryList";
import AddPurchaseData from "./AddPurchaseData";
import AddCustomerData from "./AddCustomerData";

import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';



function Admin(){
    const [navbarDisplay, setNavbarDisplay] = useState(1);

    return(
        // <BrowserRouter>
        <div>
           <AdminNavbar navbarDisplay={navbarDisplay} setNavbarDisplay={setNavbarDisplay}/>
           <div id="layoutSidenav">
                {navbarDisplay ? "": <Sidebar navbarDisplay={navbarDisplay}/>}
                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            <Route path="/" element={<CustomerList />}></Route>
                            <Route path="/customerlist" element={<CustomerList/>}></Route>
                            <Route path="/purchasehistorylist/:id" element={<PurchaseHistoryList/>}></Route>
                            <Route path="/addcustomerdata/:id" element={<AddCustomerData/>}></Route>
                            <Route path="/addpurchasedata/:id" element={<AddPurchaseData/>}></Route>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
        // </BrowserRouter>
    )
};

export default Admin;