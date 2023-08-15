import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import * as Icons from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
    const { dispatch } = useDarkModeContext();
    return (
        <div className="sidebar">
            <div className="top">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span className="logo">Admin Panel</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to={"/users"} style={{ textDecoration: "none" }}>
                        <li>
                            <Icons.PersonOutlined className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to={"/products"} style={{ textDecoration: "none" }}>
                    <li>
                        <Icons.Store className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <Icons.CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <Icons.LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <Icons.InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <Icons.NotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <Icons.SettingsSystemDaydreamOutlined className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Icons.PsychologyOutlined className="icon" />
                        <span>Logs</span>
                    </li>
                    <p className="title">MAIN</p>
                    <li>
                        <Icons.SettingsSystemDaydreamOutlined className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Icons.AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <Icons.ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
            </div>
        </div>
    );
};

export default Sidebar;