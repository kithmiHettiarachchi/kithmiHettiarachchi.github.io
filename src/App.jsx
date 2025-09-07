import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaCss3Alt, FaCuttlefish } from "react-icons/fa";
import Particles from './components/Particles';
import heroImage from './assets/hero.jpg'; // Hero image

/* Navbar Component */
function Navbar() {
  return (
    <nav>
      <h1> </h1>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

/* Hero Section */
function Hero() {
  return (
    <section id="hero" style={{ textAlign: 'center', position: 'relative' }}>
      <Particles /> {/* Animated particles in background */}

      {/* Animated heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '4rem', color: '#ff6ec4', position: 'relative', zIndex: 1 }}
      >
        Hi, I’m Kithmi 👋
      </motion.h2>

      {/* Animated subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginTop: '1rem', color: '#ccc', fontSize: '1.5rem', position: 'relative', zIndex: 1 }}
      >
        A dual-degree undergraduate passionate about software development and big data.<br />  
        Currently pursuing Information Systems at Sabaragamuwa University of Sri Lanka and Software Engineering at IIT (University of Westminster).
      </motion.p>

      {/* Hero image */}
      <motion.img
        src={heroImage}
        alt="Hero"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          marginTop: '2rem',
          borderRadius: '50%',
          width: '220px',
          height: '220px',
          objectFit: 'cover',
          border: '4px solid #ff6ec4',
          position: 'relative',
          zIndex: 1
        }}
      />
    </section>
  );
}

/* About Section */
function About() {
  return (
    <section id="about">
      <div className="container">
        <h3>About Me</h3>
        <p style={{ fontSize: '1.2rem' }}>
          I’m an enthusiastic developer with a unique academic journey—pursuing dual degrees in Information Systems and Software Engineering.<br />   
          My interests lie in building real-world applications and exploring big data solutions. <br /> I’ve worked on diverse projects ranging from Python-based systems to full-stack web applications, gaining hands-on experience with technologies like Java, React, Node.js, MongoDB, HTML, and CSS.  
          <br />Beyond academics, I enjoy learning new technologies, collaborating with teams, and solving problems that make a difference.
        </p>
      </div>
    </section>
  );
}

/* Skills Section */
function Skills() {
  // Skills with icons
  const skills = [
    { name: "Java", icon: <FaJava size={30} /> },
    { name: "JavaScript", icon: <FaJsSquare size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "MongoDB", icon: <FaDatabase size={30} /> },
    { name: "SQL", icon: <FaDatabase size={30} /> },
    { name: "Python", icon: <FaPython size={30} /> },
    { name: "C", icon: <FaCuttlefish size={30} /> },
    { name: "Tailwind", icon: <FaCss3Alt size={30} /> },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 2 }}
              style={{
                background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Dark gradient
                borderRadius: '15px',
                marginBottom: '10px' ,
                boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Projects Section */
function Projects() {
  const projects = [
    { title: "University Grading System", desc: "Designed a grading system to streamline academic evaluations.\n Tech: Python" },
    { title: "UNSDG Awareness Website", desc: "Built an educational website to raise awareness about the UN Sustainable Development Goal 'Life on Land'.  Tech: HTML, CSS" },
    { title: "Ticket Simulation System", desc: "TDeveloped a simulation system with multi-threading to handle ticket bookings.  Tech: Java" },
    { title: "Seat Booking System for a Plane", desc: "Created an interactive system for managing seat reservations.  Tech: Java" },
    { title: "Sanction Guard – AI-powered Sanction Screening (Group Project)", desc: "Collaborated on building a sanction screening system with role-based login, audit trails, and AI-assisted matching.  Tech: React, Node.js, MongoDB, Elasticsearch" },
    { title: "Pet Website – E-Commerce Shop (Group Project)", desc: "Contributed to a pet-focused website by developing the shop feature.  Tech: React, Javascript" }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255,255,255,0.2)' }}
              style={{
                background: 'linear-gradient(135deg, #232526, #414345)', // Dark gradient
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '10px' ,
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{p.title}</h4>
              <p style={{ fontSize: '1.1rem' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Contact Section */
function Contact() {
  return (
    <section id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3>Contact</h3>
        <p style={{ fontSize: '1.2rem' }}>Let’s connect! You can find me here:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://github.com/kithmiHettiarachchi" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/kithmi-hettiarachchi-992775270" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
        </div>
      </div>
    </section>
  );
}

/* Main App Component */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        © {new Date().getFullYear()} Kithmi Hettiarachchi
      </footer>
    </>
  );
}
