import React, {useEffect} from 'react'


import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {Typography} from "@mui/material"

import "./Home.css"
import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import spaceBackground from "../../Images/spaceBackground.jpg"
import TimeLine from "../TimeLine/TimeLine"
import { SiReact, SiPython, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiExpress } from "react-icons/si";

const Home = () => {


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


  useEffect(() => {

    // Create a texture loader for our cube.
    // const textureLoader = new THREE.TextureLoader();

    const textureLoader = new THREE.TextureLoader();

    const cubeTexture = [
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg")
      }),
    ]

    // create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth/ window.innerHeight, 0.1, 1000)

    // create a canvas and render
    const canvas = document.querySelector(".homeSkillsCanvas");
    const renderer = new THREE.WebGLRenderer({canvas});

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // create geometry(structure) and material(material to be used to render that structuer)
    const geometry = new THREE.BoxGeometry( 10, 10, 10 );
    const material = new THREE.MeshFaceMaterial( cubeTexture, { transparent: true, opacity: 0.9} );

    const geometryBase = new THREE.BoxGeometry( 1000, 1, 1000 );
    const materialBase = new THREE.MeshStandardMaterial( {color: 0X0D6393} );

    
    const pointlight = new THREE.PointLight(0xFFFFFF,1)
    pointlight.castShadow = true;
    
    pointlight.position.y += 30
    pointlight.position.z += 5


    // create an object to render
    const cube = new THREE.Mesh( geometry, material );
    const base = new THREE.Mesh( geometryBase, materialBase );
    
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
    scene.add(pointlight)
    //scene.add(lightHelper)

    
    camera.position.z = 35
    base.position.y = -10
    cube.rotation.x += 5;
    
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
          <SiPython />
          <SiMongodb />
          <SiNodedotjs />
          <SiHtml5 />
          <SiCss3 />
          <SiExpress />
        </div>
      
      </div>
      
    </div>
  )
}

export default Home