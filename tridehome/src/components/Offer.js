import '../App.css'
import Countup from 'react-countup'
import  Zoom from 'react-reveal/Zoom'
const Offer = () => {
    return ( 
        <div id="offer" className="offer-container">
            <Zoom cascade>
        <div className="offer-text">
            
            <h1> Journey With Riders Across The Country</h1>
            <h3>The Road Isn't Long When You Have The Right Company!</h3>
            <a href="https://localhost/login/">Join US</a>
            <h1><span>23</span>H <Countup start={20} end={18} duration={700}/>Min <Countup start={59} end={0} duration={700} />S</h1>
        </div>
        </Zoom>
        </div>
     );
}
 
export default Offer;