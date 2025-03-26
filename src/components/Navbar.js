import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Priyanshu Gupta</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-icons">
        <a href="https://www.linkedin.com/in/priyanshu-gupta-66a599181/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/Priyanshuprinci" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://leetcode.com/u/princigupta/" target="_blank" rel="noopener noreferrer">
          <FaCode className="icon leetcode" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
