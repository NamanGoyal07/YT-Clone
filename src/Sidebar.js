import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubsciptionsIcon from "@material-ui/icons/Subscriptions";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h2>This is the sidebar</h2> */}
            <SidebarRow Icon = {HomeIcon} title = "Home"/>
            <SidebarRow Icon = {WhatshotIcon} title = "Trending"/>
            <SidebarRow Icon = {SubsciptionsIcon} title = "Subsciption"/>
        </div>
    )
}

export default Sidebar