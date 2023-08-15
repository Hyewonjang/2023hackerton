import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import { Link } from "react-router-dom";


function Sidebar({}){
    return(
        <div id="layoutSidenav_nav">
            <nav className= "sb-sidenav accordion sb-sidenav-dark sb-sidenav-toggled" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading" style={{textAlign:'left', color:'lightgray'}}>고객관리</div>
                        <Link className="nav-link" to="/admin/customerlist">
                            <div className="sb-nav-link-icon"><i className="fas fa-address-book"></i></div>
                            고객별 구매내역
                        </Link>
                        {/* <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i className="fas fa-rectangle-list"></i></div>
                            고객구매내역
                        </a> */}
                        {/* <div className="sb-sidenav-menu-heading" style={{textAlign:'left', color:'lightgray'}}>관리자실적</div> */}
                        {/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            1일 관리내역 */}
                            {/* <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div> */}
                        {/* </a> */}
                        {/* <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div> */}
                        {/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                            총 관리내역 */}
                            {/* <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div> */}
                        {/* </a> */}
                        {/* <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="login.html">Login</a>
                                        <a className="nav-link" href="register.html">Register</a>
                                        <a className="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                    Error
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="401.html">401 Page</a>
                                        <a className="nav-link" href="404.html">404 Page</a>
                                        <a className="nav-link" href="500.html">500 Page</a>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div className="sb-sidenav-menu-heading">Addons</div>
                        <a className="nav-link" href="charts.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                            Charts
                        </a>
                        <a className="nav-link" href="tables.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                            Tables
                        </a> */}
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Manager(관리자)
                </div>
            </nav>
        </div>
    )
};

export default Sidebar;