import React from 'react';
import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:saileshpoturi15@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sailesh-potturi-068367166', '_blank');
  };

  return (
    <div className="App">
      <div className="grid-background"></div>
      
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-logo">Sailesh Potturi</div>
          <nav className="nav">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Data & Business Analyst</h1>
          <div className="hero-subtitle">
            Turning requirements into decision-ready insights with SQL • Tableau • Power BI • Agile
          </div>
          <p className="hero-description">
            4+ years transforming complex business requirements into actionable analytics solutions 
            that drive measurable impact across healthcare, e-commerce, and enterprise domains.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">4+ Years</div>
              <div className="stat-label">Analytics Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">SQL Queries Optimized</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Business Data Analyst</h3>
                <span className="company">Iqlogg, Inc</span>
                <span className="duration">Dec 2024 - Present</span>
              </div>
              <ul className="achievements">
                <li>Developed and optimized 150+ complex SQL queries leading to 30% improvement in actionable insights</li>
                <li>Designed interactive Tableau dashboards increasing decision-making efficiency by 40%</li>
                <li>Achieved 95% on-time delivery rate for new reports and analytics deliverables</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Analyst</h3>
                <span className="company">Rutgers University</span>
                <span className="duration">Feb 2024 - Dec 2024</span>
              </div>
              <ul className="achievements">
                <li>Reduced analysis time by 20% through optimized SQL queries and data retrieval efficiency</li>
                <li>Enhanced research-driven decision-making by 25% using Tableau and Power BI dashboards</li>
                <li>Achieved 35% improvement in outcome prediction accuracy using statistical modeling</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Business Analyst</h3>
                <span className="company">Twenty-Four Seven AI / Best Buy</span>
                <span className="duration">Sep 2019 - Jun 2022</span>
              </div>
              <ul className="achievements">
                <li>Authored comprehensive BRD, SRS, FSD documentation for E-Commerce projects</li>
                <li>Managed Agile frameworks including Scrum and SAFe methodologies</li>
                <li>Designed balanced scorecards for senior executives through data architecture analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <h3>IQlogg Analytics Platform</h3>
              <p>End-to-end analytics solution delivering executive dashboards and optimized data workflows for business intelligence across multiple departments.</p>
              <div className="project-metrics">
                <span className="metric">+30% Actionable Insights</span>
                <span className="metric">+40% Decision Efficiency</span>
                <span className="metric">95% On-Time Releases</span>
              </div>
              <div className="tech-stack">SQL • Tableau • Python • JIRA</div>
            </div>

            <div className="project-card">
              <h3>Rutgers Healthcare Research Analytics</h3>
              <p>Large-scale healthcare data analytics focusing on patient demographics, disease progression, and treatment effectiveness analysis using advanced statistical modeling.</p>
              <div className="project-metrics">
                <span className="metric">+25% Decision-Making</span>
                <span className="metric">+35% Prediction Accuracy</span>
                <span className="metric">-20% Data Retrieval Time</span>
              </div>
              <div className="tech-stack">SQL • Python • R • Tableau • Power BI</div>
            </div>

            <div className="project-card">
              <h3>Best Buy OMA & FMS Enhancement</h3>
              <p>Business analysis and system enhancement of Order Management Application and Fulfillment Management System improving real-time data accuracy and customer service capabilities.</p>
              <div className="project-metrics">
                <span className="metric">-15% Handle Time</span>
                <span className="metric">Improved FCR</span>
                <span className="metric">Enhanced CSAT</span>
              </div>
              <div className="tech-stack">JIRA • MS Visio • UML • Scrum</div>
            </div>

            <div className="project-card">
              <h3>Credit Default Prediction Model</h3>
              <p>Machine learning model for predicting credit defaults using statistical analysis and data modeling techniques, achieving high accuracy and recall rates for financial risk assessment.</p>
              <div className="project-metrics">
                <span className="metric">85% Accuracy</span>
                <span className="metric">90% Recall Rate</span>
                <span className="metric">Risk Assessment</span>
              </div>
              <div className="tech-stack">Python • Machine Learning • Statistical Analysis</div>
            </div>

            <div className="project-card">
              <h3>Commonwealth Games Data Visualization</h3>
              <p>Comprehensive Tableau dashboard analyzing Commonwealth Games performance data, creating interactive visualizations for sports analytics and demographic insights.</p>
              <div className="project-metrics">
                <span className="metric">Interactive Dashboard</span>
                <span className="metric">Multi-Sport Analysis</span>
                <span className="metric">Performance Insights</span>
              </div>
              <div className="tech-stack">Tableau • Data Visualization • Sports Analytics</div>
            </div>
          </div>
        </div>
      </section> 
     
       {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Ready to discuss analytics opportunities, data challenges, or potential collaborations?
          </p>
          
          <div className="contact-options">
            <div className="contact-card" onClick={handleEmailClick}>
              <h3>Email</h3>
              <p>saileshpoturi15@gmail.com</p>
              <span className="contact-action">Send Message</span>
            </div>
            
            <div className="contact-card" onClick={handleLinkedInClick}>
              <h3>LinkedIn</h3>
              <p>LinkedIn Profile</p>
              <span className="contact-action">Connect</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Sailesh Potturi</div>
            <p>Data & Business Analyst • Transforming data into actionable business insights</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
