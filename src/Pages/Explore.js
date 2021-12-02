import ion_img from '../Images/ion-img.jpeg'
import villas_on_rio_img from '../Images/villas-on-rio-img.jpeg'
import { Link } from "react-router-dom"
import '../App.css'
import { Topbar } from './Welcome'
import { Component, useState } from 'react'

const images = require.context('../Images', true);

class ApartmentInfo extends Component {
    constructor () {
        super();
    }

    render() {
        let image = "";
        if (this.props.imageSource == "../Images/villas-on-rio-img.jpeg") {
            image = require("../Images/villas-on-rio-img.jpeg").default;
        }
        else if (this.props.imageSource === "../Images/ion-img.jpeg") {
            image = require("../Images/ion-img.jpeg").default;
        }

        return (
            <div className="Explore-apt-info">
                <img src={image} className="Explore-apt-image"/>
                <h4> {this.props.name} </h4>
                <text>Starting at ${this.props.value}</text>
                <text>2 bed, 2 baths, 975 sq ft</text>
                <hr className="Horizontal-line"/>
            </div>
        );
    }
}

function ApartmentList(props) {
    const properties = props.properties;
    
    const listItems = properties.map((property) =>
        <ApartmentInfo key={property.name}
                value={property.price} name={property.name} imageSource={property.imageSource}/>
    );
    return (
        <div className="Explore-apt-scroll">
            {listItems}
        </div>
    );
}


const propertyList = [
    {
        name: "Villas on Rio",
        imageSource: "../Images/villas-on-rio-img.jpeg",
        price: 1099
    },
    {
        name: "Ion Austin",
        imageSource: "../Images/ion-img.jpeg",
        price: 875
    },
    {
        name: "Pointe on Rio",
        imageSource: "../Images/villas-on-rio-img.jpeg",
        price: 1199
    },
    {
        name: "Lark Austin",
        imageSource: "../Images/ion-img.jpeg",
        price: 1299
    },
    {
        name: "Villas on Nueces",
        imageSource: "../Images/villas-on-rio-img.jpeg",
        price: 1399
    },
    {
        name: "26 West",
        imageSource: "../Images/ion-img.jpeg",
        price: 1600
    }
]

var defaultDropdown = <option>-- Select --</option>;

class Filter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sliderValue : 300,
            currentList : propertyList.slice()
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset= this.handleReset.bind(this);
    }
    
    handleSubmit() {
        //TODO: filtering algorithm
        const a = this.state.currentList;
        while(a.length > 0) {
            a.pop();
        }
        propertyList.forEach(property => 
            {
                if (property.price <= this.state.sliderValue) {
                    a.push(property);
                }
            }
        );

        this.setState({
            currentList : a
        });
    }

    handleChange(target) {
        this.state.sliderValue = target;
        this.setState({
            sliderValue : Number(target)
        });
    }

    handleReset() {
        this.setState({
            sliderValue: 300,
            currentList : propertyList.slice()
        });
        document.getElementById("slider").value = 300;
    }

    render() {
        return(
            <div>
                <div className="Filter-box">
                    <h1>Filters and Preferences</h1>
                    <div className="Filter-content">
                        <div className="Filter-content-1">
                            <p>Select lease term:</p>
                            <select className="Filter-dropdown">
                                {defaultDropdown}
                                <option>12 month</option>
                                <option>9 month</option>
                            </select>
                            <p>Location:</p>
                            <select className="Filter-dropdown">
                                {defaultDropdown}
                                <option>MLK to 22nd</option>
                                <option>22nd to 24th</option>
                                <option>West West Campus</option>
                            </select>
                        </div>
                        <div className="Filter-content-1">
                            <p>Units upto: ${this.state.sliderValue}</p>
                            <input type="range" id="slider" min="300" max="3000" className="Price-slider" onChange={
                                (event) => {
                                    this.handleChange(event.target.value);
                                }   
                            }/>
                            <p>Number of Rooms:</p>
                            <select className="Filter-dropdown">
                                {defaultDropdown}
                                <option>1 room</option>
                                <option>2 rooms</option>
                                <option>3 rooms</option>
                                <option>4 rooms</option>
                                <option>5 rooms</option>
                            </select>
                        </div>
                        <div className="Filter-content-2">
                            <p>Amenities/Others</p>
                            <div className="Filter-checkbox">
                                <input type="checkbox" value="Parking in Building" />Parking in building
                            </div>
                            <div className="Filter-checkbox">
                                <input type="checkbox" value="Bicycle Room" />Bicycle Room
                            </div>
                            <div className="Filter-checkbox">
                                <input type="checkbox" value="Furnished" />Furnished
                            </div>
                            <div className="Filter-checkbox">
                                <input type="checkbox" value="Balcony" />Balcony
                            </div>
                        </div>
                        <div className="Filter-content-3">
                            <button className="Filter-btn" onClick={
                                (event) => {
                                    this.handleSubmit();
                                }
                            }>Apply</button>
                            <button className="Filter-btn" onClick={
                                (event) => {
                                    this.handleReset();
                                }
                            }>Reset</button>
                        </div>
                    </div>
                </div>
                <h1>Explore in West Campus</h1> 
                <ApartmentList properties={this.state.currentList}/>
            </div>
        );
    }
}

export default function Explore() {
    return (
        <div className="App"> 
            <Topbar/>
            <div className="Explore-content">
                <Filter/>
            </div>
        </div>
    );
}
