import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { CgScreen } from 'react-icons/cg';
import { FiServer } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';

import BgStroke from '@/components/BgStroke';
import styles from '@/styles/About.module.scss';
import { kanit, poppins } from '../font';

export const metadata: Metadata = {
  title: 'Identity',
};

const AboutPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='main__heading' style={kanit.style}>
        identity
      </h1>
      <p>Here I am, this is me.</p>
      <div className={styles.about__card} style={poppins.style}>
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
          <h3 style={kanit.style}>frontend</h3>
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
          <h3 style={kanit.style}>design</h3>
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
          <h3 style={kanit.style}>backend</h3>
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
