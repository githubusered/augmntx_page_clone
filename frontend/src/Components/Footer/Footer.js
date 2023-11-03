import React from 'react'

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container2">
          <div className='footer-top'>
              <div className='footer-logo'>
                <img src="https://augmntx.com/assets/img/augmntxlogo.png" alt="img augmntx" />
              </div>
              <ul className='footer-list'>
                <li className='footer-title'>Information</li>
                <li >About Us</li>
                <li >Press</li>
                <li >Carrers</li>
                <li >Blog</li>
                <li >Contact Us</li>
              </ul>
              <ul className='footer-list'>
                <li className='footer-title'>AugmntX</li>
                <li >View Profiles</li>
                <li >Discover</li>
                <li >On Demand Talent</li>
                <li >Pricing</li>
              </ul>
              <ul className='footer-list'>
                <li className='footer-title'>Vendor</li>
                <li >Apply As Vendor</li>
                <li >Vendor Login</li>
                <li >Remote Jobs</li>
                <li >Resources</li>
              </ul>
          </div>
          <div className='footer-bottom'>
            <div className='footer-bottom-left'>
              <span className='sameClassSpan'>© 2022 - 2023 </span>
              <span className='footer-augmntx'>AugmntX</span>
              -
              <span className='sameClassSpan'>Labor Omnia Vincit</span>
              ⚡ by  
              <a href="https://superlabs.co">SuperLabs</a>
            </div>
            <div className='footer-bottom-right'>
                <span><a href="https://augmntx.com/terms-and-conditions">Terms of Use</a></span>
                <span><a href="https://augmntx.com/privacy-policy">Privacy Policy</a></span>
            </div>
          </div>
      </div>
    </footer>
  )
}


export default Footer;
