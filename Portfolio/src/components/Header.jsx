import React from 'react'
import '../styles/Header.css';
const Header = () => {
  return (
    <header className='header'>
       <div className="header-name">
        <h1>Surya Vadana | WEB DEVELOPER</h1>
      </div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    </header>
  );
}

export default Header
