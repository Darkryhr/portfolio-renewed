'use client';

import { motion, stagger, useAnimate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect } from 'react';
import { HiArrowSmDown } from 'react-icons/hi';

import styles from '@/styles/Home.module.scss';

const Home = () => {
  const [scope, animate] = useAnimate();

  const heading = ['GABRIEL ', 'LELLOUCHE', '?', 'MAKER ', 'OF ', 'THINGS'];
  useLayoutEffect(() => {
    animate(
      'span',
      { opacity: 1, scale: 1 },
      { delay: stagger(0.2), duration: 1, ease: 'circIn' }
    );
  }, [animate]);

  return (
    <>
      <div className={styles.hero__section}>
        <p className='lead'>[life’s too short to be boring]</p>
        <h1 className='main__heading' ref={scope}>
          {heading.map((char, i) => {
            if (char === '?') return <br key={i} />;
            return (
              <motion.span className='heading__span' key={i}>
                {char}
              </motion.span>
            );
          })}
        </h1>
        <p>
          I’m a simple man
          <br />I want to make things that are memorable, and worth making
        </p>
        <div className={styles.button__wrapper}>
          <motion.button
            className='btn primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href='portfolio'>Check my stuff</Link>
          </motion.button>
          <motion.button
            className='btn secondary icon__btn'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a href='cv.pdf' download>
              <HiArrowSmDown size={18} />
              See my resume
            </a>
          </motion.button>
        </div>
      </div>
      <div className={styles.hero__background}>
        <div className={styles.skullTop}>
          <Image src='/skullpoly-top.svg' fill={true} alt='Picture of penis' />
        </div>
      </div>
    </>
  );
};

export default Home;
