import React from 'react';

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
} from "react-icons/di";

import {SiStyledcomponents} from "react-icons/si"

import '../styles/components/technologies.sass'

function Technologies() {

  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "react",name:"React-Native",icon:<DiReact />},
    { id: "styled",name:"StyledComponents",icon:<SiStyledcomponents/>}   
  ];

  return (
    <section className='technologies'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid '>
      {technologies.map((tech)=>(
        <div className='technologies-card' id={tech.id} key={tech.id}>
          {tech.icon}
          <div className='tecnologies-infor'>
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Technologies;