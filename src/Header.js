import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
// eslint-disable-next-line
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div classname="header">
            <h2> I am a header </h2>
            <MenuIcon />

            <img 
            classname="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="" />

            <input type="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
        </div>
    )
}

export default Header
