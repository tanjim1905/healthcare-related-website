import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // console.log(result.user);
            setUser(result.user)
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }

    const handleUserRegister = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({});
        }).finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        handleUserRegister,
        handleUserLogin,
        logOut
    }
}

export default useFirebase;