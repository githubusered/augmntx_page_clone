import React, { useEffect, useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/AugmntX-Logo720-142.png';

import './Nav.css';
import HamburgerIcon from '../Hamburger/HamburgerIcon';
import LeftNavbarWhenOpenHamburger from '../LeftNavbarOpenHamburger/LeftNavbarWhenOpenHamburger';

function Nav() {
  const [isNavbarFixed,setIsNavbarFixed] = useState(false);
useEffect(()=>{
  const handleScroll = () =>{
    if(window.scrollY >= 550){
      setIsNavbarFixed(true)
    }else{
      setIsNavbarFixed(false)
    }
  }

  window.addEventListener('scroll',handleScroll);

  return ()=>{
    window.removeEventListener('scroll',handleScroll)
  }

},[])
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isLeftSideNavVisible, setIsLeftSideNavVisible] = useState(false);

  const toggleDropDown = () =>{
    setIsDropDownVisible(!isDropDownVisible)
  }
  
  const toggleLeftSideNavBar = () => {
    setIsLeftSideNavVisible(!isLeftSideNavVisible)
  }
  
  return (
    <div className={`nav-container ${isNavbarFixed ? 'fixNav': ''}`}>
          <div className="container">
          <div className='nav-logo'><img src={logo} alt="augmntx LOGO" /></div>
          <ul>
            <a href='/profiles'>Why</a>
            <a  className='nav-dropdown-list-li' onClick={toggleDropDown}>Industries
            <FontAwesomeIcon style={{fontSize:'12px',padding:'2px',color:'#5271FF'}} icon={faChevronDown} />
              {isDropDownVisible && (<ul className={`nav-dropdown-list  ${isDropDownVisible ? 'opened' : ''}`}>
                <a href='/profiles'>Travel</a>
                <a href='/profiles'>Automotive</a>
                <a href='/profiles'>Banking</a>
                <a href='/profiles'>Capital Markets</a>
                <a href='/profiles'>Healthcare</a>
                <a href='/profiles'>Digital Commerce</a>
                <a href='/profiles'>View all</a>
              </ul>)}
            </a>
            <a href='/profiles'>Find Dev</a> 
            <a href='/join'>Apply as Vendor</a>
            <a href='/hire' className='nav-navbar-hire'>Hire Dev</a>
            <a href='/admin/auth/login'>Login</a>
          </ul>
          <div className='nav-burger-menu'>
            <div className='nav-navbar-hire'>Hire Talent</div>
            <div className='hamburgerIcon' onClick={toggleLeftSideNavBar}><HamburgerIcon /></div>            
            {isLeftSideNavVisible && <LeftNavbarWhenOpenHamburger />}
          </div>
        </div>
    </div>
  )
}

export default Nav
