import React, {useEffect} from 'react'


import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

import "./Home.css"

const Home = () => {


  useEffect(() => {
    // create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)

    // create a canvas and render
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({canvas});

    // create geometry(structure) and material(material to be used to render that structuer)
    const geometry = new THREE.SphereGeometry(3, 64, 64)
    const material1 = new THREE.MeshStandardMaterial({color : 0xffffff})

    // creating a light, as we are useng meshstandardMaterial(It reacts on lighting)
    const pointlight = new THREE.PointLight(0xfffffff,1)
    pointlight.position.z = 10
    // create an object to render
    const planet1 = new THREE.Mesh(geometry, material1);

    //create controller
    const controls = new OrbitControls(camera, renderer.domElement)


    // add that object into our scene
    scene.add(planet1)
    scene.add(pointlight)

    camera.position.z = 20

    // animate it to rotate (render)
    const animate = () => {
      requestAnimationFrame(animate);
      planet1.rotation.x += 0.05;
      planet1.rotation.y += 0.05;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);

    }

    animate()
  }, [])


  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  )
}

export default Home