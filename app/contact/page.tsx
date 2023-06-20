'use client';

import React, { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import styles from '@/styles/Contact.module.scss';
import { kanit } from '../font';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    let data = {
      name,
      email,
      message,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = '/api/contact';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    await fetch(endpoint, options);

    setName('');
    setEmail('');
    setMessage('');
    setLoading(false);
  };

  return (
    <div className='wrapper'>
      <h1 className='main__heading' style={kanit.style}>
        let&apos;s chat
      </h1>
      <p>
        If you&apos;re hiring, or looking for someone, or just wanna talk even,
        hit me up.
      </p>
      <div className={styles.form__wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor='name'>Your Name*</label>
          <input
            required
            type='text'
            placeholder='Grunk Spink'
            name='name'
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='pyramid@scheme.com'
            name='email'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='message'>Message</label>
          <textarea
            cols={30}
            rows={10}
            placeholder="What've you got to say for yourself?"
            name='message'
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          />
          <button
            type='submit'
            className={`btn primary ${styles.submit}`}
            disabled={loading || !name || !emailRegEx.test(email) || !message}
          >
            {loading ? (
              <>
                <span className={styles.loader}>
                  <BiLoaderAlt size='14px' />
                </span>
                <span>Sending...</span>
              </>
            ) : (
              <span>Send</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
