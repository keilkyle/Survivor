import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div class="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/castaways">Castaways</NavLink>
        </div>
    )
}

export default Nav;