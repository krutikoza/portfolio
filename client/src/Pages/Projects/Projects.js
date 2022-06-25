
import React, {useEffect, useState, useRef } from 'react';

import {AiOutlineProject} from "react-icons/ai";

import { Button, Typography } from '@mui/material';
import {Delete} from "@mui/icons-material";
import "./Projects.css"

import styled from 'styled-components'

import sampleImage from "../../Images/react.png"

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";





const Projects = () => {
    const ref = useRef(null);

    const slideLeft = () =>{
        const slide = document.getElementById("project").scrollLeft -= 250;
    }
    const slideRight = () =>{
        const slide = document.getElementById("project").scrollLeft += 250;
        
    }
    const arr = [1,2,3,4,5,6]
    return(
    <div className="main">
        <div className="heading">Projects</div>
        <div className="main-slider-container">
            <AiFillLeftCircle size={100} className="leftArrow" onClick={slideLeft}/>
            
                <div className="project" id="project">
                                    
                        {arr.map((index) =>(
                            <Card />
                        ))}

                </div>
            
            <AiFillRightCircle size={100} className="rightArrow" onClick={slideRight}/>
        </div>
    </div>
    )
}



export function Card(){

    const [flip, setFlip] = useState(false)

    return(
        <div className="card">
            <div className={flip === true ? 'card_inner is-flipped':"card_inner"} onClick={() => setFlip(!flip)}>
                <div className="card_face card_face_front" >
                    <h2>Developer card</h2>
                </div>
                <div className="card_face card_face_back" >
                    <div className="card_content">
                        <div className="card_header">
                            <img className ="pp"/>
                            <h2>Krutik oza</h2>
                        </div>
                        <div className="card_body">
                            <h3>Header of the card</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Projects

