import React from 'react';

import {sections} from './directory.data'
import './directory-menu.scss'

import MenuItem from '../menu-item/MenuItem';

const DirectoryMenu = () => {
  return(
    <div className="directory-menu">
        {
            sections.map(({id, ...sectionProps}) =>(
                <MenuItem key={id} {...sectionProps}/>
            ))
        }
    </div>
  )
};

export default DirectoryMenu;
