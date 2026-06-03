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
              prevent overcharging and extend the lifespan of device batteries.
              A Bluetooth smart charger prototype and mobile app for automatic control, theoretically reducing overcharge risk by 85% and extending battery lifespan by 12-24%, 
              while decreasing battery swelling risk by 90-95% and eliminating manual unplugging.
            </p>
          </div>

          <div className="project-card">
             <a
              href="https://onlinecompilerplatform.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              >
              <h3>Online Compliler Platform</h3>
            </a>
            <p>
              A web-based coding environment enabling users to write, compile, and execute programs in real time through an interactive browser-based environment. 
              Implemented execution engines to securely run Python and Java programs with interactive input/output handling. 
              Added features such as file management, package installation, visual output rendering, and cloud deployment support using Vercel, Render, and Docker. 
            </p>
          </div>

          <div className="project-card">
            <h3>Employee Management System</h3>
            <p>
              A comprehensive full-stack application built using MongoDB and
              JavaScript frameworks. This system facilitates secure data
              persistence and streamlined record-keeping for employees
              information, enabling efficient management of workforce data with
              robust authentication and data handling capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
