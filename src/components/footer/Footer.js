import React from 'react'
import logo_black from '../../assets/logo/LOGO_black.png'

const Footer =()=>{
    return(
    <footer className="footer">
        <img src={logo_black} alt="logo" className="footer__logo" />
        <p className="footer__copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;
