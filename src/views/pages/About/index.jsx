import React from 'react';
import pic from '../../../assets/images/dd.jpg'

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-heading">About Me</h2>
      </div>
      <div className="about-content">
        {/* Left Column */}
        <div className="about-text-container">
          <p className="about-text">
            Hi! I’m <span className="about-highlights">Sheikh Tanvir</span>, a 
            <span className="about-highlights"> Computer Science & Engineering (CSE) student</span> 
            with a deep passion for web development, problem-solving, and building innovative projects. 
            I specialize in <span className="about-highlights">Front-End Development</span> 
            and have hands-on experience with React, JavaScript, and CSS frameworks.
          </p>
          <p className="about-text">
            My academic journey has equipped me with a solid foundation in computer science principles, 
            including data structures, algorithms, and database management. I am currently pursuing 
            my Bachelor’s degree while actively contributing to software projects that align with my skills 
            and interests.
          </p>
          <p className="about-text">
            I thrive on continuous learning and believe in staying updated with the latest technologies. 
            My dream is to work on impactful projects that bridge technology and real-world solutions, 
            empowering communities and businesses alike.
          </p>
        </div>
        {/* Right Column */}
        <div className="about-image-container">
          <img 
            src={pic} 
            alt="Profile" 
            className="about-image"
          />
        </div>
      </div>

      {/* Academic Highlights Section */}
      <div className="academic-highlights">
        <h3 className="academic-heading">Academic Highlights</h3>
        <ul className="academic-list">
          <li>
            <strong>Diploma in Computer Science</strong> – 
            Graduated from Pabna Polytechnic Institute (2018-2022) with a stellar academic record.
          </li>
          <li>
            <strong>B.Sc. in Computer Science & Engineering</strong> – 
            Currently pursuing my degree at Bangladesh University of Business and Technology (2023-Present).
          </li>
          <li>
            Participated in coding contests and hackathons, problem-solving skills.
          </li>
          {/* <li>
            Presented a research paper: <em>"A Review on Emotion Detection from Text"</em> at a national conference.
          </li> */}
        </ul>
      </div>

      {/* Technical Expertise Section */}
      <div className="technical-expertise">
        <h3 className="technical-heading">Technical Expertise</h3>
        <ul className="skills-list">
          <li>Proficient in <strong>React.js, Angular.js JavaScript, HTML5, CSS3</strong>.</li>
          <li>Experience with <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>.</li>
          <li>Familiarity with back-end technologies like <strong>Node.js</strong> and <strong>Express</strong>.</li>
          <li>Database management skills using <strong>MySQL</strong>.</li>
          <li>Query in <strong>GraphQL</strong> and <strong>Apollo Client</strong></li>
          <li>Version control with <strong>Git & GitHub</strong>.</li>
        </ul>
      </div>

      {/* Fun Facts Section */}
      <div className="fun-facts">
        <h3 className="fun-facts-heading">Fun Facts About Me</h3>
        <ul className="fun-facts-list">
          <li>I love participating in coding contests and solving algorithmic problems.</li>
          <li>I’ve developed a habit of reading tech blogs and experimenting with new frameworks.</li>
          <li>Besides tech, I enjoy exploring different cuisines and watching tech-themed movies.</li>
          <li>I dream of publishing open-source tools that make developers’ lives easier.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
