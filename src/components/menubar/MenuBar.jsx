import React from 'react';
import './MenuBar.css'
import { Link } from 'react-router-dom';

const MenuBar = ({page}) => {
  
  return (
    <div className='menubar-main-container'>
        <div className='menubar-container'>
            <Link to="/user" className='menubar-route-text' style={page=='Profile' ? {color:"white"} : {}}>
                Profile
            </Link>
            <hr  className='menubar-horizontal-line'/>
             <Link to='/posts' className='menubar-route-text'style={page=='Posts' ? {color:"white"} : {}}> 
                  Posts
            </Link>
            <hr className='menubar-horizontal-line' />
             <Link to='/gallery' className='menubar-route-text' style={page=='Gallery' ? {color:"white"} : {}}>
                Gallery
            </Link>
            <hr className='menubar-horizontal-line' />
            <Link to='/todo' className='menubar-route-text' style={page=='Todo' ? {color:"white"} : {}}>
                Todo
            </Link>
        </div>
    </div>
  )
}

export default MenuBar