
import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

import {AiOutlineProject} from "react-icons/ai";

import { Button, Typography } from '@mui/material';
import {Delete} from "@mui/icons-material";
import "./Projects.css"

import styled from 'styled-components'

import sampleImage from "../../Images/react.png"


import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import { GoLogoGithub } from "react-icons/go";
import { useInView } from 'react-intersection-observer'
import {useAnimation, motion} from 'framer-motion'


const Projects = (projects) => {
    
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollPositionRight, setScrollPositionRight] = useState(true);
    const handleScroll = () => {
        const position = document.getElementById("project").scrollLeft;
        setScrollPosition(position);
        setScrollPositionRight(document.getElementById("project").scrollLeft+2 < document.getElementById("project").scrollWidth - document.getElementById("project").clientWidth)

      };

    useEffect(() => {
        document.getElementById("project").addEventListener("scroll", handleScroll);

    
    }, []);

    const slideLeft = () =>{
        const slide = document.getElementById("project").scrollLeft -= 250;
    }
    const slideRight = () =>{
        
        const slide = document.getElementById("project").scrollLeft += 250;
        
    }

    

    return(
    <div className="main">
        <b className="heading">Projects</b>
        <div className="main-slider-container">
            {scrollPosition != 0?<AiFillLeftCircle className="leftArrow" onClick={slideLeft}/>: <></>}
            
                <div className="project" id="project">
                        
                        {projects.projects.map((p) =>(
                            <Card project = {p}/>
                        ))}

                </div>
                
            {scrollPositionRight?<AiFillRightCircle className="rightArrow" onClick={slideRight}/>:<></>}
            
        </div>
    </div>
    )
}



export function Card(project){


    

    return(
        <div  class="container d-flex align-items-center justify-content-center flex-wrap">
            <div class="box">
                <div class="body">
                    <div class="imgContainer" >
                    

                        {/* <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">*/}
                        <div className="frontText">
                            
                            <h3>{project.project.Title}</h3>
                            <p>{project.project.Discription}
                            </p>
                             <b>Technologies/Stack:</b>
                             <p> {project.project.TechStack}</p>
                             
                        </div>
                        
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Details:</h3>
                            <p class="fs-6 text-white">{project.project.Details}</p>
                            

                            <a className="gitLogo" href={project.project.GitLink}>
                                <GoLogoGithub class="gitlogo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Projects

