import React from "react";
import "../index.css"; // External CSS for styling
import pythonIcon from '../assets/icons/python.png';
import sqlIcon from '../assets/icons/sql.png';
import javascriptIcon from '../assets/icons/javascript.png';
import cplusplusIcon from '../assets/icons/c++.png';
import pandasIcon from '../assets/icons/pandas.png';
import spyderIcon from '../assets/icons/spyder.png';
import jsonIcon from '../assets/icons/json.png';

const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "C++", icon: cplusplusIcon },
  { name: "Pandas", icon: pandasIcon },
  { name: "Spyder", icon: spyderIcon },
  { name: "JSON", icon: jsonIcon}
];

const Skills = () => {
    return (
      <div className="skills-bubble">
        {skills.map((skill, index) => (
          <div key={index} className="skill-icon" data-name={skill.name}>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    );
  };
  
export default Skills;