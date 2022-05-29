import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div class="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/castaways">See All Castaways</NavLink>
            <NavLink to="/add">Add New Castaway</NavLink>
        </div>
    )
}

export default Nav;