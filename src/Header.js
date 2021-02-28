import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
// eslint-disable-next-line
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div classname="header">
            {/* Left hand Side Header */}
            <MenuIcon />
            <img 
            classname="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="" />

            {/* Middle Side Header */}
            <input type="text" />
            <SearchIcon />

            
            {/* Right Side Header */}
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar />
        </div>
    )
}

export default Header
