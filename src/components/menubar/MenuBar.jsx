import React from 'react';
import './MenuBar.css'

const MenuBar = ({Page}) => {
  return (
    <div>
        <div>
            <div>
                Profile
            </div>
            <hr />
             <div>
                  Posts
            </div>
            <hr />
             <div>
                Gallery
            </div>
            <hr />
            <div>
                Todo
            </div>
        </div>
    </div>
  )
}

export default MenuBar