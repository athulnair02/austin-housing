
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


export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

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


    const logout = async () => {
        await signOut(auth);
    };

    return (
        
        <div className="Login">
            
            
         
        
            <div>
                <h1> Sign Up </h1>
                <div className="Login-align"> email </div>
                <input
                    type="text"
                    className="Login-input"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <div className="Login-align"> set your password </div>
                <input
                    type="password"
                    className="Login-input"                
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <button onClick={register} className="Login-button" > Create User</button>
            </div>
                    
            {/* <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout} > Sign Out </button> */}
         </div>
    );
}


