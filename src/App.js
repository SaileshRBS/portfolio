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
    window.location.href = 'mailto:saileshpotturi15@gmail.com';
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
            <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Data & Business Analyst</h1>
            <div className="hero-subtitle">
              Turning requirements into decision-ready insights with SQL • Tableau • Power BI • Agile
            </div>
            <p className="hero-description">
              4+ years transforming complex business requirements into actionable analytics solutions 
              that drive measurable impact across healthcare, e-commerce, and enterprise domains.
            </p>
            
            <div className="hero-cta">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                <span className="btn-icon">📊</span>
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                <span className="btn-icon">💬</span>
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">4+ Years</div>
              <div className="stat-label">Analytics Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">150+</div>
              <div className="stat-label">SQL Queries Optimized</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-number">+40%</div>
              <div className="stat-label">Decision Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="skills-overview">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">🗃️</div>
              <h3>SQL & Database Analytics</h3>
              <p>Expert in query optimization, data modeling, and performance tuning</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">📊</div>
              <h3>Business Intelligence</h3>
              <p>Creating executive dashboards with Tableau, Power BI, and advanced visualizations</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">📋</div>
              <h3>Business Analysis</h3>
              <p>Requirements engineering, process analysis, and stakeholder management</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🏥</div>
              <h3>Domain Expertise</h3>
              <p>Healthcare analytics, e-commerce intelligence, and enterprise solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-date">Dec 2024 - Present</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>Business Data Analyst</h3>
                  <div className="company-badge">Iqlogg, Inc</div>
                </div>
                <p className="experience-description">
                  Contributing to strategic vision and roadmap for data-driven initiatives, ensuring alignment with business goals through cross-functional collaboration and comprehensive analytics solutions.
                </p>
                <div className="achievements-section">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    <li>
                      <span className="achievement-icon">📈</span>
                      Developed and optimized 150+ complex SQL queries leading to 30% improvement in actionable insights
                    </li>
                    <li>
                      <span className="achievement-icon">📊</span>
                      Designed interactive Tableau dashboards and Excel reports increasing decision-making efficiency by 40%
                    </li>
                    <li>
                      <span className="achievement-icon">✅</span>
                      Achieved 95% on-time delivery rate for new reports and analytics deliverables
                    </li>
                    <li>
                      <span className="achievement-icon">💡</span>
                      Identified 15+ new growth opportunities improving operational efficiency by 20%
                    </li>
                    <li>
                      <span className="achievement-icon">🔍</span>
                      Reduced reporting errors by 18% through gap analysis and process improvement initiatives
                    </li>
                    <li>
                      <span className="achievement-icon">🤝</span>
                      Facilitated JAD sessions and stakeholder interviews ensuring validated business requirements
                    </li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <div className="tech-title">Technologies Used:</div>
                  <div className="tech-tags">
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">Excel</span>
                    <span className="tech-tag">JIRA</span>
                    <span className="tech-tag">MS Visio</span>
                    <span className="tech-tag">Agile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-date">Feb 2024 - Dec 2024</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>Data Analyst</h3>
                  <div className="company-badge">Rutgers University</div>
                </div>
                <p className="experience-description">
                  Specialized in healthcare analytics and research data management, developing interactive dashboards and statistical models for clinical decision support systems.
                </p>
                <div className="achievements-section">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    <li>
                      <span className="achievement-icon">⚡</span>
                      Reduced analysis time by 20% through optimized SQL queries and data retrieval efficiency
                    </li>
                    <li>
                      <span className="achievement-icon">📊</span>
                      Enhanced research-driven decision-making by 25% using Tableau and Power BI dashboards
                    </li>
                    <li>
                      <span className="achievement-icon">🔧</span>
                      Improved data quality by 25% through rigorous data cleaning, validation, and transformation
                    </li>
                    <li>
                      <span className="achievement-icon">🎯</span>
                      Achieved 35% improvement in outcome prediction accuracy using statistical modeling techniques
                    </li>
                    <li>
                      <span className="achievement-icon">📋</span>
                      Maintained comprehensive Requirements Traceability Matrix (RTM) ensuring complete test coverage
                    </li>
                    <li>
                      <span className="achievement-icon">📏</span>
                      Developed standardized data definitions ensuring consistency and reproducibility of research results
                    </li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <div className="tech-title">Technologies Used:</div>
                  <div className="tech-tags">
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">Power BI</span>
                    <span className="tech-tag">Statistical Modeling</span>
                    <span className="tech-tag">Healthcare Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-date">Nov 2022 - Dec 2023</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>Teaching Assistant - Management Information Sciences</h3>
                  <div className="company-badge">Rutgers University</div>
                </div>
                <p className="experience-description">
                  Enhanced Data Analysis course curriculum and led hands-on workshops, focusing on practical application of analytics tools and programming languages.
                </p>
                <div className="achievements-section">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    <li>
                      <span className="achievement-icon">👥</span>
                      Improved student engagement by 20% through simplified concepts and accessible content delivery
                    </li>
                    <li>
                      <span className="achievement-icon">📚</span>
                      Enriched course content by 25% through collaborative dataset analysis with instructors
                    </li>
                    <li>
                      <span className="achievement-icon">📊</span>
                      Enhanced student learning experiences by 30% using dynamic Tableau visualizations
                    </li>
                    <li>
                      <span className="achievement-icon">💻</span>
                      Increased students' analytical skills by 40% through hands-on SQL, Python, and R workshops
                    </li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <div className="tech-title">Technologies Used:</div>
                  <div className="tech-tags">
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">R</span>
                    <span className="tech-tag">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-date">Sep 2019 - Jun 2022</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>Business Analyst</h3>
                  <div className="company-badge">Twenty-Four Seven AI / Best Buy</div>
                </div>
                <p className="experience-description">
                  Managed comprehensive business analysis for E-Commerce and Retail projects, specializing in Agile frameworks, requirements documentation, and stakeholder management.
                </p>
                <div className="achievements-section">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    <li>
                      <span className="achievement-icon">📄</span>
                      Authored comprehensive BRD, SRS, FSD, and SDS documentation for E-Commerce projects
                    </li>
                    <li>
                      <span className="achievement-icon">⚙️</span>
                      Managed Agile frameworks including Scrum and SAFe methodologies for cross-functional teams
                    </li>
                    <li>
                      <span className="achievement-icon">🧪</span>
                      Conducted UAT and designed comprehensive test plans, cases, and scripts
                    </li>
                    <li>
                      <span className="achievement-icon">📊</span>
                      Designed balanced scorecards for senior executives through data architecture analysis
                    </li>
                    <li>
                      <span className="achievement-icon">🔄</span>
                      Facilitated project planning, sprint reviews, retrospectives, and Scrum ceremonies
                    </li>
                    <li>
                      <span className="achievement-icon">🤝</span>
                      Maintained long-term client relationships ensuring successful service delivery
                    </li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <div className="tech-title">Technologies Used:</div>
                  <div className="tech-tags">
                    <span className="tech-tag">UML</span>
                    <span className="tech-tag">JIRA</span>
                    <span className="tech-tag">MS Visio</span>
                    <span className="tech-tag">SharePoint</span>
                    <span className="tech-tag">Scrum</span>
                    <span className="tech-tag">SAFe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing impactful analytics solutions and business intelligence implementations</p>
          
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-header">
                <div className="project-icon">🏢</div>
                <span className="project-category">Enterprise BI</span>
              </div>
              <h3>IQlogg Analytics Platform</h3>
              <p>End-to-end analytics solution delivering executive dashboards and optimized data workflows for business intelligence across multiple departments.</p>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">+30%</span>
                  <span className="metric-label">Actionable Insights</span>
                </div>
                <div className="metric">
                  <span className="metric-value">+40%</span>
                  <span className="metric-label">Decision Efficiency</span>
                </div>
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">On-Time Releases</span>
                </div>
              </div>
              <div className="project-tech">
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Tableau</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">JIRA</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🏥</div>
                <span className="project-category">Healthcare Research</span>
              </div>
              <h3>Rutgers Healthcare Research Analytics</h3>
              <p>Large-scale healthcare data analytics focusing on patient demographics, disease progression, and treatment effectiveness analysis using advanced statistical modeling.</p>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">+25%</span>
                  <span className="metric-label">Decision-Making</span>
                </div>
                <div className="metric">
                  <span className="metric-value">+35%</span>
                  <span className="metric-label">Prediction Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">-20%</span>
                  <span className="metric-label">Retrieval Time</span>
                </div>
              </div>
              <div className="project-tech">
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">R</span>
                <span className="tech-tag">Tableau</span>
                <span className="tech-tag">Power BI</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🛒</div>
                <span className="project-category">E-commerce</span>
              </div>
              <h3>Best Buy OMA & FMS Enhancement</h3>
              <p>Business analysis and system enhancement of Order Management Application and Fulfillment Management System improving real-time data accuracy and customer service capabilities.</p>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">-15%</span>
                  <span className="metric-label">Handle Time</span>
                </div>
                <div className="metric">
                  <span className="metric-value">↗️</span>
                  <span className="metric-label">FCR Rate</span>
                </div>
                <div className="metric">
                  <span className="metric-value">↗️</span>
                  <span className="metric-label">CSAT Score</span>
                </div>
              </div>
              <div className="project-tech">
                <span className="tech-tag">JIRA</span>
                <span className="tech-tag">MS Visio</span>
                <span className="tech-tag">UML</span>
                <span className="tech-tag">Scrum</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">💳</div>
                <span className="project-category">Machine Learning</span>
              </div>
              <h3>Credit Default Prediction Model</h3>
              <p>Machine learning model for predicting credit defaults using statistical analysis and data modeling techniques, achieving high accuracy and recall rates for financial risk assessment.</p>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">85%</span>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">90%</span>
                  <span className="metric-label">Recall Rate</span>
                </div>
                <div className="metric">
                  <span className="metric-value">📊</span>
                  <span className="metric-label">Risk Assessment</span>
                </div>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Statistical Analysis</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🏆</div>
                <span className="project-category">Sports Analytics</span>
              </div>
              <h3>Commonwealth Games Data Visualization</h3>
              <p>Comprehensive Tableau dashboard analyzing Commonwealth Games performance data, creating interactive visualizations for sports analytics and demographic insights.</p>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">📊</span>
                  <span className="metric-label">Interactive Dashboard</span>
                </div>
                <div className="metric">
                  <span className="metric-value">🏃</span>
                  <span className="metric-label">Multi-Sport Analysis</span>
                </div>
                <div className="metric">
                  <span className="metric-value">📈</span>
                  <span className="metric-label">Performance Insights</span>
                </div>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Tableau</span>
                <span className="tech-tag">Data Visualization</span>
                <span className="tech-tag">Sports Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Academic foundation and continuous learning in data analytics and business intelligence</p>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <div className="degree-icon">🎓</div>
                <div className="degree-level">Master's Degree</div>
              </div>
              <h3>Master's in Information Technology & Analytics</h3>
              <div className="institution">
                <span className="institution-name">Rutgers, The State University of New Jersey</span>
                <span className="education-date">Aug 2022 - Dec 2023</span>
              </div>
              <p className="education-description">
                Specialized in data analytics, business intelligence, and information systems with focus on healthcare and enterprise analytics. 
                Advanced coursework in statistical modeling, data mining, and business process optimization.
              </p>
              <div className="education-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📊</span>
                  <span>Advanced Statistical Analysis</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Data Mining & Modeling</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏥</span>
                  <span>Healthcare Analytics Focus</span>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-header">
                <div className="degree-icon">🎓</div>
                <div className="degree-level">Bachelor's Degree</div>
              </div>
              <h3>Bachelor's in Information Technology</h3>
              <div className="institution">
                <span className="institution-name">Sreenidhi Institute of Science and Technology</span>
                <span className="education-date">Jul 2015 - May 2019</span>
              </div>
              <p className="education-description">
                Foundation in computer science, programming, and data management with focus on business applications and system analysis. 
                Comprehensive study of software development, database systems, and analytical methodologies.
              </p>
              <div className="education-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Programming & Development</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🗃️</span>
                  <span>Database Management</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🔧</span>
                  <span>System Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="certifications-title">Professional Development</h3>
            <div className="certifications-grid">
              <div className="cert-item">
                <span className="cert-icon">📊</span>
                <span className="cert-name">Tableau Certified Analyst</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">🗃️</span>
                <span className="cert-name">SQL Expert Certification</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">⚙️</span>
                <span className="cert-name">Agile/SAFe Practitioner</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">📈</span>
                <span className="cert-name">Power BI Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to discuss analytics opportunities, data challenges, or potential collaborations?
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card" onClick={handleEmailClick}>
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>saileshpotturi15@gmail.com</p>
                <span className="contact-action">Send Message</span>
              </div>
              
              <div className="contact-card" onClick={handleLinkedInClick}>
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Professional Network</p>
                <span className="contact-action">Connect</span>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Let's Build Something Great Together</h3>
              <p>
                Whether you need dashboard development, requirements analysis, or strategic analytics consulting, 
                I'm here to help transform your data into actionable insights that drive business growth.
              </p>
              <div className="cta-buttons">
                <button onClick={handleEmailClick} className="btn-primary">
                  <span className="btn-icon">💬</span>
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">Sailesh Potturi</div>
              <p>Data & Business Analyst</p>
              <p>Transforming data into actionable business insights</p>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollToSection('hero')} className="footer-link">Home</button>
              <button onClick={() => scrollToSection('experience')} className="footer-link">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Sailesh Potturi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
