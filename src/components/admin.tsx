import {useState} from "react"
import "./adminstyle.css"
import akslogos from "../assets/ministryLogoHeader.png"
// import NewCustomer from "./admin/NewCustomer";
// import Businesses from "./admin/Businesses";
// import Statictis from "./admin/Statictis";
// import Transactions from "./admin/Transactions";
import { Link } from "react-router-dom";
import Statictis from "./Statictis";
import NewCustomer from "./NewCustomer";
import Businesses from "./Businesses";
import Transactions from "./Transactions";



const Admin = () => {
    const [state, setState] = useState("main")

    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar overflow-auto">
                <div className="sidebar-brand">
                    {/* <h2><span className="lab la-accusoft"></span><span>Ministry of
                        <br /> STAYCATION</span>
                    </h2> */}
                    <Link to="/" >
                    <img className="w-12 h-12" src={akslogos} alt="logo" />
                    </Link>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li onClick={() => setState("main")}>
                            <p className={ state === "main" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-igloo"></span>
                                <span>Dashboard</span></p>
                        </li>

                        <li onClick={() => setState("Customers")}>
                            <p className={ state === "Customers" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-users"></span>
                                <span>Customers</span></p>
                        </li>

                        <li onClick={() => setState("Transaction")}>
                            <p className={ state === "Transaction" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-clipboard-list"></span>
                                <span>Transaction</span></p>
                        </li>

                        <li onClick={() => setState("Bussinesses")}>
                            <p className={ state === "Bussinesses" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-shopping-bag"></span>
                                <span>Bussinesses</span></p>
                        </li>

                        <li onClick={() => setState("Inventory")}>
                            <p className={ state === "Inventory" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-receipt"></span>
                                <span>Pending (Bussiness)</span></p>
                        </li>

                        <li onClick={() => setState("Accounts")}>
                            <p className={ state === "Accounts" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-user-circle"></span>
                                <span>Approve (Bussiness)</span></p>
                        </li>

                        <li onClick={() => setState("Expired")}>
                            <p className={ state === "Expired" ? "isactive" :  "isnotactive hover:bg-white hover:text-black"}><span className="las la-clipboard-list"></span>
                                <span>Expired (Bussiness)</span></p>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="main-content">
                <header>
                    <h2>
                        <label htmlFor="nav-toggle">
                            <span className="las la-bars"></span>
                        </label>

                        Dashboard
                    </h2>

                    <div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="Search here..." />
                    </div>

                    <div className="user-wrapper">
                        <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png" width="40px" height="40px" alt="" />
                        <div>
                            <h4>Anselmo Mendes</h4>
                            <small>U1925524</small> <br />
                            <small>super admin</small>
                        </div>
                    </div>
                </header>

               {state === "main" && <Statictis />}
               {state === "Customers" && <NewCustomer />}
               {state === "Bussinesses" && <Businesses />}
               {state === "Transaction" && <Transactions />}


            </div>

        </div>
    );
};

export default Admin;
