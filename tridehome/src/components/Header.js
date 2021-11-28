import {useState} from 'react';
import '../App.css'
import Zoom from 'react-reveal/Zoom'
import Navbar from './Navbar';
const Header = () => {
    return ( 
       <>
       <div id="header" className="header-container">
           <Navbar />
           <Zoom cascade>
       <div className="header-text">
           <h2>STEP UP YOUR </h2>
           <h1><span>RIDES</span> WITH US</h1>
           <h3>JOIN THE WORLD’S LARGEST
RIDERS </h3>
           <a href="https://localhost/login/">Join US</a>
       </div>
       </Zoom>
       </div>
       </>
     );
}
 
export default Header;