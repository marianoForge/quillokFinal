import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import process1 from '../images/process_img_1.jpg';
import process2 from '../images/process_img_2.jpg';
import process3 from '../images/process_img_3.jpg';
import process4 from '../images/process_img_4.jpg';
// import previewVideo from "../images/process_preview_video.jpg";
import arrowWhite from '../images/process_arrow_white.svg';
import arrowYellow from '../images/process_arrow_yellow.svg';
import * as processStyles from '../styles/process.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className={processStyles.flex_container_fluid}>
      <div className={processStyles.flex_container}>
        <div className={processStyles.container_images}>
          <div
            className={processStyles.image_1}
            // data-aos="fade-right"
            // data-aos-delay="0"
            // data-aos-duration="1000"
          >
            <img src={process1} width='100%' alt='Demo' />
          </div>
          <div
            className={processStyles.image_2}
            // data-aos="fade-down"
            // data-aos-delay="500"
            // data-aos-duration="1000"
          >
            <img src={process2} width='100%' alt='Demo' />
          </div>
          <div
            className={processStyles.image_3}
            // data-aos="fade-left"
            // data-aos-delay="1000"
            // data-aos-duration="1000"
          >
            <img src={process3} width='100%' alt='Demo' />
          </div>
          <div
            className={processStyles.image_4}
            // data-aos="fade-up"
            // data-aos-delay="1500"
            // data-aos-duration="1000"
          >
            <img src={process4} width='100%' alt='Demo' />
          </div>
        </div>

        <div className={processStyles.container_process}>
          <div className={processStyles.container_howWedo}>
            <h2 className={processStyles.titleSection}>PROCESS</h2>
            <p className={processStyles.subtitleSection}>
              And this is how we do it.
            </p>
            <div className={processStyles.descriptionSection}>
              <p>Every successful piece of software needs a plan in place.</p>
              <p>
                Our seasoned engineers understand that every part of the
                development process is important and know how to leverage every
                stage to bring you the most value.
              </p>
            </div>
          </div>
          <div className={processStyles.container_weDoItems}>
            <div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos='zoom-in'
                  data-aos-delay='500'
                  data-aos-duration='500'
                >
                  <img src={arrowWhite} alt='Demo' />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos='zoom-in'
                  data-aos-delay='0'
                  data-aos-duration='500'
                >
                  1
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos='flip-up'
                data-aos-delay='0'
                data-aos-duration='1000'
              >
                Roadmapping & Strategy
              </div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos='zoom-in'
                  data-aos-delay='500'
                  data-aos-duration='500'
                >
                  <img src={arrowWhite} alt='Demo' />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos='zoom-in'
                  data-aos-delay='0'
                  data-aos-duration='500'
                >
                  2
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos='flip-up'
                data-aos-delay='0'
                data-aos-duration='1000'
              >
                UX/UI Research & Product Design
              </div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos='zoom-in'
                  data-aos-delay='500'
                  data-aos-duration='500'
                >
                  <img src={arrowYellow} alt='Demo' />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos='zoom-in'
                  data-aos-delay='0'
                  data-aos-duration='500'
                >
                  3
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos='flip-up'
                data-aos-delay='0'
                data-aos-duration='1000'
              >
                Development & QA
              </div>
              <div
                className={processStyles.number_4}
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
              >
                4
              </div>
              <div
                className={processStyles.item_4}
                data-aos='flip-up'
                data-aos-delay='0'
                data-aos-duration='1000'
              >
                Launch & Grow
              </div>
            </div>
          </div>

          <div
            className={processStyles.frameScheMeet}
            // data-aos="fade-up"
            // data-aos-delay="0"
            // data-aos-duration="1000"
          >
            <div className={processStyles.containerScheMeet}>
              <div className={processStyles.textScheMeet}>
                <p>
                  We see ourselves as product craftsmen, taking a holistic
                  approach to software engineering, where we give code quality,
                  UI & UX design, and product management the same love. Want to
                  know more?
                </p>
              </div>
              {/* <Link className={processStyles.btn_scheMeet} to="https://calendly.com/quillok/30min" target={"_blank"}> */}

              <Link
                className={processStyles.btn_scheMeet}
                to={{
                  pathname: 'https://calendly.com/quillok/30min',
                }}
                target='_blank'
              >
                <div>SCHEDULE A MEETING</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
