import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => (
    <div>
        <h1>Looks like you took a wrong turn :(</h1>
        <Link to="/">Click to go HOME</Link>
    </div>
);

export default NotFound;