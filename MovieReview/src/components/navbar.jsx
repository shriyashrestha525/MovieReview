import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";
import './navbar.css';

const navbar = () => {
  const [input, setInput] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Handle Search and Navigate to SearchResult page
  const handleSearch = () => {
    if (input) {
      navigate(`/search/${input}`); // Navigate to the search results page with the search query in the URL
    };
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className='nav-container'>
      <img className='logo' src={logo} alt='Movie-logo' />
      <button className='menu' onClick={toggleMenu}>
        <IoIosMenu />
      </button>
      <div className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
          <li><Link to='/movie'onClick={toggleMenu}>Movies</Link></li>
          <li><Link to='/about'onClick={toggleMenu}>About</Link></li>
          <li> <Link to='/journal'onClick={toggleMenu}>Journal</Link></li>
        </ul>
      </div>
      <div className='search'>
        <input className='search-box' type="text" placeholder='search for movies...' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} />
        <button className='search-btn' onClick={handleSearch}>< FaSearch /></button>
      </div>


    </div>

  )
}
export default navbar
