import React from "react";

import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <div>
            <h1>Expensify</h1>
        </div>
        <div className="links">
            <NavLink exact={true} to="/" activeClassName="is-active">DASHBOARD</NavLink>
            <NavLink to="/add" activeClassName="is-active">ADD EXPENSE</NavLink>
            <NavLink to="/edit" activeClassName="is-active">EDIT EXPENSE</NavLink>
            <NavLink to="/help" activeClassName="is-active">HELP</NavLink>
        </div>
    </header>

);

export default Header;