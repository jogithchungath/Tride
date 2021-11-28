import '../App.css'
import Slide from 'react-reveal/Slide'
import pic from '../images/about.png'
const About = () => {
    return (  
        <div id="about" className="about-container">
            <Slide left>
            <div className="imgleft">
             <img src={pic} />
            </div>
            </Slide>
            <Slide right>
            <div className="textright">
                <h2>LEARN MORE ABOUT US</h2>
                <p>TRide is a web app which is aimed not only to determine the destinations within the route but also to provide a wide range of facilities to the riders making their journey smooth.
                    The facilities include a summary of desired destinations,suggested stays,motels,garages and places of emergency like hospitals ,all the above mentioned features would be available as menu options ,These options won't restrict the users with itinerary planning, time management finance planning fuel management ,interaction with forums etc. </p>
                <a href="/">Read More</a>
            </div>
            </Slide>
        </div>
    );
}
 
export default About;