'use client';

import React from 'react';

import styles from '@/styles/Footer.module.scss';

export default async function CurrentlyPlaying() {
  return (
    <div className={styles.spotify}>
      <p>Thief in the Night</p>
    </div>
  );
}

const PlayingBars = () => {
  return (
    <div className={styles.icon}>
      <span />
      <span />
      <span />
    </div>
  );
};
