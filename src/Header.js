import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';

import { ArrowDropDown } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img alt="gmail_logo" src="https://drive.google.com/uc?export=download&id=1LvRaWDvcVanWVK39uCumA73TAnssOH6g" />
            </div>
            <div className="header_mid">
                <SearchIcon />
                <input placeholder="Seach mail" type="text" />
                <ArrowDropDown />
            </div>
            <div className="header_right">
                <IconButton> <AppsIcon /> </IconButton>
                <IconButton> <NotificationsIcon /> </IconButton>
                <Avatar />
            </div>

        </div>
    )
}

export default Header
