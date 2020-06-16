import React from 'react';


function TopNavBar() {
  return (
    <div className='nav'>
    <div className="logo">FIshy Angle</div>
      <div className="menus">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#home">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNavBar;