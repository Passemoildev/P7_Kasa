import React from 'react'
import logo_black from '../../assets/logo/LOGO_black.png'

const Footer =()=>{
    return(
    <footer className="footer">
        <div className='footer__contLogo'>
          <img src={logo_black} alt="logo" className="footer__contLogo__logo" />
        </div> 
        <div className='footer__contCopyright'>
          <p className="footer__contCopyright__copyright">
            © 2020 Kasa. All rights reserved
          </p>
        </div>
      </footer>
    );
}

export default Footer;
