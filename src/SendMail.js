import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from "./features/mailSlice"

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    const dispatch = useDispatch();
    return (
        <div className="send_mail">
            <div onClick={() => dispatch(closeSendMessage())} className="send_mail_header">
                <h3>New Message</h3>
                <CloseIcon className="send_mail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    name="to"
                    type="text"
                    placeholder="Recipients"
                    {...register('to', { required: true })}
                />
                {errors.to && <p className="send_mail_error">Recipients Required</p>}

                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                ></input>
                {errors.subject && <p className="send_mail_error">Subject Required</p>}


                <textarea
                    name="message"
                    type="text"
                    className="send_mail_message"
                    {...register("message", { required: true })}
                />
                {errors.message && <p className="send_mail_error">Message Required</p>}

                <div className="send_mail_options">
                    <Button type="submit" className="send_mail_button">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
