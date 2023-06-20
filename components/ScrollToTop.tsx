'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import styles from '@/styles/ScrollBtn.module.scss';

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const ToggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', ToggleVisibility);

    return () => window.removeEventListener('scroll', ToggleVisibility);
  }, []);

  return (
    <>
      {/* 
      // @ts-ignore */}
      <AnimatePresence>
        {visible ? (
          <motion.div
            className={styles.scroll}
            onClick={ScrollToTop}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <button
              type='button'
              style={{
                marginTop: '0.25em',
              }}
            >
              <FaArrowUp size={28} fill='#07080E' />
            </button>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
