import React from 'react';

import './homepage.scss'

import DirectoryMenu from '../../components/directory-menu/DirectoryMenu';

const HomePage = () => {
  return( 
    <div className='homepage'>
        <DirectoryMenu/>
    </div>
  )
};

export default HomePage;
