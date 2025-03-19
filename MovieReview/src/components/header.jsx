import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <img id= 'background' src="src/assets/background.jpg" alt="img" />
      <div className="center">
        <p className='text'>Track films you've watched.</p>
        <p className="text">Save those you want to see.</p>
        <p className="text">Tell your friends what’s good.</p>
      </div>
    </div>

  )
}

export default Header;
