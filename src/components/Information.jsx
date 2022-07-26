import React from 'react';
import {AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/information.sass"

function Information() {
  return (
      <section id='information'>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
            <h3>Localização</h3>
            <p>Juazeiro do norte - CE</p>
            </div>
         </div>
        <div className='info-card'>
          <AiOutlineMail id='email-icon'/>
          <div>
            <h3>E-mail</h3>
            <p>manoelvieirafilho0@gmail.com</p>
           </div>
        </div>
      </section>
  );
}

export default Information;