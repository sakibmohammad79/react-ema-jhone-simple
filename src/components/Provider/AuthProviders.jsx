import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase-config';


const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUp = (email, password) =>{
        setLoader(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    //observer user auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    const userInfo = {
        user,
        loader,
        signUp,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProviders;