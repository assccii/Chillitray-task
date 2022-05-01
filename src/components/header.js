import React from "react"
import logo from "../images/logo.png"
import search from "../images/search.png"
import ProgressBar from "../components/progress.js"
export default function Header(props) {
    return (
        <div className="header">
            <img src = {logo} alt = "" className="logo" />
            <h3 className="header-nav">Feed</h3>
            <h3 className="header-nav">Dashboard</h3>
            <h3 className="header-nav">Lookup</h3>
            <h3 className="header-nav">List</h3>
            <h3 className="header-nav">Team</h3>

            <form action="/" method="GET" className="form">
                <input type="search" placeholder="Search" className="search-field" />
                <button type="submit" className="search-button">
                    <img src={search} alt = "" />
                </button>
            </form>
            <ProgressBar key='1' bgcolor= "#ef6c00" completed= "70" className="progress" />

            <p className="login">Login</p>
            <p className="signup">SignUp</p>
      </div>

    )
}