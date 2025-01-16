import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componentPages/Home'
import Blogs from './componentPages/Blogs'
import BlogsCreate from './componentPages/BlogsCreate'
import Discussions from './componentPages/Discussions'
import Events from './componentPages/Events'
import Resources from './componentPages/Resources'
import About from './componentPages/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/create" element={<BlogsCreate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
