import React from "react";
import "./Home.css";
import profilePic from "../assets/priyanshu.jpg"; // Make sure your image is inside the "assets" folder

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="text">
          <h1>Hello, I'm <span className="highlight">Priyanshu</span></h1>
          <h2>Full Stack Developer</h2>
          <p>
            Building dynamic and user-friendly web applications with React.js, Node.js, and MongoDB.
          </p>
        </div>
        <div className="image">
          <img src={profilePic} alt="Priyanshu Gupta" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
