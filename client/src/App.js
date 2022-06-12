
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home'
import About from './Pages/About/About'

import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Header from './Pages/Header/Header.js'
import Footer from './Pages/Footer/Footer.jsx'


import {useEffect} from "react";
import {useDispatch} from "react-redux"
import {getUser, loadUser} from "./actions/user"

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch]);

  return (
    <div>

    {/* Routing */}
      <Router>

        
        {<Header />}

        <Routes>
        
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login />}/>
          
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
  
    <Footer />

    </div>

  );
}

export default App;