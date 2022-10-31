import React from "react";
import { Link } from "react-router-dom";

function Button(prop){
    return(
        <Link to={prop.name}>{prop.title}</Link>
    );
}

export default Button;