
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Projects from './Pages/Projects'

import Header from './Pages/Header/Header.js'
import Footer from './Pages/Footer/Footer.jsx'





function App() {
  



  return (
    <div>
      


    
    

    {/* Routing */}
      <Router>

        
        {<Header />}

        <Routes>
        
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </Router>
  
    <Footer />

    </div>

  );
}

export default App;