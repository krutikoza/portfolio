
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home'
import About from './Pages/About/About'

import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Header from './Pages/Header/Header.js'
import Footer from './Pages/Footer/Footer.jsx'
import Timeline from './Pages/Admin/Timeline'


import {useEffect} from "react";
import {useDispatch, useSelector } from "react-redux"
import {getUser, loadUser} from "./actions/user"
import AdminPanel from "./Pages/Admin/AdminPanel"
import Project from "./Pages/Admin/Project"

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch]);

  return (
    <div>

    {/* Routing */}
      <Router>

        {loading?<div>Loading...</div>:(
          <>
        {<Header />}

        <Routes>
        
          <Route path="/" element={<Home timelines={user.timelines} skills={user.skills}/>}/> 
          
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={isAuthenticated?<AdminPanel/>:<Login/>}/>
          <Route path="/admin/timeline" element={isAuthenticated?<Timeline/>:<Login/>}/>
          <Route path="/admin/project" element={isAuthenticated?<Project/>:<Login/>}/>
        </Routes>
        </>)}

      </Router>
  
    <Footer />

    </div>

  );
}

export default App;