import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/SURYA_logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt='logo' />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='vision' smooth={true} offset={-150} duration={500}>Vision</Link></li>
        <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='team' smooth={true} offset={-260} duration={500}>Team</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
