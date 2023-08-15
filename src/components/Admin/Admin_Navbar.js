import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import logo from '../../assets/img/logo.png';

import { useState } from "react";
import { Link } from "react-router-dom";
function AdminNavbar(props){

    const [NavDropDisplay, setNavDropDisplay] = useState("none");

    const dropDownToggle = () => {
        if (NavDropDisplay === 'none'){
            setNavDropDisplay('block');
            console.log(NavDropDisplay);
        }
        else{
            setNavDropDisplay('none');
            console.log(NavDropDisplay);
        }
    };

    const AdminNavbarDisplay = ()=>{
        if(props.navbarDisplay){
            props.setNavbarDisplay(0);
        }
        else{
            props.setNavbarDisplay(1);
        }
    }

    return(
        <div>
             <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* Navbar Brand */}
                <img src={logo} style={{width:"50px", height:'50px', marginLeft:'10px'}}/>
                <Link className="navbar-brand ps-2" to="/admin" style={{padding: "0px", textAlign:'left', width:'175px'}}>Management</Link>
                {/* Sidebar Toggle */}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={()=>{AdminNavbarDisplay()}}><i className="fas fa-bars"></i></button>
                {/* Navbar Search */}
                {/* <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </form> */}
                {/* Navbar */}
                <ul className="navbar-nav ms-auto ms-md-8 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdown" onClick={()=> dropDownToggle()} >
                            <i className="fas fa-user fa-fw"></i>
                        </button>
                        <div>
                        <ul className="collapse dropdown-menu dropdown-menu-end" style={{display:NavDropDisplay}}>
                            <li><span className="dropdown-item2" href="#!">관리자 계정</span></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item3" href="#!">Logout</a></li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );

};

export default AdminNavbar;