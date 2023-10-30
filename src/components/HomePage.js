import React, { useEffect } from "react";
import HomeHeader from "./layout/HomeHeader";
import HomeFooter from "./layout/HomeFooter";
import SignInForm from "./auth/SignInForm"
import './HomePage.css'
import UsersTable from './admin-tables/UsersTable'
import { useState } from "react";

function HomePage() {
    const [signedIn, setSignedIn] = useState()
    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "1") {
            setSignedIn(true)
        }
    }, [])
    const SignInHandler = (event) => {
        event.preventDefault()
        setSignedIn(true)
        localStorage.setItem("loggedIn", "1")
    }
    return (
        <div className="main-page-container">
            <div><HomeHeader /></div>
            <div className="page-form-container">
                {!signedIn && <SignInForm onSubmit={SignInHandler} />}
            </div>
            {signedIn && <UsersTable />}
            {signedIn && <button onClick={() => {
                setSignedIn(false)
                localStorage.removeItem("loggedIn")
            }}>Sign Out</button>}
            <div><HomeFooter /></div>
        </div>
    )
}
export default HomePage