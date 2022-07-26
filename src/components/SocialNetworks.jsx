import React from 'react';
import '../styles/components/socialnetworks.sass'

import {FaLinkedinIn,FaGithub,FaInstagram} from 'react-icons/fa'

const socialNetworks = [
    { name: "linkedin",link:"https://www.linkedin.com/manoel-iranilson-vieira-8b6695191/" ,icon: <FaLinkedinIn /> },
    { name: "github", link:"https://github.com/Manoel-iranilson",icon: <FaGithub /> },
  ];

function SocialNetworks() {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network)=>(
            <a href={network.link} className='social-btn' id={network.name} key={network.name} >
              {network.icon}  
            </a>
        ))} 
    </section>
    
  );
}

export default SocialNetworks;