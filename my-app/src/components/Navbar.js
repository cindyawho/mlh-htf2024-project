import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  {/* Navbar content will go here */}
  <div class="navBody">
    <div class="header">
        <ul class="tabs">
            <li>
                <Link to="/">
                    <img 
                        src={require("../assets/logo.png")}
                        alt="educator lounge logo"
                        width="40vw"
                        height="auto"
                    />
                </Link>
            </li>
            <li>
                <Link to="/discussions">Discussions</Link>
            </li>
            <li>
                <Link to="/resources">Resources</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div class="signIn">
            <button>Sign In</button>
            <p className='signUp'>
                <a 
                    href="https://cindyawho.github.io/#contact"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Or Sign Up
                </a>
            </p>
        </div>
    </div>
  </div>
</nav>
);
};

export default Navbar;