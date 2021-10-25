import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption';
import Inbox from '@material-ui/icons/Inbox';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StarIcon from '@material-ui/icons/Star'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

function Sidebar() {
    return (
        <div className="sidebar">
            <Button className='sidebar_compose'
                startIcon={<AddIcon fontSize='large' />} >
                Compose
            </Button>
            <SidebarOption Icon={Inbox} title="Inbox" number="56" selected={true} />
            <SidebarOption Icon={StarIcon} title="starred" number="40" />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="40" />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="40" />
            <SidebarOption Icon={NearMeIcon} title="Sent" number="40" />
            <SidebarOption Icon={NoteIcon} title="Drafts" number="40" />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number="40" />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>

    );
}

export default Sidebar
