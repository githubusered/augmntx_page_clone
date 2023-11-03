import React, { useState } from 'react'

import {
    faChevronDown,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

import {
    faLinkedin,
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';



import './LeftNavbarWhenOpenHamburger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LeftNavbarWhenOpenHamburger() {
    const [showDropDownList,setShowDropDownList] = useState(false);
    const [showLeftNav,setShowLeftNav] = useState(true);
    const toggleDropDown = () => {
        setShowDropDownList(!showDropDownList);
    }

    const closeLeftNavbar = () => {
        setShowLeftNav(!showLeftNav);
        
    }
  return (

    <div className={`leftSideNav ${showLeftNav ?  '' : 'displayNone'}`}>
        <div className="mini-container">
            <div className='leftSideNav-top'>
                <p>AugmntX</p>
                <p onClick={closeLeftNavbar}><FontAwesomeIcon icon={faTimes} /></p>
            </div>
            <ul>
                <li>Why</li>
                <li className='dropDown-li' onClick={toggleDropDown}>
                    <span>Industries</span> 
                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                    <ul className={`dropDown-li-list ${showDropDownList ? 'showDropDown' : ''}`}>
                        <li>Travel</li>
                        <li>Automotive</li>
                        <li>Banking</li>
                        <li>Capital Markets</li>
                        <li>Healthcare</li>
                        <li>Digital Commerce</li>
                        <li>View all</li>
                    </ul>
                </li>
                <li>Find Dev</li>
                <li>Apply as Vendor</li>
                <li>Login</li>
                <li>Hire Dev</li>
                <li>
                    <p>hello@augmntx.com</p>
                    <p>+919820045154</p>
                </li>
                <li >
                    <FontAwesomeIcon icon={faLinkedin} className='socialPages'/>
                    <FontAwesomeIcon icon={faTwitter}  className='socialPages'/>
                    <FontAwesomeIcon icon={faFacebook} className='socialPages' />
                    <FontAwesomeIcon icon={faInstagram}  className='socialPages'/>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default LeftNavbarWhenOpenHamburger;