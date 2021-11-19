//import authenticateUser from "./authenticateUser"
import background from '../Images/loginbackground.png'
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../login.css';
import { Link } from "react-router-dom"
import SignUp from './SignUp';



export default function Login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

   

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        
        <div className="Login">
            
            <div >
                <h1>Login </h1>
                <div className="Login-align"> username </div>
                <input 
                    type = "text" 
                    className="Login-input" 
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <div className="Login-align"> password </div>
                <input 
                    type = "password" 
                    className="Login-input" 
                    secureTextEntry={true}
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <button onClick={login} className="Login-button"> Login</button>
                <div className="sign-up-here">
                    
                <Popup trigger={<button className="sign-up-here" style={{color: "#1a1919"}}> Don't have an account? Sign up here </button>} modal closeOnDocumentClick nested >
                               {SignUp() }
                </Popup>
                    </div>
            </div>
         </div>
    );
}


