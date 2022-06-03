import React, {useEffect} from 'react'
import {Typography} from "@mui/material"


import * as THREE from "three"

import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import spaceBackground from "../../Images/spaceBackground.jpg"

import "./About.css"

const About = () => { 

    useEffect(() => {

        // Create a texture loader for our background planets.
        const textureLoader = new THREE.TextureLoader();
    
        const sunTexture = textureLoader.load(sunImage)
        const mercuryTexture = textureLoader.load(mercuryImage)
        const backgroundTexture = textureLoader.load(spaceBackground)
    
        // create a scene and camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight, 0.1, 1000)
    
        // create a canvas and render
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({canvas});
    
        // create geometry(structure) and material(material to be used to render that structuer)
        const geometry = new THREE.SphereGeometry(13, 64, 64)
        const material1 = new THREE.MeshBasicMaterial({map : sunTexture})
    
        const mercuryGeometry = new THREE.SphereGeometry(3,64,64)
        const mercuryMaterial = new THREE.MeshStandardMaterial({map : mercuryTexture})
    
    
    
        // creating a light, as we are useng meshstandardMaterial(It reacts on lighting)
        const pointlight = new THREE.PointLight(0xFAF4C3,1)
        const pointlight2 = new THREE.PointLight(0xfffffff,0.2)
    
        pointlight.position.set(15,5,5)
        pointlight2.position.set(-15,5,5)
    
        // pointlight.position.x += 1
    
    
        // create an object to render
        const sun = new THREE.Mesh(geometry, material1);
        const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
        sun.position.x += 15
        sun.position.y += 5
        mercury.position.x -= 7
        mercury.position.y -= 3
        
    
        //create controller
        //const controls = new OrbitControls(camera, renderer.domElement)
    
        // light helper
        //const lightHelper = new THREE.PointLightHelper(pointlight)
    
        // add that object into our scene
        scene.add(sun)
        scene.add(mercury)
        scene.add(pointlight)
        scene.add(pointlight2)
        scene.background = backgroundTexture
    
        
        //scene.add(lightHelper)
        camera.position.z = 20
    
        // animate it to rotate (render)
        const animate = () => {
          requestAnimationFrame(animate);
          
          
          sun.rotation.y += 0.0008;
          mercury.rotation.y += 0.005;
          
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene,camera);
    
        }
    
        animate()
      }, [])

    return (
        <div className="about">

            <div className="canvas">
                <canvas className="homeCanvas"></canvas>
            </div>

            <div className= "dataContainer">
                
                <div className="aboutContainer1">
                    <Typography variant ="h4">Krutik Oza</Typography>
                    <Typography>I am a software developer</Typography>
                    <Typography>And pursuing my personal interest in developing reusable code deploying programs.</Typography>
                </div>
                <div className="aboutContainer2">
                    container2
                </div>
            </div>

        </div>
    )
}

export default About