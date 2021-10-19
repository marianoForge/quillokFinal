import React, { useEffect } from "react";
import process1 from "../images/process_img_1.jpg";
import process2 from "../images/process_img_2.jpg";
import process3 from "../images/process_img_3.jpg";
import process4 from "../images/process_img_4.jpg";
import previewVideo from "../images/process_preview_video.jpg";
import arrowWhite from "../images/process_arrow_white.svg";
import arrowYellow from "../images/process_arrow_yellow.svg";
import * as processStyles from "../styles/process.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
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
            <img src={process1} width="100%" alt="Demo" />
          </div>
          <div
            className={processStyles.image_2}
            // data-aos="fade-down"
            // data-aos-delay="500"
            // data-aos-duration="1000"
          >
            <img src={process2} width="100%" alt="Demo" />
          </div>
          <div
            className={processStyles.image_3}
            // data-aos="fade-left"
            // data-aos-delay="1000"
            // data-aos-duration="1000"
          >
            <img src={process3} width="100%" alt="Demo" />
          </div>
          <div
            className={processStyles.image_4}
            // data-aos="fade-up"
            // data-aos-delay="1500"
            // data-aos-duration="1000"
          >
            <img src={process4} width="100%" alt="Demo" />
          </div>
        </div>

        <div className={processStyles.container_process}>
          <div className={processStyles.container_howWedo}>
            <h2 className={processStyles.titleSection}>PROCESS</h2>
            <p className={processStyles.subtitleSection}>And how we do it...</p>
            <div className={processStyles.descriptionSection}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique mauris mattis facilisi vedivpellentesque aliquet lorem
                viverra nunc tincidunt.
              </p>
              <p>
                Condimentum scelerisque sed at quis sit magna quam nisl cursus
                quam sed non fames adipiscing enim varius libero ullamcorper
                enim non aliquam duis.
              </p>
            </div>
          </div>
          <div className={processStyles.container_weDoItems}>
            <div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <img src={arrowWhite} alt="Demo" />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  1
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos="flip-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Roadmapping & Strategy
              </div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <img src={arrowWhite} alt="Demo" />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  2
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos="flip-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                UX/UI Research & Product Design
              </div>
              <div className={processStyles.arrowNumber}>
                <div
                  className={processStyles.processArrow}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <img src={arrowYellow} alt="Demo" />
                </div>
                <div
                  className={processStyles.number_123}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  3
                </div>
              </div>
              <div
                className={processStyles.item_123}
                data-aos="flip-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Development & QA
              </div>
              <div
                className={processStyles.number_4}
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="500"
              >
                4
              </div>
              <div
                className={processStyles.item_4}
                data-aos="flip-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Launch & Grow
              </div>
            </div>
          </div>

          <div
            className={processStyles.frameVideo}
            // data-aos="fade-up"
            // data-aos-delay="0"
            // data-aos-duration="1000"
          >
            <div className={processStyles.container_video}>
              <div className={processStyles.video_text}>
                <p>
                  We see ourselves as product craftsmen, taking a holistic
                  approach to software engineering, where we give code quality,
                  UI & UX design, and product management the same love.
                </p>
                <div className={processStyles.btn_scheMeet}>
                  SCHEDULE A MEETING
                </div>
              </div>
              <div className={processStyles.video_preview}>
                <img src={previewVideo} width="100%" alt="Demo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
