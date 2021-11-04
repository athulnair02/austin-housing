import authenticateUser from "./authenticateUser"
export default function Login() {
    return (
        <div className="App">
            
            <input type = "text" className="Content-input" placeholder="Username"/>
            <input type = "text" className="Content-input" placeholder="Password"/>
            {/* <Button onClick={() => authenticateUser(loginEmail, loginPassword, true)} className="Content-button">  Login </Button> */}
            
        
         </div>
    );
}
