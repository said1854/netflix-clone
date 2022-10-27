import { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "firebase/auth";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut() {
        return signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}