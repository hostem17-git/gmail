import React from 'react'
import "./EmailRow.css"
import { IconButton } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { useHistory } from "react-router-dom"
import { StarBorderOutlined } from '@material-ui/icons'

function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory();


    return (
        <div onClick={() => { history.push("./mail") }} className=" email_row">
            <div className="email_row_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
            </div>
            <h3 className="email_row_title">
                {title}
            </h3>
            <div className="email_row_message">
                <h4>{subject}<span className="email_row_description"> - {description}</span></h4>
            </div>
            <p className="email_row_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
