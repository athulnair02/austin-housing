import { BrowserRouter as Router, Route} from "react-router-dom"
import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
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
      <Route expact path = "/">
        <Welcome />
      </Route>
      <Route path = "/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
