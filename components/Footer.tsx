import React from 'react';

import { kanit } from '@/app/font';
import { FooterLogo } from '@/components/Icons';
import SocialMenu from '@/components/SocialMenu';
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.signature}>
        <p style={kanit.style}>
          <span style={kanit.style}>&copy;{new Date().getFullYear()}</span>
          <br />
          gabriel
          <br />
          lellouche
        </p>
      </div>
      <div className={styles.footer__logo}>
        <FooterLogo />
      </div>

      <div className={styles.social__container}>
        <p>
          try your best
          <br />
          to like yourself
        </p>
        <SocialMenu size={24} />
      </div>
    </footer>
  );
};

export default Footer;
