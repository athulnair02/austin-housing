import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
import Favorites from "./Pages/Favorites"
import Chat from "./Pages/Chat"
import Explore from "./Pages/Explore"

import { Map, GoogleApiWrapper } from 'google-maps-react';
import reactDom from "react-dom";
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

    <Router>
      <Switch>
        <Route exact path = "/">
        <Welcome />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/favorites">
          <Favorites />
        </Route>
        <Route exact path = "/chat">
          <Chat />
        </Route>
        <Route exact path = "/explore">
          <Explore />
        </Route>

      </Switch>
    </Router>

    
  );
}

export default App;
