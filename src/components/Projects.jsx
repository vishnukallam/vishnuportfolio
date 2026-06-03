import React from 'react';

const Projects = () => {
  return (
    <section className="content-section active" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Magno Charger</h3>
            <p>
              A TIH-IoT Chanakya-funded hardware innovation designed to enhance
              battery longevity through automated, user-defined power
              termination. This intelligent auto-disconnect charger helps
              prevent overcharging and extends the lifespan of device batteries.
            </p>
            <div className="project-tags">
              <span className="project-tag">IoT</span>
              <span className="project-tag">Hardware</span>
              <span className="project-tag">Automation</span>
              <span className="project-tag">Innovation</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Online Compliler Platform</h3>
            <p>
              A web-based coding environment enabling users to write, compile, and execute programs in real time through an interactive browser-based environment. Built a responsive code editor using Monaco Editor with live terminal support powered by Xterm.js and Socket.IO for real-time communication. Implemented backend execution workflows using Node.js, Express, and Docker/native execution engines to securely run Python and Java programs with interactive input/output handling. Added features such as file management, package installation, visual output rendering, and cloud deployment support using Vercel, Render, and Docker. Focused on delivering a seamless coding experience with efficient execution, scalability, and modern UI design.
            </p>
            <div className="project-tags">
              <span className="project-tag">E-commerce</span>
              <span className="project-tag">Web Design</span>
              <span className="project-tag">Frontend</span>
              <span className="project-tag">Responsive</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Employee Management System</h3>
            <p>
              A comprehensive full-stack application built using MongoDB and
              JavaScript frameworks. This system facilitates secure data
              persistence and streamlined record-keeping for employee
              information, enabling efficient management of workforce data with
              robust authentication and data handling capabilities.
            </p>
            <div className="project-tags">
              <span className="project-tag">Full Stack</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">CRUD</span>
            </div>
            <a
              href="https://github.com/vishnukallam/Employee_Database"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
