import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown, Code, Briefcase, GraduationCap, Award, User } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      
    },
    header: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    name: {
      fontSize: '3rem',
      fontWeight: 'bold',
      margin: '0 0 0.5rem 0',
      color: 'white'
    },
    title: {
      fontSize: '1.5rem',
      color: '#e0e7ff',
      marginBottom: '1.5rem'
    },
    contactInfo: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'transform 0.2s'
    },
    nav: {
      backgroundColor: '#1e293b',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      fontSize: '1rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    navButtonActive: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem'
    },
    section: {
      marginBottom: '3rem'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#a78bfa',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    card: {
      backgroundColor: '#1e293b',
      padding: '2rem',
      borderRadius: '1rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '1px solid #334155',
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 12px rgba(102, 126, 234, 0.2)'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#c7d2fe'
    },
    cardSubtitle: {
      color: '#94a3b8',
      marginBottom: '1rem',
      fontStyle: 'italic'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      padding: '0.5rem 0',
      paddingLeft: '1.5rem',
      position: 'relative',
      lineHeight: '1.6'
    },
    bullet: {
      position: 'absolute',
      left: 0,
      color: '#667eea'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    },
    skillCategory: {
      backgroundColor: '#1e293b',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      border: '1px solid #334155'
    },
    skillTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#a78bfa'
    },
    skillTag: {
      display: 'inline-block',
      backgroundColor: '#312e81',
      color: '#c7d2fe',
      padding: '0.4rem 0.8rem',
      borderRadius: '0.5rem',
      margin: '0.3rem',
      fontSize: '0.9rem'
    },
    summary: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#cbd5e1',
      backgroundColor: '#1e293b',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid #334155'
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    // { id: 'education', label: 'Education', icon: GraduationCap }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>RAMAKRISHNA PANCHIREDDY</h1>
        <p style={styles.title}>Mobile Application & Web Developer</p>
        <div style={styles.contactInfo}>
          <a href="tel:+919515252144" style={styles.contactItem}>
            <Phone size={18} />
            <span>+91 9515252144</span>
          </a>
          <a href="mailto:ramakrishnap197@gmail.com" style={styles.contactItem}>
            <Mail size={18} />
            <span>ramakrishnap197@gmail.com</span>
          </a>
          <a href="https://github.com/RamakrishnaGithub" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ramakrishna-panchireddy/" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </header>

      <nav style={styles.nav}>
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              style={{
                ...styles.navButton,
                ...(activeSection === section.id ? styles.navButtonActive : {})
              }}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Icon size={18} />
              {section.label}
            </button>
          );
        })}
      </nav>

      <main style={styles.content}>
        {activeSection === 'about' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <User />
              Professional Summary
            </h2>
            <div style={styles.summary}>
              Mobile Application Developer specializing in React Native with hands-on experience building production-ready cross-platform applications. Skilled in creating responsive UI components, implementing state management, and integrating REST APIs to deliver seamless mobile experiences.
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Briefcase />
              Work Experience
            </h2>
            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'exp1' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('exp1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.cardTitle}>Mobile Application Developer</h3>
              <p style={styles.cardSubtitle}>Bento Labs, Hyderabad | Internship | Dec 2024 - Sept 2025</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Engineered and delivered 15+ production-ready mobile screens using React Native, supporting end-to-end Sales and CRM workflows for daily business operations
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Orchestrated a follow-up task management system, improving client interaction tracking and ensuring timely task completion for sales teams
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Contributed to custom native module development to access device-specific functionalities beyond standard React Native libraries
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Code />
              Projects
            </h2>
            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'proj1' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('proj1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.cardTitle}>Intrakt – Hostel Tenant Management App</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Built 10+ responsive React Native screens for tenant management, room allocation tracking, and rent payment status
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Implemented JWT-based authentication flow and role-based UI rendering for owners and tenants
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Crafted FlatList-based rendering with search filters for fast tenant lookup and management
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Established REST APIs using Axios for real-time data fetching and updates
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Architected reusable component architecture ensuring maintainable and scalable mobile UI
                </li>
              </ul>
            </div>

            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'proj2' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('proj2')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.cardTitle}>E-commerce Application</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Constructed a feature-rich e-commerce mobile application with 10+ React Native screens, implementing end-to-end navigation flows from onboarding to checkout
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Configured dummy REST APIs for product listing, user authentication, and actions, simulating real-world e-commerce workflows
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Deployed Redux Toolkit for global state management, handling authentication state, cart actions, and product data efficiently
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet}>▹</span>
                  Leveraged AI development tools including Claude AI, ChatGPT, and Cursor Copilot to accelerate development, debug complex issues, and improve overall code quality and project delivery
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Award />
              Skills & Abilities
            </h2>
            <div style={styles.skillsGrid}>
              <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>Mobile Development</h3>
                <div>
                  <span style={styles.skillTag}>React Native</span>
                  <span style={styles.skillTag}>Android</span>
                  <span style={styles.skillTag}>iOS</span>
                  <span style={styles.skillTag}>React.js</span>
                </div>
              </div>

              <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>Frontend Technologies</h3>
                <div>
                  <span style={styles.skillTag}>JavaScript (ES6+)</span>
                  <span style={styles.skillTag}>HTML5</span>
                  <span style={styles.skillTag}>CSS3</span>
                </div>
              </div>

              {/* <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>AI Development Tools</h3>
                <div>
                  <span style={styles.skillTag}>Claude AI</span>
                  <span style={styles.skillTag}>ChatGPT</span>
                  <span style={styles.skillTag}>Gemini</span>
                  <span style={styles.skillTag}>Cursor Copilot</span>
                  <span style={styles.skillTag}>GitHub Copilot</span>
                </div>
              </div> */}

              <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>State Management & APIs</h3>
                <div>
                  <span style={styles.skillTag}>Redux Toolkit</span>
                  <span style={styles.skillTag}>REST APIs</span>
                  <span style={styles.skillTag}>Axios</span>
                </div>
              </div>

              <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>Database & Version Control</h3>
                <div>
                  <span style={styles.skillTag}>SQL Server</span>
                  <span style={styles.skillTag}>Git</span>
                </div>
              </div>

              {/* <div style={styles.skillCategory}>
                <h3 style={styles.skillTitle}>Personal Strengths</h3>
                <div>
                  <span style={styles.skillTag}>Performance Under Pressure</span>
                  <span style={styles.skillTag}>Self-Motivated</span>
                  <span style={styles.skillTag}>Optimistic</span>
                </div>
              </div> */}
            </div>
          </section>
        )}

        {/* {activeSection === 'education' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <GraduationCap />
              Education & Certifications
            </h2>
            
            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'edu1' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('edu1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.cardTitle}>Bachelor of Science</h3>
              <p style={styles.cardSubtitle}>Govt. Degree College | August 2019 - April 2021</p>
            </div>

            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'edu2' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('edu2')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.cardTitle}>Intermediate (12th)</h3>
              <p style={styles.cardSubtitle}>Narayana Jr. College | April 2018 - April 2019</p>
            </div>

            <h3 style={{...styles.cardTitle, marginTop: '2rem', marginBottom: '1rem'}}>Certifications & Achievements</h3>
            
            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'cert1' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('cert1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h4 style={styles.cardTitle}>React Native Android and iOS Certifications</h4>
              <p style={styles.cardSubtitle}>Udemy - Complete course certification</p>
            </div>

            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'cert2' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('cert2')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h4 style={styles.cardTitle}>SQL Basics Certification</h4>
              <p style={styles.cardSubtitle}>Verified by HackerRank</p>
            </div>

            <div 
              style={{
                ...styles.card,
                ...(hoveredCard === 'cert3' ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('cert3')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h4 style={styles.cardTitle}>UI Full Stack Certification</h4>
              <p style={styles.cardSubtitle}>Naresh IT</p>
            </div>
          </section>
        )} */}
      </main>

      {/* <footer style={{
        backgroundColor: '#1e293b',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{ color: '#94a3b8' }}>
          © 2024 Ramakrishna Panchireddy. Built with React.
        </p>
      </footer> */}
    </div>
  );
};

export default Portfolio;