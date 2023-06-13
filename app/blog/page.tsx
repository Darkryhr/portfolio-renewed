import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import styles from '@/styles/Blog.module.scss';

const BlogPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='main__heading'>the thought cabinet</h1>
      <p>
        Never been a big talker, at least not about myself. But I think
        it&apos;s worth working on that, so if someone is interested in my
        jumbled ramblings, I salute thee.
      </p>
      <div className={styles.blog__grid}>
        <div
          className={styles.merged__cell}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1685556636541-b141d0a09746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)`,
          }}
        >
          <p>21 Dec. 2022</p>
          <h4>The Title, this is the title dumdum.</h4>
          <button className={`btn ${styles.blog__button}`}>
            read more
            <FiExternalLink size={16} />
          </button>
        </div>
        <div
          className={styles.cell}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1685495967988-931ada560ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)`,
          }}
        >
          <p>21 Dec. 2022</p>
          <h4>The Title, this is the title dumdum.</h4>
          <button className={`btn ${styles.blog__button}`}>
            read more
            <FiExternalLink size={16} />
          </button>
        </div>
        <div
          className={styles.cell}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1685297965194-5eb9b8d51a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80)`,
          }}
        >
          {' '}
          <p>21 Dec. 2022</p>
          <h4>The Title, this is the title dumdum.</h4>
          <button className={`btn ${styles.blog__button}`}>
            read more
            <FiExternalLink size={16} />
          </button>
        </div>
        <div
          className={styles.cell}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1685432780037-c174342e6a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80)`,
          }}
        >
          {' '}
          <p>21 Dec. 2022</p>
          <h4>The Title, this is the title dumdum.</h4>
          <button className={`btn ${styles.blog__button}`}>
            read more
            <FiExternalLink size={16} />
          </button>
        </div>
        <div
          className={styles.cell}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1682936586985-5a61f5b0506b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        >
          {' '}
          <p>21 Dec. 2022</p>
          <h4>The Title, this is the title dumdum.</h4>
          <button className={`btn ${styles.blog__button}`}>
            read more
            <FiExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
