//import authenticateUser from "./authenticateUser"

import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase";


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
            <div>
                <h3> Register User </h3>
                <input
                    type="text"
                    className="Login-input"
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    type="text"
                    className="Login-input"
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />

        <button onClick={register}> Create User</button>
      </div>


            <input 
                type = "text" 
                className="Login-input" 
                placeholder="Username" 
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}
            />
            <input 
                type = "text" 
                className="Login-input" 
                placeholder="Password"
                
            />
            {/* <Button onClick={() => authenticateUser(loginEmail, loginPassword, true)} className="Content-button">  Login </Button> */}
            
        
         </div>
    );
}
