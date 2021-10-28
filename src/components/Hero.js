import React from 'react';
import QuillokLogo from '../images/Quillok_Logo.svg';
import KeepScrolling from '../images/keepScrolling.svg';
import * as heroStyles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={heroStyles.keepScrollimage}>
        <img src={KeepScrolling} alt='keep Scrolling' />
      </div>
      <div className={heroStyles.flex_container_fluid}>
        <div className={heroStyles.flex_container}>
          <div className={heroStyles.logoQuillok}>
            <img src={QuillokLogo} alt='Quillok Logo' />
          </div>
          <div className={heroStyles.allHeader}>
            <h2>
              We are here to help you{' '}
              <span>
                launch<span>s</span>fast
              </span>{' '}
              and grow strong.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
