import React, {useEffect} from 'react'


import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {Typography} from "@mui/material"

import "./Home.css"
import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import spaceBackground from "../../Images/spaceBackground.jpg"
import TimeLine from "../TimeLine/TimeLine"

import ReactImage from "../../Images/react.png"
import pythonImage from "../../Images/python.png"
import mdbImage from "../../Images/mdb.png"
import jsImage from "../../Images/JavaScript.png"
import html5 from "../../Images/html5.png"
import threejs from "../../Images/threejs.png"
import {BsFillMouse2Fill} from "react-icons/bs";

import { SiReact, SiPython, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiNumpy } from "react-icons/si";
import { SchemaTypes } from 'mongoose'

const Home = (timelines, skills) => {


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

    window.addEventListener("mousemove", (e) => {
      
      camera.position.x = ( e.clientX - window.innerWidth/2 )* 0.001
      camera.position.y = - ( e.clientY - window.innerHeight/2 )* 0.001
    })
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

    animate();

    window.addEventListener("scroll",(e)=>{
      camera.rotation.y=window.scrollY*0.001;
      camera.rotation.z=window.scrollY*0.001;
    })
  }, [])


  useEffect(() => {

    // Create a texture loader for our cube.
    // const textureLoader = new THREE.TextureLoader();

    const textureLoader = new THREE.TextureLoader();

    const cubeTexture = [
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(ReactImage)
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(pythonImage)
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(mdbImage)
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(jsImage)
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(html5)
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(threejs)
      }),
    ]

    // create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(120, window.innerWidth/ window.innerHeight, 0.1, 1000)

    // create a canvas and render
    const canvas = document.querySelector(".homeSkillsCanvas");
    const renderer = new THREE.WebGLRenderer({canvas});

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // create geometry(structure) and material(material to be used to render that structuer)
    const geometry = new THREE.BoxGeometry( 10, 10, 10 );
    const material = new THREE.MeshFaceMaterial( cubeTexture, { transparent: true, opacity: 0.9} );

    const geometryBase = new THREE.BoxGeometry( 1000, 1, 1000 );
    const materialBase = new THREE.MeshStandardMaterial( {color: 0Xa000ff} );
    const materialWall = new THREE.MeshStandardMaterial( {color: 0Xa000ff} );
    
    const pointlight = new THREE.PointLight(0xFFFFFF,1)
    pointlight.castShadow = true;
    
    pointlight.position.y += 30
    pointlight.position.z += 5


    // create an object to render
    const cube = new THREE.Mesh( geometry, material );
    const base = new THREE.Mesh( geometryBase, materialBase );
    const wall = new THREE.Mesh( geometryBase, materialWall );
    
    // shadow
    cube.castShadow = true;
    

    
    base.receiveShadow = true;
    
    //create controller
    //const controls = new OrbitControls(camera, renderer.domElement)

    // light helper
    //const lightHelper = new THREE.PointLightHelper(pointlight)

    // add that object into our scene
    scene.add(cube)
    scene.add(base)
    scene.add(wall)
    scene.add(pointlight)
    
    //scene.add(lightHelper)

    
    
    camera.position.z = 35
    base.position.y = -10
    cube.rotation.x += 5;
    wall.position.y += 70
    function animate() {
      
      requestAnimationFrame( animate );
      
      cube.rotation.y += 0.010;
      cube.rotation.x += 0.008;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
    }
    animate();
    

  }, [])


  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        
        <Typography variant="h1">
          <p>K</p>
          <p>R</p>
          <p>U</p>
          <p>T</p>
          <p>I</p>
          <p>K</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">Developer</Typography>
          <Typography variant="h2">Create</Typography>
          <Typography variant="h2">Create</Typography>
          <Typography variant="h2">Create</Typography>
        </div>
        <div className="homeScroll">
        <BsFillMouse2Fill/>
        </div>
      </div>
      

      <div className="homeContainer">
        
        <Typography variant="h3"> TIMELINE</Typography>
        

        <TimeLine timelines = {[1,2,3,4]} />
      </div>

      

      <div className = "homeSkills">
        {/* <Typography variant="h3">SKILLS</Typography> */}

        <canvas shadowMap className="homeSkillsCanvas"></canvas>
       

        
        
        

      </div> 
      <div className = "skillList">

      <div className="homeSkillsBox">
          <SiReact />
          <SiMongodb />
          <SiNodedotjs />
          <SiHtml5 />
          <SiCss3 />
          <SiExpress />
          <SiPython />
          <SiNumpy />
        </div>
      
      </div>
      
    </div>
  )
}

export default Home