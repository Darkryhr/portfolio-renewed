import React from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from '@/styles/Footer.module.scss';
import SocialButton from './SocialButton';

const SocialMenu = ({ size }) => {
  return (
    <ul className={styles.social__links}>
      <li>
        <SocialButton
          href={'https://twitter.com/GabrielAintReal'}
          id='twitter_link'
        >
          <AiOutlineTwitter size={size} />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          href={'https://www.linkedin.com/in/gabriel-lellouche'}
          id='linkedin_link'
        >
          <FaLinkedinIn size={size} />
        </SocialButton>
      </li>
      <li>
        <SocialButton
          href={'https://instagram.com/crck_dome'}
          id='instagram_link'
        >
          <AiOutlineInstagram size={size} />
        </SocialButton>
      </li>
      <li>
        <SocialButton href={'https://github.com/Darkryhr'} id='github_link'>
          <AiFillGithub size={size} />
        </SocialButton>
      </li>
    </ul>
  );
};

export default SocialMenu;
