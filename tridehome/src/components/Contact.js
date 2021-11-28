import '../App.css'
import Fade from 'react-reveal/Fade'
const Contact = () => {
    return ( 

        <Fade cascade>
        <div id="contact" className="contact-header">
            <div className="title"><h1>Contact</h1></div>
            <input placeholder="Full Name" required/>
            <input placeholder="Type Your Email" required/>
            <textarea placeholder="Write Here ..."></textarea>
            <a href="/">Send</a>
            </div>
          
            </Fade>
           
     );
}
 
export default Contact;