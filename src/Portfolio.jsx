import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
     
      <header className="header">
        <h1>Yalakaturi Someswar Naidu</h1>
        <br /><br />
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      
      <section className="hero">
        <h2>Aspiring Software Developer</h2>
        <p>Passionate about building web  applications</p>
        <a href="mailto:someswarnaidu58@gmail.com" className="btn">Contact Me</a>
      </section>

      
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>To secure a beginner-level position in a reputable organization where I can apply my technical skills, learn continuously, and grow both personally and professionallyas a Frontend Developer.</p>
        <h2>Education Details</h2>
        <p>Reva University – B.Tech CSIT – CGPA: 9.01/10 cgpa</p>
        <p>Sri Chaitanya Academy – Intermediate MPC – 94.5%</p>
        <p>Keshava Reddy School – SSC – 96.66%</p>
      </section>

      
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div><strong>Languages:</strong> C, Java, Python, C#, React js, HTML, CSS, JavaScript</div>
          <div><strong>Frameworks:</strong> .NET</div>
          <div><strong>Tools:</strong> Git, VSCode, Android Studio, Firebase, Arduino,vercel</div>
          <div><strong>Databases:</strong> MySQL, Firebase Realtime DB</div>
        </div>
      </section>

      
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p><strong>Women Safety App</strong> – Java, Android Studio<br/>Emergency alert app with SOS messaging and background services.</p>
        <p><strong>Chatbot</strong> – React.js, Flask, Python, REST API, SerpAPI<br/>AI chatbot for instant government info using live Google Search.</p>
        <p><strong>Quiz Web App</strong> – HTML, CSS, JavaScript<br/>Interactive quiz with timer and mobile-friendly design.</p>
        <p><strong>IoT Robot</strong> – NodeMCU, Firebase, MIT App Inventor<br/>Real-time control via custom app using Firebase.</p>
      </section>

      
      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <p>Java - SpringBoard</p>
        <p>Data Structures and Algorithms - SpringBoard</p>
        <p>Python Programming - Coursera</p>
      </section>

      
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:someswarnaidu58@gmail.com">someswarnaidu58@gmail.com</a></p>
        <p>Phone: +91-9440212931</p>
        <p>Location: Tirupathi, India</p>
        <p>
          <a href="https://www.linkedin.com/in/yalakaturi-someswar-naidu-002b62255" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/someswar123624" target="_blank"> GitHub</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Yalakaturi Someswar Naidu. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Portfolio
