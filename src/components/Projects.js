import React from "react";
import "./Projects.css";
import API_BASE_URL from "../config";
const Projects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_BASE_URL}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="container">

            <section>
                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project) => (
                        <div key={project._id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </section>
            <section className="personal-info">
                <h2>Priyanshu Gupta</h2>
                <p><strong>Full Stack Developer | MERN Stack Enthusiast</strong></p>
                <p><strong>Email:</strong> <a href="princi.it.js@gmail.com">priyanshu@example.com</a></p>
                <p><strong>Phone:</strong> +91 9051931188</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/priyanshu-gupta-66a599181/" target="_blank">linkedin.com/in/priyanshu-gupta-66a599181/</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Priyanshuprinci" target="_blank">github.com/priyanshuprinci</a></p>
                <p><strong>LeetCode:</strong> <a href="https://leetcode.com/u/princigupta/" target="_blank">leetcode.com/u/princigupta/</a></p>
            </section>

        </div>
    );
};

export default Projects;
