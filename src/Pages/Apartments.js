import logo from '../Images/logo.png'
import ImageGallery from 'react-image-gallery';
import ion_img from '../Images/ion-img.jpeg'
import ion_1 from '../Images/ion_1.jpeg'
import ion_2 from '../Images/ion_2.jpeg'
import ion_3 from '../Images/ion_3.jpeg'
import ion_4 from '../Images/ion_4.jpeg'
import star from '../Images/star.png'
import lotus from '../Images/lotus-icon.png'
import swim from '../Images/swim-icon.png'
import dumbell from '../Images/dumbell-icon.png'
import heart from '../Images/heart.png'
import bedroom from '../Images/bedroom.jpeg'


import villas_on_rio_img from '../Images/villas-on-rio-img.jpeg'
import { Link } from "react-router-dom"
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { Topbar } from './Welcome'

function ApartmentInfo (props) {
    return (
        <div className="Apartments-apt-info">
            <img src={props.imageSource} className="Apartments-apt-image"/>
            <div className="Apartments-bottom-slider-title">{props.name} </div>
            <text>Double Occupancy</text>
            <text>400-500</text>
        </div>
    );
}


export default function Apartments() {
    return (
        <div className="App"> 

            <Topbar/>
            <div className="Apartments-leftpane">
            <div className="Apt-title">Ion Apartments
                <img src={heart} className="Apartments-heart"></img>
            </div>
            <Carousel infiniteLoop autoplay>
                <div className="image">
                    <img src={ion_img}  ></img>    
                </div>
                <div className="image">
                    <img src={ion_1}  ></img>    
                </div>
                <div className="image">
                    <img src={ion_2}  ></img>    
                </div>
                <div className="image">
                    <img src={ion_3}  ></img>    
                </div>
                <div className="image">
                    <img src={ion_4}  ></img>    
                </div>
            </Carousel>
            </div>
            
            <div className= "Apartments-middlepane">
                <div className="Apartments-rating">
                    <div className= "Apartments-rating-title">
                        4/5
                    </div>
                    <div className="Apartments-rating-text"> 
                        Cleanliness 
                        <img src={star} className="Apartments-star"></img>
                        <img src={star} className="Apartments-star"></img>
                        <img src={star} className="Apartments-star"></img>
                        <img src={star} className="Apartments-star"></img>
                    </div>
                    <div className="Apartments-rating-text"> Management 
                    <img src={star} className="Apartments-star"></img>
                        <img src={star} className="Apartments-star"></img>
                        <img src={star} className="Apartments-star"></img>
                    </div>
                    <div className="Apartments-rating-text"> Parking 
                    <img src={star} className="Apartments-star"></img>
                    <img src={star} className="Apartments-star"></img>
                    </div>
                    <div className="Apartments-rating-text"> Security 
                    <img src={star} className="Apartments-star"></img>
                    <img src={star} className="Apartments-star"></img>
                    </div>
                    
                </div>
               
            </div>
           
            <div className= "Apartments-rightpane">
                <div className="Apartments-amenities">
                    
                    <div className="Apartments-amenities-text">
                        Top Amenities </div>
                    <img src={swim}className="Apartments-amenities-image"></img>
                    <img src={dumbell}className="Apartments-amenities-image"></img>
                    <img src={lotus}className="Apartments-amenities-image"></img>
                    <div className="Apartments-amenities-text">
                        Amenities 
                        <ul className="Apartments-amentities-bullets">
                    <li>High speed internet</li>
                    <li>Gym</li>      
                    <li>Pool</li>
                    <li>Lounges</li>
                    <li>Study Room</li>
                    <li>Washer/dryer</li>              
                    <li>Patio</li>            
                    <li>Rooftop terrace</li>  
                    <li>Pets</li>  
                    </ul>
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className="Apartments-rightBottom">
                <div className="Apartments-rightBottom-title-text">
                    $1200-$1600 1-2 Bed, 1-2 Bath
                </div>
                <div className="Apartments-rightBottom-text">
                </div>
                    
                <ul className="No-bullets">
                    <li>201 E 21st, Austin, TX 78705</li>
                    <li>Distance from Tower:</li>      
                    <li>Distance from EER:</li>      
                    <li>Distance from COLA:</li>                    
                    </ul>
                    </div>
           
            <hr className="Horizontal-line2" />
            <div className="Apartments-bottompane">
            <div className="Apartments-content">
                <div className="Apartments-content-text">Current Offers</div>
                <div className="Apartments-apt-scroll">
                    <ApartmentInfo name="3 Bedrooms, 3 Bathrooms" imageSource={bedroom}/>
                    <ApartmentInfo name="3 Bedrooms, 3 Bathrooms" imageSource={bedroom}/>
                    <ApartmentInfo name="3 Bedrooms, 3 Bathrooms" imageSource={bedroom}/>
                    <ApartmentInfo name="3 Bedrooms, 3 Bathrooms" imageSource={bedroom}/>
                    <ApartmentInfo name="3 Bedrooms, 3 Bathrooms" imageSource={bedroom}/>
                </div> 
            </div>
            </div>
        </div>
    );
}
