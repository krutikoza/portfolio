import React from 'react'
import "./Footer.css"
import Typography from '@mui/material/Typography';
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <div className="footerBackground">
        <div>
            <Typography variant="h5" color="white">About Me</Typography>
            <Typography color="white"> Hello, My name is Krutik. I am a software developer.</Typography>

            <Link to="/About"></Link>
        </div>

        <div>
            <Typography variant="h6" color="white">Social Media/Contact</Typography>
            <a href="https://github.com/krutikoza">
                <AiFillGithub />
            </a>
            <a href="https://github.com/krutikoza">
                <AiOutlineMail />
            </a>
            <a href="https://github.com/krutikoza">
                <AiOutlineInstagram />
            </a>
        </div>
    </div>
  )
}

export default Footer
