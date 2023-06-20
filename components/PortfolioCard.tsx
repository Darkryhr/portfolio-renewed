'use client';

import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

import { kanit } from '@/app/font';
import SocialButton from '@/components/SocialButton';
import styles from '@/styles/Portfolio.module.scss';

const PortfolioCard = ({ title, desc, liveDemoHref, repoHref, number, id }) => {
  return (
    <div className={styles.card}>
      <span className={styles.enum}>0{number + 1}</span>
      <div className={styles.text__content}>
        <h3 style={kanit.style}>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.btn__wrapper}>
        <button className={styles.btn}>
          <a href={liveDemoHref}>
            <span>
              visit project
              <div className={styles.underline}></div>
              <FiArrowUpRight size={24} />
            </span>
          </a>
        </button>
        <div className={styles.repo__btn}>
          <SocialButton href={repoHref} id={id}>
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
