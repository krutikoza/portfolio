
import React from 'react';

import {AiOutlineProject} from "react-icons/ai";

import { Button, Typography } from '@mui/material';
import {Delete} from "@mui/icons-material";
import "./Projects.css"

import styled from 'styled-components'

import sampleImage from "../../Images/react.png"

const Container = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const Card1 = styled.div`
flex-basis: 100%;
max-width: 220px; 
`;

const CardTemplate = styled('div')(() => ({
    width: '100%',
    backfaceVisibility: 'hidden',
    height:'400px',
    borderRadius: '6px',
    TransformStyle: 'preserve-3d',
}))


const cardFront = styled(CardTemplate)(() => ({
    backgroundSize: 'cover',
    backgroundPosition:'center'

}))

const cardBack = styled(CardTemplate)(() => ({

}))

const CardContent = styled('div')(()=>({
    top:'50%', 
    position:'absolute',
    left:0,
    width: '100%',
    backfaceVisibility: 'hidden',
}))

const Projects = () => {

    
    return(
        <div className="cardView">
            <h1>3D cards</h1>
            <Container>
                <Card1>
                    <cardFront>
                        <CardContent><h1>Front</h1></CardContent>
                    </cardFront>
                    <cardBack>
                        <CardContent><h1>Back</h1></CardContent>
                    </cardBack>
                </Card1>
            </Container>
        </div>
    )
}


export function Card(values){
    return(
        <>Cards</>
    )
}


export default Projects

