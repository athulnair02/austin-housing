import './App.css';
import logo from './LOG.png'

function App() {
  return (
    <div className="App">
      <div className ="Sidebar" align = "center">
        <div className = "Logo">
          <img src={logo} className = "App-Logo" alt = "logo"/>
        </div>
        <div className = "Sidebar-button">
          Whats poppin
        </div>
        <div className = "Sidebar-button">
          Favorites
        </div>
        <div className = "Sidebar-button">
          Chats
        </div>
        <div className = "Sidebar-button">
          Nearby
        </div>
        <div className = "Sidebar-button">
          Discussions
        </div>
      </div>
    </div>
  );
}

export default App;
