import { Link } from "react-router-dom"
import modelroom from '../Images/model-room.jpeg'
import logo from '../Images/logo.svg'
import '../App.css';
import Login from './Login'

export default function Welcome() {
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
        
            <div className="Welcome">
                <img src={modelroom} className="Welcome-background" alt="welcback"/>
                <div className="Welcome-message">
                    <p className="Welcome-text">Looking for a place to live?</p>
                    <p className="Welcome-text">Check out what’s popular in your area on the explore page</p>
                <button className="Explore-button"><Link to = "/explore" className='text-link'> E X P L O R E</Link></button>
                </div>
            </div>
            <div className="Location-bar">
                <input type="text" className="Location-search" placeholder="Location" />
                <button className="Location-button">Price</button>
                <button className="Location-button">Beds</button>
                <button className="Location-button">Furnished</button>
            </div>
        </div>
    );
}