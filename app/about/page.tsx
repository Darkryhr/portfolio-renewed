import Image from 'next/image';
import React from 'react';
import { CgScreen } from 'react-icons/cg';
import { FiServer } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';

import styles from '@/styles/About.module.scss';

const AboutPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='main__heading'>identity</h1>
      <p>Here I am, this is me.</p>
      <div className={styles.about__card}>
        <BgStroke />
        <div>
          <Image src='/skl.svg' fill={true} alt='Picture of penis' />
        </div>
        <p>
          Nice to meet you faceless purely theoratical entity, the names
          Gabriel. I&apos;m an aspiring developer and designer, and you&apos;re
          in my little haven on the internet.
          <br />
          <br />
          I&apos;ve always had an eye for structure and symmetry, and I think
          making something that looks good is half the battle nowadays, and
          i&apos;ve struggled with balancing it with practicality and speed,
          this space is in part an effort to verbalize my opinions on that
          balance.
          <br />
          <br />
          I&apos;ve come to realize that I highly value &apos;genuineness&apos;,
          at least my own definition of it, which is creating and doing things
          in a way you won&apos;t regret. I have and fully intend to make
          mistakes along the way, but I&apos;ll never find my regretless way
          otherwise.
          <br />
          <br />
          Right now im focused on polishing my skills, developing my
          professional experience, and generally honing in on my direction in
          the industry.
          <br />
          <br />
          I&apos;ve babbled on long enough, enjoy your stay.
          <br />
          You&apos;re always welcome here.
        </p>
      </div>
      <div className={styles.skill__wrapper}>
        <div className={styles.skill__column}>
          <CgScreen size={32} />
          <h3>frontend</h3>
          <ul>
            <li className={styles.skill__header}>
              React
              <ul>
                <li>Next.js</li>
                <li>React Native</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Angular
              <ul>
                <li>RxJS</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              State
              <ul>
                <li>Redux</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Typescript
              <ul></ul>
            </li>
          </ul>
        </div>

        {/* <div className={styles.divider}></div> */}

        <div className={styles.skill__column}>
          <MdOutlineDesignServices size={30} />
          <h3>design</h3>
          <ul>
            <li className={styles.skill__header}>
              UI Design
              <ul>
                <li>CSS</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>UI Libraries</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Mockup & Prototyping
              <ul>
                <li>Figma</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Logo & brand design
              <ul>
                <li>Illustrator</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Content design
              <ul>
                <li>Photoshop</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <div className={styles.divider}></div> */}

        <div className={styles.skill__column}>
          <FiServer size={30} />
          <h3>backend</h3>
          <ul>
            <li className={styles.skill__header}>
              Node.js
              <ul>
                <li>Express</li>
                <li>JWT</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              Databases
              <ul>
                <li>SQL</li>
                <li>ORMs</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </li>
            <li className={styles.skill__header}>
              GraphQL & REST
              <ul></ul>
            </li>
            <li className={styles.skill__header}>
              Nest.js and Redis
              <ul></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

export const BgStroke = () => {
  return (
    <svg
      className={styles.background__stroke}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 904.64 261.09'
    >
      <path d='M902.54 216.21c-.47 6.48-6.52 11.79-14.52 11.76-24.7-.12-49.44.66-74.21.87s-49.46-.52-74.22.02-49.48.29-74.22 1.15c-24.71.86-49.4 2.83-74.12 4.01-24.71 1.18-49.33 3.97-74.02 5.48-24.7 1.5-49.35 3.39-74.02 5.21-24.68 1.82-49.46 2.35-74.08 4.49-24.67 2.15-49.44 3.08-74.03 5.55-2.56.26-2.5.92-5.06 1.17-28.75 2.9-58.37 5.63-88.69 5.12-13.98-.24-27.23-6.17-30.34-17.09s3.76-23.44 15.7-29.47c22.4-11.31 45.77-20.86 69.04-30.67 23.16-9.76 46.14-20.29 69.8-28.94 23.67-8.66 48.13-15.12 71.95-23.07 24.01-8.01 47.56-17.09 71.35-24.77a6236.9 6236.9 0 0 0 86.42-28.7c-25.41 4.65-49.56 8.28-74.62 12.65s-50.44 9.77-75.6 13.92-50.39 9.83-75.65 13.73-50.65 7.84-76.02 11.5-50.83 6.03-76.3 9.43c-25.28 3.38-50.45 8.48-76.02 11.64s-50.89 4.26-76.55 7.17c-7.35.36-7.33-.37-14.69-.67-2.08.24-9.62-10.19-9.81-11.87 1.21-10.79 2.68-10.63 3.89-21.42-.19-1.67.22-12.77 2.3-13 16.23-2.46 15.83-5.21 32.09-7.42 25.3-2.87 50.26-5.01 74.76-8.01 25.19-3.08 49.82-7.65 74.38-10.9 25.05-3.31 50.05-5.09 74.68-8.61 24.89-3.55 49.72-6.69 74.43-10.49s49.22-9.06 74.02-13.15c24.56-4.05 49.21-8.24 74.09-12.62s49.38-6.78 74.33-11.41c24.27-4.51 48.97-8.64 73.96-13.5 1.24-.24 1.04-1.27 2.27-1.52 17.45-3.4 34.82-9.33 52.95-11.87C705.77-.55 723.96 0 742.36.19c8.5.09 15.52 3.42 21.05 8.44 5.53 5.02 7.72 10.57 6.89 17.46-2.88 23.97-28.74 36.19-37.65 40.22-19.57 8.85-39.55 16.94-59.65 24.86s-40.2 15.5-60.52 22.69c-20.36 7.21-40.74 14.27-61.13 21.01s-41.24 13.03-61.6 19.6c-22.03 7.11-43.68 15.96-65.88 23.34s-43.49 13.21-65.37 21.11c25.35-2.24 49.69-3.84 75.1-5.75 25.38-1.91 50.92-1.59 76.34-3.16 25.41-1.57 50.73-4.87 76.16-6.1 25.44-1.24 50.92-1.24 76.36-2.14s50.87-3.21 76.31-3.77 50.94-2.29 76.38-2.52c25.5-.22 50.98 1.41 76.41 1.52 8.05.04 13.54 5.44 13.07 11.96-1.52 13.58-1.09 13.64-2.07 27.26Z' />
    </svg>
  );
};
