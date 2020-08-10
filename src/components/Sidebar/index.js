import React from "react";
import "./style.css";
import Card from "../UI/Card";

const Sidebar = () => {
    return (
        <>
        <div className="sidebarContainer">
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}> 
            <div className="cardHeader">
                <span>About Us</span>
            </div>
            <div className="profileImageContainer">
                <img src={require('../../blogPostImages/4.jpg')} alt="About Image" />
                </div>
            </Card>

            <Card > 
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
            <div className="profileImageContainer">
                <img src={require('../../blogPostImages/5.jpg')} alt="social Image" />
                </div>
            </Card>
            </div>
        </>
    )
}
export default Sidebar;