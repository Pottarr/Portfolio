import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
    return (
        <div className="NavBar">
            <h2>Pottarrพงศ์</h2>
            <div className="NavLink">
                <NavLink activeClassName="Active" className="Link" to="/">About Me</NavLink>
                <NavLink activeClassName="Active" className="Link" to="/School">School</NavLink>
                <NavLink activeClassName="Active" className="Link" to="/Contacts">Contacts</NavLink>
            </div>
        </div>
    )
}

export default NavBar;