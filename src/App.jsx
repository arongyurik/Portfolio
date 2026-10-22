import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Mintaprojektek adatai - írd át a sajátjaidra!
  const projects = [
    {
      id: 1,
      title: "E-Kereskedelmi Webshop",
      description: "Egy teljes értékű webáruház kosárkezeléssel, termékszűréssel és biztonságos fizetési felülettel.",
      tags: ["React", "Node.js", "MongoDB", "CSS3"],
      link: "#"
    },
    {
      id: 2,
      title: "Feladatkezelő Alkalmazás",
      description: "Kanban-stílusú projektmenedzsment app, ahol a feladatok drag-and-drop módszerrel mozgathatók.",
      tags: ["React", "Vite", "Context API"],
      link: "#"
    },
    {
      id: 3,
      title: "Időjárás Előrejelző",
      description: "Valós idejű időjárási adatokat megjelenítő applikáció térképes integrációval és grafikonokkal.",
      tags: ["JavaScript", "REST API", "CSS Grid"],
      link: "#"
    }
  ];

  return (
    <div className="portfolio-app">
      {/* Navigációs sáv */}
      <nav className="navbar">
        <div className="nav-logo">Portfólió.</div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Főoldal</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>Rólam</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projektek</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Kapcsolat</a></li>
        </ul>
      </nav>

      {/* Hero / Főoldal Szekció */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <h1>Szia, a nevem <span className="highlight">Gyurik Áron</span></h1>
          <h2>Full-Stack Fejlesztő vagyok</h2>
          <p>Modern, gyors és felhasználóbarát webes alkalmazások tervezésével és fejlesztésével foglalkozom.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Munkáim megtekintése</a>
            <a href="#contact" className="btn btn-secondary">Kapcsolatfelvétel</a>
          </div>
        </div>
      </header>

      {/* Rólam Szekció */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">Rólam</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Lelkes és elhivatott frontend/full-stack fejlesztő vagyok, aki imád tiszta, jól strukturált kódokat írni. Folyamatosan követem a legújabb technológiai trendeket, hogy a legjobb megoldásokat nyújthassam.</p>
              <p>Főbb technológiák, amikkel dolgozom:</p>
              <div className="skills-tags">
                <span>HTML5 / CSS3</span>
                <span>JavaScript (ES6+)</span>
                <span>React / Vite</span>
                <span>Node.js</span>
                <span>Git / GitHub</span>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projektek Szekció */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Kiemelt Projektek</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    Megtekintés 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kapcsolat Szekció */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Kapcsolat</h2>
          <p className="contact-subtitle">Kérdésed van, vagy együttműködnél velem? Írj bátran!</p>
          <div className="contact-content">
            <div className="contact-info-list">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>arongyurik@email.com</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Budapest, Magyarország</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lábléc */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Gyurik Áron. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}

export default App;
