import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const Dashboard = () => {
  // Radar chart data for skills
  const radarData = {
    labels: [
      'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 
      'React', 'Angular.Js', 'Node.js', 'Express', 'GraphQL', 
      'Apollo Client', 'Git & GitHub'
    ],
    datasets: [
      {
        label: 'Skills Rating',
        data: [90, 80, 75, 80, 90, 95, 80, 80, 80, 80, 85, 90], // Percentage of skills (adjust as needed)
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background
        borderColor: 'rgba(255, 99, 132, 1)', // Red border color
        borderWidth: 2,
      },
    ],
  };
  

  // Styling
  const dashboardStyles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7fc',
      color: '#333',
      margin: '20px auto',
      padding: '20px',
      maxWidth: '1500px',
      borderRadius: '8px',
    },
    section: {
      marginBottom: '40px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2.5rem', // Size of the heading
      fontWeight: 'bold', // Bold text
      color: '#4A90E2', // Light blue color for the text
      textAlign: 'center', // Center the header
      textTransform: 'uppercase', // Uppercase the text
      letterSpacing: '2px', // Add space between letters
      marginBottom: '40px', // Space below the header
      background: 'linear-gradient(135deg, #4A90E2, #50E3C2)', // Gradient background
      color: 'transparent', // Text color becomes transparent to show the gradient
      WebkitBackgroundClip: 'text', // Clip the background to text (works in webkit browsers)
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Clean, modern font
      // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect for depth
      padding: '10px', // Padding around the text
      transition: 'transform 0.3s ease-in-out', // Add a transition for hover effect
    },
    skillChart: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    link: {
      color: '#4f8df7',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={dashboardStyles.container}>
      <h1 style={dashboardStyles.heading}>My Dashboard</h1>

      {/* Personal Information Section */}
      <section style={dashboardStyles.section}>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> Sheikh Tanvir</p>
        {/* <p><strong>Email:</strong> sheikhtanvir@email.com</p> */}
        <p><strong>Location:</strong> Dhaka, Bangladesh</p>
        <p><strong>Bio:</strong> A passionate Front End Developer with experience in React, HTML, CSS, and JavaScript.</p>
      </section>

      {/* Skills Section with Radar Chart */}
      <section style={dashboardStyles.section}>
        <h2>Skills</h2>
        <div style={dashboardStyles.skillChart}>
          <Radar data={radarData} />
        </div>
      </section>

      {/* Experience Section */}
      <section style={dashboardStyles.section}>
        <h2>Experience</h2>
        <div>
          <h3>Front End Developer at Digital Intelligence System Ltd.</h3>
          <p><strong>Duration:</strong> Jun 2023 - Present</p>
          <p>Worked on building scalable, responsive web applications using React, Angular.js, and other front-end technologies.</p>
        </div>
      </section>

      {/* Education Section */}
      <section style={dashboardStyles.section}>
        <h2>Education</h2>
        <div>
          <h3>Bachelor of Science in Computer Science</h3>
          <p><strong>Institution:</strong> Bangladesh University of Business and Technology</p>
          <p><strong>Year:</strong> 2023 - Present</p>
        </div>
        <div>
          <h3>Diploma in Computer Science</h3>
          <p><strong>Institution:</strong> Pabna Polytechnic Institute</p>
          <p><strong>Year:</strong> 2018 - 2022</p>
        </div>
      </section>

      {/* Projects Section */}
      <section style={dashboardStyles.section}>
        <h2>Projects</h2>
        <div>
          <h3>Project Name: E-Commerce Website</h3>
          <p><strong>Description:</strong> Built a simple e-commerce platform with product listings, user authentication.</p>
          <a href="https://github.com/sktanvircse/E-commerce_Website" target="_blank" rel="noopener noreferrer" style={dashboardStyles.link}>View on GitHub</a>
        </div>

        <div>
          <h3>Project Name: Restaurant Money Received Management</h3>
          <p><strong>Description:</strong> The Restaurant Money Received Management System is a software application designed to streamline the process of managing money received by a restaurant.</p>
          <a href="https://github.com/sktanvircse/Restaurant-Money-Received-Management" target="_blank" rel="noopener noreferrer" style={dashboardStyles.link}>View on GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
