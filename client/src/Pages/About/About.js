import React, {useEffect, useState} from 'react'
import {Typography} from "@mui/material"



import {useDispatch, useSelector} from "react-redux"
// import * as THREE from "three"

// import sunImage from "../../Images/sun.jpg"
// import mercuryImage from "../../Images/mercury.jpg"
// import spaceBackground from "../../Images/spaceBackground.jpg"

import aboutb from "./aboutB.mp4"



import "./About.css"

const About = () => { 

    const {user} = useSelector((state) => state.user)

    console.log(user)

    return (
        <div className="about">

        <video id="bg" autoPlay loop muted>
          <source src={aboutb} type="video/mp4"></source>
        </video>
            <div className="canvas">
                <canvas className="homeCanvas"></canvas>
            </div>

            <div className= "dataContainer">
                
                <div className="aboutContainer1">
                    {/* <Typography variant ="h2">{user.name}</Typography> */}
                    {/* <Typography>{user.about.description}</Typography> */}
                    <div className="heading">About Me</div>
                    <div className="discription">This is some discription about me and what i do all day which is nothing and i dont even know why I am writing this as no one is going to read it but still i have to do something because doing nothing means I am dead and writing this is still better than dead</div>
                    
                </div>
                {/* <div className="aboutContainer2">
                    {user.about.quote}
                </div> */}
            </div>

        </div>
    )
}

export default About