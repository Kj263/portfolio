// src/Header.js
import React from 'react';
import '../index.css'; // For styling the header

const Education = () => (
  <div className = "education-container">
    <h2>Education</h2>
    <ul>
      <li>
        <b>Bachelor of Science in Computer Science</b>, College of Engineering, Oregon State University<br />
        Expected Graduation: Aug 2025 | GPA: 3.95
      </li>
      <li>
        <b>Bachelor of Science in Sustainability</b>, College of Agriculture, Oregon State University<br />
        Expected Graduation: Aug 2025 | GPA: 3.95
      </li>
    </ul>
  </div>
);

export default Education;