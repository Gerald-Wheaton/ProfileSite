import React from "react"
import "./webPages/styles.css"
import { Link } from "react-router-dom"
import { Navigation } from "react-mdl"

function Nav() {
    return (
        <div>
            <Navigation className="links">
                <li>
                    <Link to="/landing">Home</Link>
                </li>

                <li>
                    <Link to="/about">About Me</Link>
                </li>

                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                
                <li>
                    <Link to="/git">Github</Link>
                </li>

                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </Navigation>
        </div>
    )
}

export default Nav