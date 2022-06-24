import React, {useEffect, useState} from 'react'
import {Typography} from "@mui/material"



import {useDispatch, useSelector} from "react-redux"
// import * as THREE from "three"

// import sunImage from "../../Images/sun.jpg"
// import mercuryImage from "../../Images/mercury.jpg"
// import spaceBackground from "../../Images/spaceBackground.jpg"




import "./About.css"

const About = () => { 

    const {user} = useSelector((state) => state.user)

    console.log(user)

    return (
        <div className="about">

            <div className="canvas">
                <canvas className="homeCanvas"></canvas>
            </div>

            <div className= "dataContainer">
                
                <div className="aboutContainer1">
                    <Typography variant ="h4">{user.name}</Typography>
                    <Typography>{user.about.description}</Typography>
                    
                </div>
                <div className="aboutContainer2">
                    {user.about.quote}
                </div>
            </div>

        </div>
    )
}

export default About