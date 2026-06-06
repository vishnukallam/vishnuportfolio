import React from 'react';

import nexusImg from '../assets/projects/nexus.jpg';
import konnectImg from '../assets/projects/konnect.jpg';
import compilerImg from '../assets/projects/compiler.jpg';

const Projects = () => {
  const projects = [
    {
      id: 'nexus',
      title: 'NEXUS - A Real Time Hardware E-Commerce Platform',
      image: nexusImg,
      link: 'https://hardware-products.vercel.app/',
      description:
        'NEXUS HARDWARE, a full-stack ecommerce platform for premium PC hardware components with UPI-based payment integration. Built a responsive frontend using React, Vite, Tailwind CSS, and Material 3 design principles, enabling seamless product browsing, cart management, and secure checkout. Implemented a scalable backend using Node.js, Express, PostgreSQL (Neon), and Prisma ORM with secure JWT authentication and Google OAuth 2.0. Deployed the application using Vercel, Render, and Neon Cloud, focusing on performance, security, and a modern user experience for hardware product purchasing.'
    },
    {
      id: 'konnect',
      title: 'KON-NECT – Real-Time Social Discovery Platform',
      image: konnectImg,
      link: 'https://demographic-social-app-4.vercel.app/',
      description:
        'KON-NECT is a real-time, location-based social discovery platform that connects users with nearby people who share similar interests. Built an interactive live map with real-time location updates, smart interest matching, friend requests, and privacy-focused social discovery within a 20km radius. Implemented encrypted persistent messaging, live unread notifications, and mutual connection-based chat. Integrated turn-by-turn navigation, place search, dropped pins, and dynamic route tracking for real-world interaction.'
    },
    {
      id: 'compiler',
      title: 'Online Compiler Platform',
      image: compilerImg,
      link: 'https://onlinecompilerplatform.vercel.app/',
      description:
        'A web-based coding environment enabling users to write, compile, and execute programs in real time through an interactive browser-based environment. Implemented execution engines to securely run Python and Java programs with interactive input/output handling. Added features such as file management, package installation, visual output rendering, and cloud deployment support using Vercel, Render, and Docker.'
    }
  ];

  return (
    <section className="content-section active" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '18px',
                overflow: 'hidden',
                padding: '18px',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 10px 25px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Clickable Project Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    marginBottom: '16px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>

              {/* Clickable Title */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <h3 style={{ marginBottom: '12px' }}>
                  {project.title}
                </h3>
              </a>

              <p
                style={{
                  lineHeight: '1.7',
                  opacity: '0.9',
                  fontSize: '0.95rem'
                }}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
