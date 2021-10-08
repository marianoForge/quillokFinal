import React from "react";
import QuillokLogo from "../images/Quillok_Logo.svg";
import HomeBGcircles from "../images/homeBGcircles.svg"
import * as navbarStyles from "../styles/navbar.module.css";

const Navbar = () => {
  // const { title } = data.site.siteMetadata

  return (
    <div className={navbarStyles.flex_container_fluid}>
      <div className={navbarStyles.flex_container}>
        <div>
          <img src={QuillokLogo} alt="Quillok Logo" />
        </div>
      </div>
      <div className={navbarStyles.bg_circles}>
        <img src={HomeBGcircles} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
