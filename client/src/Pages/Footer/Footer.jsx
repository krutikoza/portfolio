import React from 'react'
import "./Footer.css"
import Typography from '@mui/material/Typography';
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="footerBackground">
        <div>
            <typography className="aboutText" variant="h5" color="white" onClick = {()=>navigate("/about")}>About Me</typography>
            <Typography color="white"> Hello, My name is Krutik. I am a software developer.</Typography>

            <Link to="/About"></Link>
        </div>

        <div>
            <Typography variant="h6" color="white">Social Media/Contact</Typography>
            <a href="https://github.com/krutikoza">
                <AiFillGithub color="white"
                onMouseOver={({target})=>target.style.color="6006DB"}
                onMouseOut={({target})=>target.style.color="f5f5f5"}/>
            </a>
            <a href="mailto:ozakrutik@gmail.com" >
                <AiOutlineMail color="white"
                onMouseOver={({target})=>target.style.color="6006DB"}
                onMouseOut={({target})=>target.style.color="f5f5f5"}/>
            </a>
            <a href="https://github.com/krutikoza">
                <AiOutlineInstagram color="white"
                onMouseOver={({target})=>target.style.color="6006DB"}
                onMouseOut={({target})=>target.style.color="f5f5f5"}/>
            </a>
            <a href="https://github.com/krutikoza">
                <AiOutlineLinkedin color="white"
                onMouseOver={({target})=>target.style.color="6006DB"}
                onMouseOut={({target})=>target.style.color="f5f5f5"}/>
            </a>
        </div>
    </div>
  )
}

export default Footer
