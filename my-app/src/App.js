import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componentPages/Home'
import Blogs from './componentPages/Blogs'
import Discussions from './componentPages/Discussions'
import Events from './componentPages/Events'
import Resources from './componentPages/Resources'
import About from './componentPages/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/besources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React - Test - 123
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
