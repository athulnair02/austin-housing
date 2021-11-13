import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Welcome from "./Pages/Welcome"
import Login from "./Pages/Login"
import Favorites from "./Pages/Favorites"
import Chat from "./Pages/Chat"
import Explore from "./Pages/Explore"
import "./App.css"

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
