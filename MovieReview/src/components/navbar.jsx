import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import './navbar.css'

const navbar = () => {
  return (

    <div className='nav-container'>
      <img className='logo' src={logo} alt='Movie-logo' />
      <div className='nav-list'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li> <Link to='/journal'>Journal</Link></li>
        </ul>
      </div>
      <div className='search'>
        <input className='search-box' type="text" placeholder='search' />
        <button className='search-btn'><FaSearch /></button>
        
        
      </div>
    </div>

  )
}

export default navbar
