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
import { useState, useEffect } from 'react'
import EmailRow from './EmailRow'
import { db } from './firebase'

function EmailList() {
    const [emails, setemails] = useState([]);
    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setemails(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, [])

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
                {emails.map(({ id, data }) => (
                    <EmailRow
                        id={data.id}
                        key={data.id}
                        title={data.to}
                        subject={data.subject}
                        description={data.message}
                        time={new Date(data.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

            </div>
        </div>
    )
}

export default EmailList
