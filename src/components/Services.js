import React, { useEffect } from "react";
import * as servicesStyles from "../styles/services.module.css";
import AOS from "aos";
import { services } from "../content/services";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.refresh({
      duration: 2000,
    });
  }, []);

  const renderedServices = services.map((service) => {
    return (
      <React.Fragment key={service.id}>
        <div
          className={servicesStyles.pointServices}
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          <div
            className={servicesStyles.numberTitle}
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >0
            {service.id}
          </div>
          <h2>{service.title}</h2>
          <p>{service.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className={servicesStyles.flex_container_fluid}>
      <div className={servicesStyles.flex_container}>
        <h2 className={servicesStyles.titleSection}>SERVICES</h2>
        <p className={servicesStyles.subtitleSection}>
          Explore what we offer...
        </p>
        <div className={servicesStyles.containerServices}>
          {renderedServices}
        </div>
      </div>
    </div>
  );
};

export default Services;
