import { groq } from 'next-sanity';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import DateFormatter from '@/components/DateFormatter';
import { client, urlFor } from '@/sanity/lib/client';
import styles from '@/styles/Blog.module.scss';

const query = groq`
*[_type == "post"] {
  ...,
} | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(query);

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
            backgroundImage: `url(${urlFor(posts[0].mainImage).url()})`,
          }}
        >
          <DateFormatter dateString={posts[0]._createdAt} />
          <h4>{posts[0].title}</h4>
          <Link
            href={'blog/' + posts[0]?.slug?.current}
            className={`btn ${styles.blog__button}`}
          >
            read more
            <FiExternalLink size={16} />
          </Link>
        </div>
        {posts.slice(1).map(post => (
          <div
            key={post._id}
            className={styles.cell}
            style={{
              backgroundImage: `url(${urlFor(post.mainImage).url()})`,
            }}
          >
            <DateFormatter dateString={post._createdAt} />

            <h4>{post.title}</h4>
            <Link
              href={'blog/' + post?.slug?.current}
              className={`btn ${styles.blog__button}`}
            >
              read more
              <FiExternalLink size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
