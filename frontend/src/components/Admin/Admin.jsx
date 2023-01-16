import SideBar from "./SideBar";
import "./admin.scss";
import { FaBars } from "react-icons/fa"
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleOnclick = () => {
        // console.log('test')
        setCollapsed(!collapsed)
    }
    return ( 
        <div className="admin-container">
        <div className="admin-sidebar">            
                <SideBar collapsed={collapsed}/>             
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => handleOnclick()}/> 
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Admin;