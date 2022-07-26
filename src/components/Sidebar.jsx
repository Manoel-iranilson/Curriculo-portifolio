import React from 'react';
import image from "../img/perfil.jpg"
import "../styles/components/sidebar.sass"
import Information from './Information';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
  return(

    <aside id='sidebar'>
        <img src={image} alt="Manoel Iranilson" />
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks/>
        <Information/>
        <a href='' className='btn' >Download do Currículo</a>
    </aside>
    
  )
}

export default Sidebar;