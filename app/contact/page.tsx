'use client';

import React, { useState } from 'react';

import styles from '@/styles/Contact.module.scss';

const ContactPage = () => {
  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
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

    const response = await fetch(endpoint, options);

    const result = await response.json();

    console.log(result);
  };

  return (
    <div className='wrapper'>
      <h1 className='main__heading'>let&apos;s chat</h1>
      <p>
        If you&apos;re hiring, or looking for someone, or just wanna talk even,
        hit me up.
      </p>
      <div className={styles.form__wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor=''>Your Name*</label>
          <input required type='text' placeholder='Grunk Spink' name='name' />
          <label htmlFor=''>Email</label>
          <input type='text' placeholder='pyramid@scheme.com' name='email' />
          <label htmlFor=''>Message</label>
          <textarea
            cols={30}
            rows={10}
            placeholder="What've you got to say for yourself?"
            name='message'
          />
          <button type='submit' className='btn primary'>
            Sendd
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
