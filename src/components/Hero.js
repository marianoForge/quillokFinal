import React, { useEffect } from "react";
import Diagonal from "../images/Home_diagonal.svg";
import KeepScrolling from "../images/keepScrolling.svg";
import * as heroStyles from "../styles/hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className={heroStyles.flex_container_fluid}>
        <div className={heroStyles.flex_container}>
          <h2
          // data-aos="fade"
          // data-aos="zoom-in"
          // data-aos-delay="500"
          // data-aos-duration="1500"
          >
            We are here to help you <span>launch<span>s</span>fast</span> and grow strong lorem ipsum dolor sit.
          </h2>
          <div className={heroStyles.keepScrollimage}>
            <img src={KeepScrolling} alt="keep Scrolling" />
          </div>
        </div>
      </div>
      <div className={heroStyles.BGdiagonal}>
        <img src={Diagonal} width="100%" alt="" />
      </div>
    </div>
  );
};

export default Hero;
