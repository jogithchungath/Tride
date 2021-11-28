import '../App.css'
import logo from '../images/logo.png'
import {useState} from 'react'
import menuopen from '../images/menu.svg'
import close from '../images/close.png'
const Navbar = () => {
    const [navactive,setnav]=useState(false);
    const scrolling = ()=>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',scrolling);
    const [right,setright]=useState(false);
     const responsive = () =>{
         setright(!right);
     }
    return (  
        <nav className={navactive ? "active" : null}>
           <div className="logo">
            <img  src={logo} width="200" height="200" />
           </div>
           <div className="nav-center" style={{right: right ? "0%" : "-100%"}}>
               <li><a href="#header">Home</a></li>
               <li><a href="#features">Features</a></li>
               <li><a href="#offer">Service</a></li>
               <li><a href="#about">About Us</a></li>
              
               <li><a href="#contact">Contact The Team </a></li>
               <li><a href="https://localhost/login-registration/">Login </a></li>
           </div>
           <div className="btn" id="btn">
               <img src={!right ? menuopen : close} onClick={responsive}/> 
           </div>
       </nav>
    );
}
 
export default Navbar;