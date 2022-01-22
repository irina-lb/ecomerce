import React from 'react';

import {sections} from '../../directory.data'
import './directory-menu.scss'

import MenuItem from '../menu-item/MenuItem';

const DirectoryMenu = () => {
  return(
    <div className="directory-menu">
        {
            sections.map(({title,id,imageUrl,linkUrl, size}) =>(
                <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size}/>
            ))
        }
    </div>
  )
};

export default DirectoryMenu;
