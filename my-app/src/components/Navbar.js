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
            <li>Logo</li>
            <li>Discussions</li>
            <li>Resources</li>
            <li>Blogs</li>
            <li>Events</li>
            <li>About</li>
        </ul>
        <div class="signIn">
            <button>Sign In</button>
            <p className='signUp'>Or Sign Up</p>
        </div>
    </div>
  </div>
</nav>
);
};

export default Navbar;