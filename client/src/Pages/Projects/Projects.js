
import React, {useEffect, useState, useRef } from 'react';

import {AiOutlineProject} from "react-icons/ai";

import { Button, Typography } from '@mui/material';
import {Delete} from "@mui/icons-material";
import "./Projects.css"

import styled from 'styled-components'

import sampleImage from "../../Images/react.png"


import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import { GoLogoGithub } from "react-icons/go";



const Projects = () => {
    const ref = useRef(null);
    
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
    
    const arr = [1,2,3,4, 5]
    return(
    <div className="main">
        <div className="heading">Projects</div>
        <div className="main-slider-container">
            {scrollPosition != 0?<AiFillLeftCircle  className="leftArrow" onClick={slideLeft}/>: <></>}
            
                <div className="project" id="project">
                        
                        {arr.map((index) =>(
                            <Card />
                        ))}

                </div>

            {scrollPositionRight?<AiFillRightCircle className="rightArrow" onClick={slideRight}/>:<></>}
        </div>
    </div>
    )
}



export function Card(){

    const [flip, setFlip] = useState(false)

    return(
        // <div className="card">
        //     <div className={flip === true ? 'card_inner is-flipped':"card_inner"} onClick={() => setFlip(!flip)}>
        //         <div className="card_face card_face_front" >
        //             <div className="frontTitle">Project Title</div>
        //             <img className ="pp"/>

        //             <h2>Click for more details</h2>
        //         </div>
        //         <div className="card_face card_face_back" >
        //             <div className="card_content">
        //                 <div className="card_header">
                            
        //                     <h2>Project Name</h2>
        //                 </div>
        //                 <div className="card_body">
        //                     <h3>About The Project</h3>
        //                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        //                         Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s, 
        //                         when an unknown printer took a galley of type and scrambled 
        //                         it to make a type specimen book.</p>
        //                     <b>Technologies/Stack:</b>
        //                     <p> React, MongoDB, Python, Express, Nodejs</p>
        //                     <button>Project page</button>
        //                     <button>Github</button>
                            
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        <div class="container d-flex align-items-center justify-content-center flex-wrap">
            <div class="box">
                <div class="body">
                    <div class="imgContainer" >
                    

                        {/* <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">*/}
                        <div>
                        <h3>About The Project</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                 Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s, 
                            </p>
                             <b>Technologies/Stack:</b>
                             <p> React, MongoDB, Python, Express, Nodejs</p>
                             
                        </div>
                        
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                        <div>
                            <h3 class="text-white fs-5">Post Title</h3>
                            <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                            {/* <button type="button" class="btn btn-light" onClick={()=>console.log("Button clicked")}>Project page</button> */}
                            <GoLogoGithub class="gitlogo"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Projects

