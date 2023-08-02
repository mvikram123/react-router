import React from "react";
import {Link,NavLink} from "react-router-dom";


const Navbar=()=>{


    return (
        <div className="Navbar">
            {/* <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a> */}



            <Link to="/home">Home </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> 
            <Link to="/blog">Blog</Link>


            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    )
}
export default Navbar;