import React from 'react';

import Directory from '../../components/directory/directory.jsx'
import Header from '../../components/header/header'
import './homepage.styles.scss';

const HomePage = () => (
  <div>
 <Header/>
  <div className= 'list'>
 
      <Directory/>
    </div>
  </div>
  
  
);

export default HomePage;


