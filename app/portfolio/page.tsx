import React from 'react';

import PortfolioCard from '@/components/PortfolioCard';
import styles from '@/styles/Portfolio.module.scss';

const PortfolioPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='main__heading'>la savoir faire</h1>
      <p>
        Here are some of the things I&apos;m proudest of making. Feel free to
        browse.
      </p>
      <div className={styles.grid}>
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PortfolioPage;
