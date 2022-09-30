import React from 'react'
import {useNavigate} from "react-router-dom"
import {ReactNavbar} from "overlay-navbar"
import {FaUserAlt} from "react-icons/fa"

import Logo from "../../Images/Logo.png"
import {Navbar} from 'react-responsive-navbar-overlay';

import './Header.css'


const Header = () => {
    let theme_color = "white"

    let navigate = useNavigate();

  return (
    <ReactNavbar
    // navbar color (Other components inherites background color from the precious component)
    navColor1={theme_color}
    navColor2="hsl(235, 100%, 10%)"
    burgerColor = "hsl(239, 42%, 63%)"
    burgerColorHover="hsl(239, 42%, 52%)"
    // margin
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"

    // Text and its link
    link1Text = "Home"
    link2Text = "Projects"
    link3Text = "About"
    link4Text = "Contact"
    link1Url = "./Home"
    link2Url = "./Projects"
    link3Url = "./About"
    link4Url = "./Contact"
    link1Size = "1.5rem"
    link1Padding = "4vmax"

    //Link color
    link1Color = "hsl(198, 100%, 59%)"
    link1ColorHover = "hsl(198, 100%, 29%)"

    // Main Logo
    logo={Logo}
    logoWidth = "250px"
    logoHoverColor = "hsl(196, 100%, 30%)"

    // profile icon
    profileIcon = {true}
    ProfileIconElement = {FaUserAlt}
    profileIconColorHover = "hsl(196, 100%, 59%)"
    />


//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>

  )
}

export default Header