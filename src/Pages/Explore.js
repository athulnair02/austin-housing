import logo from '../Images/logo.png'
import ion_img from '../Images/ion-img.jpeg'
import villas_on_rio_img from '../Images/villas-on-rio-img.jpeg'
import { Link } from "react-router-dom"
import '../App.css'

function ApartmentInfo (props) {
    return (
        <div className="Explore-apt-info">
            <h4> {props.name} </h4>
            <img src={props.imageSource} className="Explore-apt-image"/>
        </div>
    );
}

export default function Explore() {
    return (
        <div className="App"> 
            <div className="Topbar">
                <div className = "Logo">
                    <img src={logo} className="App-Logo" alt="logo"/>
                </div>
                <div className="Topbar-content">
                    <input type="text" className="Search-content" placeholder="search an apartment building, subleases, or anything housing related..."/>
                    <button className="Topbar-button"><Link to = "/login" className='text-link'>login</Link></button>
                
                    <button className="Topbar-button"><Link to = "/chat" className='text-link'>chat</Link></button>
                    <button className="Topbar-button"><Link to = "/favorites" className='text-link'>favorites</Link></button>
                    <button className="Topbar-button"><Link to = "/explore" className='text-link'>explore</Link></button>
                </div>
            </div>   
            <h1>Explore in West Campus</h1>   
            <ApartmentInfo name="Ion Austin" imageSource={ion_img}/>
            <ApartmentInfo name="Villas on Rio" imageSource={villas_on_rio_img}/>
            <ApartmentInfo name="Point on Rio"/>  
        </div>
    );
}
