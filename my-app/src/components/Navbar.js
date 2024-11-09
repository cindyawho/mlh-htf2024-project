import React from 'react';
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
                <img 
                    src={require("../assets/logo.png")}
                    alt="educator lounge logo"
                    width="40vw"
                    height="auto"
                />
            </li>
            <li>Discussions</li>
            <li>Resources</li>
            <li>Blogs</li>
            <li>Events</li>
            <li>About</li>
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