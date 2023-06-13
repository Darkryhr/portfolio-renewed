'use client';

import React, { useState } from 'react';

import SocialMenu from '@/components/SocialMenu';
import styles from '@/styles/Contact.module.scss';
import { BgStroke } from '../about/page';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className='wrapper'>
      <h1 className='main__heading'>let&apos;s chat</h1>
      <p>
        If you&apos;re hiring, or looking for someone, or just wanna talk even,
        hit me up.
      </p>
      <div className={styles.form__wrapper}>
        <form className={styles.form}>
          <label htmlFor=''>Your Name*</label>
          <input type='text' placeholder='Grunk Spink' />
          <label htmlFor=''>Email</label>
          <input type='text' placeholder='pyramid@scheme.com' />
          <label htmlFor=''>Message</label>
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder="What've you got to say for yourself?"
          ></textarea>
          <button type='submit' className='btn primary'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
