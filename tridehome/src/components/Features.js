import '../App.js'
import svg1 from '../images/1.svg'
import svg2 from '../images/2.svg'
import svg3 from '../images/3.svg'
import svg4 from '../images/4.svg'
import Flip from 'react-reveal/Flip'
const Features = () => {
    return ( 
        <div id="features"
        className="Next-header">
            <div className="title">
                <h1>Features</h1>
            </div>
            <Flip right cascade>
            <div className="row">
                <div className="box">
                    <div className="img">
                        <img src={svg1} />
                    </div>
                    <h3>Itinerary Planner</h3>
                    <p> Alternative in online trip Planning. Create your itinerary, organize day-to-day activities
                     </p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg2} />
                    </div>
                    <h3>Fuel Cost Estimator</h3>
                    <p>Estimates the fuel cost of a trip based on fuel efficiency, distance, and gas price using various units of measurement.
                        .</p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg3} ></img>
                       

                    </div>
                    <h3>Time  Route  Planners</h3>
                    <p> Plan your trip efficently never miss any spot you should travel</p>
                </div>
                <div className="box">
                    <div className="img">
                        <img src={svg4} />
                    </div>
                    <h3>Teta</h3>
                    <p>RAC Route Planner, Maps and Traffic News providing you with route finder driving directions
                            </p>
                </div>
            </div>
            </Flip>
        </div>
     );
}
 
export default Features;