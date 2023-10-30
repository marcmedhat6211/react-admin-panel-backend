import React from "react";
import './HomeHeader.css'

function HomeHeader() {
    return (
        <div className="page-header">
            <div className="page-title-wrapper">
                <h1 className="home-page-title">Administrator Panel</h1>
            </div>
            <div>
                <button className="submit-btn">Sign Up</button>
            </div>
        </div>
    )
}
export default HomeHeader