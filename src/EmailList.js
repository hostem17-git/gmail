import React from 'react'
import './EmailList.css'
import Checkbox from '@material-ui/core/Checkbox'
import { IconButton } from '@material-ui/core'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow'

function EmailList() {
    return (
        <div className="email_list">
            <div className="email_list_options">
                <div className="emaillist_options_left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_options_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="email_list_sections">
                <Section Icon={InboxIcon} title="Primary" color="rgb(214, 74, 74)" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="email_lists_list">
                <EmailRow id="test" title="title" subject="subject" description="description description description description description description description description description description description description description description description description description description description description description description description description description description description " time="times" />
                <EmailRow id="test" title="title" subject="subject" description="description description description description description description description description description description description description description description description description description description description description description description description description description description description " time="times" />
                <EmailRow id="test" title="title" subject="subject" description="description description description description description description description description description description description description description description description description description description description description description description description description description description description " time="times" />
            </div>
        </div>
    )
}

export default EmailList
