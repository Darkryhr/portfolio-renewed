'use client';

import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

import SocialButton from '@/components/SocialButton';
import styles from '@/styles/Portfolio.module.scss';

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <span className={styles.enum}>01</span>
      <div className={styles.text__content}>
        <h3>URBAN VIKINGS</h3>
        <p>
          Never been a big talker, at least not about myself. But if someone out
          there is interested in hearing my jumbled ramblings, I salute thee.
        </p>
      </div>
      <div className={styles.btn__wrapper}>
        <button className={styles.btn}>
          <a href='#'>
            <span>
              visit project
              <div className={styles.underline}></div>
              <FiArrowUpRight size={24} />
            </span>
          </a>
        </button>
        <div className={styles.repo__btn}>
          <SocialButton href={'https://github.com/Darkryhr'} id='githubp_link'>
            <AiFillGithub size={24} />
          </SocialButton>
        </div>
      </div>
      <div className={styles.triangle}></div>
      <div className={styles.edge__lines}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PortfolioCard;
