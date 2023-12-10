import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
const AuthDetails = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    function so() {
        console.log(1);
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if (user){
                setUser(user)               
            } else {
                setUser(null);
            }
        })
    }, [])
    return(
        <div>Logged in as: {user ?<><p>{user.displayName}</p></>: <Link to='/Login'><p>Sign In</p></Link> }</div>
    )
}

export default AuthDetails