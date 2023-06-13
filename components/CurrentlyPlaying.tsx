import React from 'react';

import styles from '@/styles/Footer.module.scss';

async function getSpotifyData() {}

const CurrentlyPlaying = async () => {
  const data = await getSpotifyData();

  return (
    <div className={styles.spotify}>
      <p>
        <span>Jammin&apos; Now — </span>
        Thief in the Night
      </p>
    </div>
  );
};

export default CurrentlyPlaying;

const PlayingBars = () => {
  return (
    <div className={styles.icon}>
      <span />
      <span />
      <span />
    </div>
  );
};
