import logo from '../Images/logo.png'
import ion_img from '../Images/ion-img.jpeg'
import villas_on_rio_img from '../Images/villas-on-rio-img.jpeg'
import { Link } from "react-router-dom"
import '../App.css'
import { Topbar } from './Welcome'

function ApartmentInfo (props) {
    return (
        <div className="Explore-apt-info">
            <img src={props.imageSource} className="Explore-apt-image"/>
            <h4> {props.name} </h4>
            <text>Starting at $1095</text>
            <text>2 bed, 2 baths, 975 sq ft</text>
            <hr className="Horizontal-line"/>
        </div>
    );
}

export default function Explore() {
    return (
        <div className="App"> 
            <Topbar/>
            <div className="Explore-content">
                <h1>Explore in West Campus</h1> 
                <div className="Explore-apt-scroll">
                    <ApartmentInfo name="Ion Austin" imageSource={ion_img}/>
                    <ApartmentInfo name="Villas on Rio" imageSource={villas_on_rio_img}/>
                    <ApartmentInfo name="Ion Austin" imageSource={ion_img}/>
                    <ApartmentInfo name="Villas on Rio" imageSource={villas_on_rio_img}/>
                    <ApartmentInfo name="Ion Austin" imageSource={ion_img}/>
                    <ApartmentInfo name="Villas on Rio" imageSource={villas_on_rio_img}/>
                </div> 
            </div>
        </div>
    );
}
