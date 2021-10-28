import './App.css';
import modelroom from './model-room.jpeg'
import logo from './logo.svg'
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
// import { Loader } from "@googlemaps/js-api-loader"

// const google = window.google;
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// const loader = new Loader({
//   apiKey: "AIzaSyB4kI0htvPrka_M2uI1PHLXCUod87xCvXU",
//   version: "weekly",
// });

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45, lng: -75}}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <div className="Topbar">
        <div className = "Logo">
          <img src={logo} className="App-Logo" alt="logo"/>
        </div>
        <div className="Topbar-content">
          <input type="text" className="Search-content" placeholder="search an apartment building, subleases, or anything housing related..."/>
          <button className="Topbar-button">login</button>
          <button className="Topbar-button">chat</button>
          <button className="Topbar-button">favorites</button>
          <button className="Topbar-button">explore</button>
        </div>
      </div>
      <div className="Welcome">
        <img src={modelroom} className="Welcome-background" alt="welcback"/>
        <div className="Welcome-message">
          <p className="Welcome-text">Looking for a place to live?</p>
          <p className="Welcome-text">Check out what’s popular in your area on the explore page</p>
          <button className="Explore-button">E X P L O R E</button>
        </div>
      </div>
      <div className="Location-bar">
        <input type="text" className="Location-search" placeholder="Location" />
        <button className="Location-button">Price</button>
        <button className="Location-button">Beds</button>
        <button className="Location-button">Furnished</button>
      </div>
      <div className="Map" id="map">
        initMap();
      </div>
    </div>
  );
}

export default App;
