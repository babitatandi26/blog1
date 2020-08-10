import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SideData from "./SideData";

const Sidebar = (props) => {

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
    return (
        <>
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>

    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="">
        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[0]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[1]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[2]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[3]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[4]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[5]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[6]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[7]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[8]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[9]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[10]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[11]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[12]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[13]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[13]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[14]}
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <HomeOutlinedIcon className="SideIcon" style={{fontSize:40}}/>
            </NavIcon>
            <NavText>
                {navItem[15]}
            </NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>



        </>
    )
}
export default Sidebar;