
import React from 'react';

import {AiOutlineProject} from "react-icons/ai";

import { Button, Typography } from '@mui/material';
import {Delete} from "@mui/icons-material";
import "./Projects.css"

import sampleImage from "../../Images/react.png"

const ProjectCard = (

    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false
) =>{
    return(
        <>
            <a href="" className="projectCard">
                <div>
                    <img src={projectImage} alt="Project"/>
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                
                <div>
                <Typography variant="h5">About Project</Typography>
                <Typography variant="h5">D:{description}</Typography>
                <Typography variant="h5">Tech Stack: {technologies}</Typography>

                </div>

            </a>
            {isAdmin && (
                <Button>
                    <Delete />
                </Button>
            )}
        </>
    )
}


const Projects = () => {

    const projects = [1,2,3,4,5];
    return(
        // <div className="projects">
            
        //     <Typography variant="h3">
        //         Projects <AiOutlineProject />
        //     </Typography>

        //     <div className="ProjectWrapper">
        //         {projects.map((project,index) =>(
        //             <ProjectCard 
        //             url = "https://github.com/krutikoza"
        //             projectImage = "<sampleImage />"
        //             projectTitle = "Project123"
        //             description = "Sample project 123"
        //             technologies = "React, MongoDb, Express"
        //             />
        //         ))}
        //     </div>

        // </div>

        
        <div className="main">
            <div className = "wrapper">
                {projects.map((project,index) => (
                       <Card
                       url = "https://github.com/krutikoza"
                        projectImage = {sampleImage}
                        projectTitle = "Project Name"
                        description = "This project is about creating things which you cannot see!!"
                        technologies = "MongoDb, react, nodejs, python, aws"
                       /> 
                ))}
                
            </div>
            
        </div>
    )
}


function Card(values)
    
    {
        console.log(values.projectTitle)
    return(
        <div className="card">
            <div className="card_body">
                <img className="projectImage" src={values.projectImage} />
                <h3 className="card_title">{values.projectTitle}</h3>
                <p className="card_description">{values.description}</p>
                <p className="card_technologies">Technologies: </p>
                <p>{values.technologies}</p>
            </div>
            <button className="card_button">View code on GitHub</button>
            {values.isAdmin && (
                <Button>
                    <Delete />
                </Button>
            )}
        </div>
    )
}
export default Projects