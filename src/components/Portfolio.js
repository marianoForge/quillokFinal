import React, { useState } from "react";
import Shelfset from "./worksPortfolio/Shelfset";
import Facefwd from "./worksPortfolio/Facefwd";
import Recordify from "./worksPortfolio/Recordify";
import * as portStyles from "../styles/portfolio.module.css";

const Portfolio = () => {
  

  const [show, setShow] = useState()

  return (
    <div className={portStyles.flex_container_fluid}>
      <div className={portStyles.flex_container}>
        <div className={portStyles.WorksTitle}>
          <h2 className={portStyles.titleSection}>PORTFOLIO</h2>
          <p className={portStyles.subtitleSection}>See our works</p>
        </div>

          <div style={{ display: show ? "block" : "block" }}  id="workShelfset">
            <Shelfset />
          </div>

          <div style={{ display: show ? "block" : "block" }} id="workFacefwd">
            <Facefwd />
          </div>

          <div style={{ display: show ? "block" : "none" }} id="workRecordify">
            <Recordify />
          </div>



      </div>
    </div>
  );
};

export default Portfolio;
