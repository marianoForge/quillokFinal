import React from 'react';
import QuillokLogo from '../images/Quillok_Logo.svg';
import * as navbarStyles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navbarStyles.flex_container_fluid}>
      <div className={navbarStyles.flex_container}>
        <div className={navbarStyles.logoQuillok}>
          <img src={QuillokLogo} alt="Quillok Logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
