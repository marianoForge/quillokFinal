import React from 'react';
import logoFooter from '../images/logo_footer.svg';
import btLinkedinFooter from '../images/bt_linkedin_footer.svg';
import btGlobalFooter from '../images/bt_global_footer.svg';
import btInstagramFooter from '../images/bt_instagram_footer.svg';
import * as footerStyles from '../styles/footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={footerStyles.flex_container_fluid}>
      <div className={footerStyles.flex_container}>
        <div className={footerStyles.footer_container}>
          <div className={footerStyles.footer_logo}>
            <img src={logoFooter} alt='Quillok' />
            <p>
              We are here to help you launch <br></br> fast and grow strong.
            </p>
          </div>

          <div className={footerStyles.footer_contact}>
            <div className={footerStyles.contact_title}>Contact</div>
            <Link
              to={{
                pathname:
                  'mailto:hello@quillok.com?subject=Let%E2%80%99s%20do%20great%20stuff%20together!',
              }}
              className={footerStyles.contact_mail}
            >
              hello@quillok.com
            </Link>
            <p className={footerStyles.contact_address}>Montevideo, Uruguay.</p>
          </div>

          <div className={footerStyles.footer_joinUs}>
            <div className={footerStyles.joinUs_title}>Join Us</div>
            <Link
              to={{
                pathname: 'https://3aovymwpm25.typeform.com/to/zrH7Qc2A',
              }}
              target='_blank'
              className={footerStyles.joinUs_careers}
            >
              Careers
            </Link>
          </div>

          <div className={footerStyles.footer_beSocial}>
            <div className={footerStyles.beSocial_title}>Be Social</div>
            <div className={footerStyles.beSocial_rrss}>
              <Link
                to={{
                  pathname: 'https://www.linkedin.com/company/quillok',
                }}
                target='_blank'
              >
                <img src={btLinkedinFooter} alt='LinkedIn' />
              </Link>
              <Link
                to={{
                  pathname: 'https://dribbble.com/quillok',
                }}
                target='_blank'
              >
                <img src={btGlobalFooter} alt='Global' />
              </Link>
              <Link
                to={{
                  pathname: 'https://www.instagram.com/quillokteam/',
                }}
                target='_blank'
              >
                <img src={btInstagramFooter} alt='Instagram' />
              </Link>
            </div>
          </div>

          <div className={footerStyles.footer_getBonus}>
            {/* <div className={footerStyles.btn_getBonus}>GET A BONUS</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
