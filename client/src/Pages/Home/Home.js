import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useRef} from 'react';


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
import {useSelector} from "react-redux"

import { SiReact, SiPython, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiNumpy } from "react-icons/si";
import { SchemaTypes } from 'mongoose'

import Projects from "../Projects/Projects"



import videobg from "../../Images/HomepageBackground.mp4"
import { Button } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';



const Home = (timelines, skills) => {


  // useEffect(() => {

  //   // Create a texture loader for our background planets.
  //   const textureLoader = new THREE.TextureLoader();

  //   const sunTexture = textureLoader.load(sunImage)
  //   const mercuryTexture = textureLoader.load(mercuryImage)
  //   const backgroundTexture = textureLoader.load(spaceBackground)

  //   // create a scene and camera
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight, 0.1, 1000)

  //   // create a canvas and render
  //   const canvas = document.querySelector(".homeCanvas");
  //   const renderer = new THREE.WebGLRenderer({canvas});

  //   // create geometry(structure) and material(material to be used to render that structuer)
  //   const geometry = new THREE.SphereGeometry(13, 64, 64)
  //   const material1 = new THREE.MeshBasicMaterial({map : sunTexture})

  //   const mercuryGeometry = new THREE.SphereGeometry(3,64,64)
  //   const mercuryMaterial = new THREE.MeshStandardMaterial({map : mercuryTexture})



  //   // creating a light, as we are useng meshstandardMaterial(It reacts on lighting)
  //   const pointlight = new THREE.PointLight(0xFAF4C3,1)
  //   const pointlight2 = new THREE.PointLight(0xfffffff,0.2)

  //   pointlight.position.set(15,5,5)
  //   pointlight2.position.set(-15,5,5)

  //   // pointlight.position.x += 1


  //   // create an object to render
  //   const sun = new THREE.Mesh(geometry, material1);
  //   const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
  //   sun.position.x += 15
  //   sun.position.y += 5
  //   mercury.position.x -= 7
  //   mercury.position.y -= 3
    

  //   //create controller
  //   //const controls = new OrbitControls(camera, renderer.domElement)

  //   // light helper
  //   //const lightHelper = new THREE.PointLightHelper(pointlight)

  //   // add that object into our scene
  //   scene.add(sun)
  //   scene.add(mercury)
  //   scene.add(pointlight)
  //   scene.add(pointlight2)
  //   scene.background = backgroundTexture

  //   window.addEventListener("mousemove", (e) => {
      
  //     camera.position.x = ( e.clientX - window.innerWidth/2 )* 0.001
  //     camera.position.y = - ( e.clientY - window.innerHeight/2 )* 0.001
  //   })
  //   //scene.add(lightHelper)
  //   camera.position.z = 20

  //   // animate it to rotate (render)
  //   const animate = () => {
  //     requestAnimationFrame(animate);
      
      
  //     sun.rotation.y += 0.0008;
  //     mercury.rotation.y += 0.005;
      
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.render(scene,camera);

  //   }

  //   animate();

  //   window.addEventListener("scroll",(e)=>{
  //     camera.rotation.y=window.scrollY*0.001;
  //     camera.rotation.z=window.scrollY*0.001;
  //   })
  // }, [])


  // useEffect(() => {

  //   // Create a texture loader for our cube.
  //   // const textureLoader = new THREE.TextureLoader();

  //   const textureLoader = new THREE.TextureLoader();

  //   const cubeTexture = [
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(ReactImage)
  //     }),
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(pythonImage)
  //     }),
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(mdbImage)
  //     }),
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(jsImage)
  //     }),
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(html5)
  //     }),
  //     new THREE.MeshBasicMaterial({
  //       map: textureLoader.load(threejs)
  //     }),
  //   ]

  //   // create a scene and camera
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(120, window.innerWidth/ window.innerHeight, 0.1, 1000)

  //   // create a canvas and render
  //   const canvas = document.querySelector(".homeSkillsCanvas");
  //   const renderer = new THREE.WebGLRenderer({canvas});

  //   renderer.shadowMap.enabled = true;
  //   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
  //   // create geometry(structure) and material(material to be used to render that structuer)
  //   const geometry = new THREE.BoxGeometry( 10, 10, 10 );
  //   const material = new THREE.MeshFaceMaterial( cubeTexture, { transparent: true, opacity: 0.9} );

  //   const geometryBase = new THREE.BoxGeometry( 1000, 1, 1000 );
  //   const materialBase = new THREE.MeshStandardMaterial( {color: 0Xa000ff} );
  //   const materialWall = new THREE.MeshStandardMaterial( {color: 0Xa000ff} );
    
  //   const pointlight = new THREE.PointLight(0xFFFFFF,1)
  //   pointlight.castShadow = true;
    
  //   pointlight.position.y += 30
  //   pointlight.position.z += 5


  //   // create an object to render
  //   const cube = new THREE.Mesh( geometry, material );
  //   const base = new THREE.Mesh( geometryBase, materialBase );
  //   const wall = new THREE.Mesh( geometryBase, materialWall );
    
  //   // shadow
  //   cube.castShadow = true;
    

    
  //   base.receiveShadow = true;
    
  //   //create controller
  //   //const controls = new OrbitControls(camera, renderer.domElement)

  //   // light helper
  //   //const lightHelper = new THREE.PointLightHelper(pointlight)

  //   // add that object into our scene
  //   scene.add(cube)
  //   scene.add(base)
  //   scene.add(wall)
  //   scene.add(pointlight)
    
  //   //scene.add(lightHelper)

    
    
  //   camera.position.z = 35
  //   base.position.y = -10
  //   cube.rotation.x += 5;
  //   wall.position.y += 70
  //   function animate() {
      
  //     requestAnimationFrame( animate );
      
  //     cube.rotation.y += 0.010;
  //     cube.rotation.x += 0.008;
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     renderer.render(scene,camera);
  //   }
  //   animate();
    

  // }, [])



  const navigate = useNavigate();

  const {user} = useSelector((state) => state.user)
  
    const ref = useRef(null);



    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  return (
    <div className="home">
    <div className="welcomeText">
        <div className="welcome">KRUTIK OZA</div>
    </div>

<div class="parallax">
  
    

    <div class="parallax__layer parallax__layer__0">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
    </div>
    <div class="parallax__layer parallax__layer__1">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
    </div>
    <div class="parallax__layer parallax__layer__2">
      
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
    </div>
    <div class="parallax__layer parallax__layer__3">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
    </div>
    <div class="parallax__layer parallax__layer__4">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
    </div>
    <div class="parallax__layer parallax__layer__5">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
    </div>
    
    <div class="parallax__layer parallax__layer__6">
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
    </div>
    
    <div class="parallax__cover">

      <div className="homeContainer">
        <TimeLine timelines = {user.timeline} />
      </div>

      <div>
        <Projects projects = {user.projects}/>
      </div>

    </div>
</div>



 {/* <video src={videobg} autoplay loop muted /> */}


      <div >
          {/* <video autoPlay loop muted>
            <source src={videobg} type="video/mp4"></source>
          </video>
         */}

        {/* <canvas className="homeCanvas"></canvas> */}
        <div>
          
          {/* <Typography variant="h1">
            <p>K</p>
            <p>R</p>
            <p>U</p>
            <p>T</p>
            <p>I</p>
            <p>K</p>
          </Typography>

          <div className="homeCanvasBox">
            <b className="display-1"><strong>Full Stack Developer</strong></b>
            <b className="display-1"><strong>Programmer</strong></b>
            <b className="display-1"><strong>Educator</strong></b>
            <b className="display-1"><strong>E</strong></b>
          </div>
          <div className="homeScroll"> */}
          {/* <BsFillMouse2Fill onClick={() => window.scrollBy(0, window.innerHeight-window.pageYOffset)}/> */}

          {/* <BsFillMouse2Fill onClick={handleClick}/> */}

          
          {/* </div> */}
        </div>
      
      
      </div>


      
        {/* <div className="homeContainer" ref={ref}> */}
        {/* <div>
           <TimeLine timelines = {user.timeline} />
        </div> */}

  

      {/* <div className = "homeSkills"> */}
        {/* <Typography variant="h3">SKILLS</Typography> */}

        {/* <canvas shadowMap className="homeSkillsCanvas"></canvas> */}
       

        
        
        

      {/* </div>  */}
      
      {/* <div className="Projects"> */}
      {/* <div>
        <Projects projects = {user.projects}/>
      </div> */}


      {/* <div className="homeSkillsBox">
          <SiReact />
          <SiMongodb />
          <SiNodedotjs />
          <SiHtml5 />
          <SiCss3 />
          <SiExpress />
          <SiPython />
          <SiNumpy />
        </div> */}

    {/* <div className="aboutButton">
      <Button className="aboutButtonin" sx={{ color: 'white',  borderColor: 'green', marginLeft:"30px" }} size="large" onClick={()=>{navigate("/about")}}><b>About Page</b></Button>
    </div> */}
     
    </div>
  )
}

export default Home