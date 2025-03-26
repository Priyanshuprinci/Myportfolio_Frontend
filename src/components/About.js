import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate Full Stack Developer skilled in React.js, Node.js, MongoDB, and Express.js.
      </p>
      <a href="/Priyanshu_Gupta_Resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
};

export default About;
