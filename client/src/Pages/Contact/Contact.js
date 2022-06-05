import React, {useState} from 'react'

import {Typography,Button} from '@mui/material'
import { FcBusinessContact } from "react-icons/fc";
import './Contact.css'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const contactFormHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div className="contact">
        <div className="rightBar">
        </div>

        <div className="contactContainer">
            
            <form className="contactContainerForm" onSubmit={contactFormHandler}>
                <div>
                <Typography variant="h4">Contact <FcBusinessContact className="contactHead"/></Typography>
                
                </div>
                <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}>
                </input>
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}>
                </input>
                <textarea placeholder="Write your message" value={message} onChange={(e)=> setMessage(e.target.value)}>
                </textarea>
                <Button  variant="contained" >Submit</Button>    
            </form>
                
        </div>
        

    </div>
  )
}

export default Contact