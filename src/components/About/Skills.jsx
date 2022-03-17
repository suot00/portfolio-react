import React from "react";
import "./Skills.css";

const frontendSkills = [
  { title: "HTML & CSS", percentage: "80%" },
  { title: "Javascript", percentage: "60%" },
  { title: "Bootstrap", percentage: "70%" },
  { title: "React Js", percentage: "30%" },
];
const backendSkills = [
  { title: "Node js", percentage: "85%" },
  { title: "Javascript", percentage: "85%" },
  { title: "MongoDB", percentage: "85%" },
  { title: "React Js", percentage: "85%" },
];

const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5 ">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="backend_skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skill_title d-flex align-items-center justify-content-between ">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill_bar">
        <span
          className="skill_bar-percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
