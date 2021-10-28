import React, { useEffect } from "react";
import tom from "../images/testimonial_1_tom.png";
import shakur from "../images/testimonial_2_shakur.png";
import abe from "../images/testimonial_3_abe.png";
import nik from "../images/testimonial_4_nik.png";
import title from "../images/testimonial_bg_title.svg";
import * as testimonialStyles from "../styles/testimonials.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <div className={testimonialStyles.flex_container_fluid}>
      <div className={testimonialStyles.flex_container}>

        {/* TOM */}
        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="0"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <img src={tom} alt="Testimonials" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Tom Belote
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  Founder & CEO, ShelfSet
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
              “At ShelfSet we were able to leverage Quillok engineer's expertise to build a product from concept to product launch in just a few months. They became experts in our product area in the retail industry with machine learning computer vision.
              </p>
              <p>
              A very collaborative partner who was able to work with on a close basis.”
              </p>
            </div>
          </div>
        </div>

        {/* SHAKUR */}

        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="300"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <img src={shakur} alt="Testimonials" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Shakur Abdal-Khallaq
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  Founder & CEO, Facefwd
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
                “The Quillok team have been an absolute pleasure to work with. A flexible, attentive, and collaborative team that works towards turning concepts into visually appealing, highly operational products. The passion with which they operate is appreciated and rare in this industry. We can unequivocally say that this is the first time the engineering team has truly felt like a member of our team.”
              </p>
            </div>
          </div>
        </div>

        <div className={testimonialStyles.testimonialTitle}>
          <h2 className={testimonialStyles.titleSection}>TESTIMONIALS</h2>
          <p className={testimonialStyles.subtitleSection}>
          We’re fortunate to work with wonderful clients.
          </p>
          <div className={testimonialStyles.imgBGtitle}>
            <img src={title} alt="Testimonials" />
          </div>
        </div>

        {/* ABE */}

        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="600"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <img src={abe} alt="Testimonials" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Abe Storey
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  Founder & CEO, Entri
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
              “Quillok has a stable of talented engineers ready to tackle a wide variety of problems.
              </p>
              <p>
              They have been an integral part of Entri's engineering team.
              </p>
              <p>
              We're excited to keep working with them on new challenges!”
              </p>
            </div>
          </div>
        </div>

        {/* NIK */}

        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="600"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <img src={nik} alt="Testimonials" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Nik Edmondson
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  Founder & CEO,<br></br>Now Performance
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
              “Quillok is the absolute best. Great work, better code, and amazing people. We will not go anywhere else for our nearshore needs. In fact, I don't even want to write this glowing review because we would like to keep them a secret.
              We are super excited that we found them, and will continue to integrate and grow with them as a core part of our dev team. They are THE BEST!”
              </p>
            </div>
          </div>
        </div>

        <div className={testimonialStyles.testimonialVacio}></div>

      </div>
    </div>
  );
};

export default Testimonials;
