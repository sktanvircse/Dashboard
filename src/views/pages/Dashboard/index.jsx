import React from 'react';

const Dashboard = () => {
  return (
    <div className="resume-dashboard">
      <h1>Resume Dashboard</h1>

      {/* Personal Information Section */}
      <section className="section personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> Sheikh Tanvir</p>
        <p><strong>Email:</strong> sheikhtanvir@email.com</p>
        <p><strong>Location:</strong> Dhaka, Bangladesh</p>
        <p><strong>Bio:</strong> A passionate Front End Developer with experience in React, HTML, CSS, and JavaScript.</p>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React, Angular.Js</li>
          <li>Bootstrap, Tailwind CSS</li>
          <li>Node.js, Express</li>
          <li>GraphQL, Apollo Client</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Front End Developer at Digital Intelligence System Ltd.</h3>
          <p><strong>Duration:</strong> Jun 2023 - Present</p>
          <p>Worked on building scalable, responsive web applications using React, Angular.js, and other front-end technologies.</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p><strong>Institution:</strong> Bangladesh University of Business and Technology</p>
          <p><strong>Year:</strong> 2023 - Present</p>
        </div>
        <div className="education-item">
          <h3>Diploma in Computer Science</h3>
          <p><strong>Institution:</strong> Pabna Polytechnic Institute</p>
          <p><strong>Year:</strong> 2018 - 2022</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Name: E-Commerce Website</h3>
          <p><strong>Description:</strong> Built a simple e-commerce platform with product listings, user authentication.</p>
          <a href="https://github.com/sktanvircse/E-commerce_Website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project">
          <h3>Project Name: Restaurant Money Received Management</h3>
          <p><strong>Description:</strong> The Restaurant Money Received Management System is a software application designed to streamline the process of managing money received by a restaurant.</p>
          <a href="https://github.com/sktanvircse/Restaurant-Money-Received-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
