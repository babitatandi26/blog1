import React from "react";
import { NavLink } from "react-router-dom";

const HoriNav = (props) => {

    const navItem = [
        "Front Office",
        "OPD-Out Patient",
        "IPD-In Patient",
        "Pharmacy",
        "Pathology",
        "Radiology",
        "Operation Theatre",
        "Blood Bank",
        "TPA Management",
        "Finance",
        "Ambulance",
        "Birth & Death Record",
        "Human Resource",
        "Messaging",
        "Download Center",
        "Inventory",
        "Front CMS",
        "Reports",
        "Setup"];

    return(
        <>
            <div className="Nav">
                 <a>{navItem}</a>
                </div>
        </>
    );
};
export default HoriNav;