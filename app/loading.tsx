import React from 'react';

import { FooterLogo } from '@/components/Icons';
import styles from '@/styles/Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader}></div>
      <div className={styles.logo__container}>
        <FooterLogo />
        <p>Give me a sec...</p>
      </div>
    </div>
  );
}
