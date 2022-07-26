import React from 'react';
import About from './About';

import "../styles/components/maincontent.sass"
import Repositories from './repositories';
import Technologies from './Technologies';



function MainContent() {
  return (
    <main id='main-content'>
        <About/>
        <Technologies/>
        <Repositories/>
    </main>
  );
}

export default MainContent;