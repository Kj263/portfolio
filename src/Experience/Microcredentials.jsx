import React from "react";
import "../index.css"; // External CSS for styling
import programming from '../assets/icons/programming-fundamentals.png';
import theoretical from '../assets/icons/theoretical-computer-science.png';

const microcredentials = [
  { name: "Programming Fundamentals", icon: programming, link: "https://www.credly.com/users/kjirsten-fastabend" },
  { name: "Theoretical Computer Science", icon: theoretical, link: "https://www.credly.com/users/kjirsten-fastabend" }
];

const Microcredentials = () => {
  return (
    <div className="microcredentials-bubble">
      {microcredentials.map((microcredential, index) => (
        <a 
          key={index} 
          href={microcredential.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="microcredentials-icon"
          data-name={microcredential.name}
        >
          <img src={microcredential.icon} alt={microcredential.name} />
        </a>
      ))}
    </div>
  );
};

export default Microcredentials;
