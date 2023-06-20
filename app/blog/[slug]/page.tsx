import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

import { kanit, poppins } from '@/app/font';
import { client, urlFor } from '@/sanity/lib/client';
import styles from '@/styles/BlogPost.module.scss';

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == 'post'] {
    slug,
  }`;

  const slugs = await client.fetch(query);

  const slugRoutes = slugs.map(slug => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

export default async function BlogPost({ params: { slug } }) {
  const query = groq`
  *[_type == 'post' && slug.current == $slug][0] {
    ...,
    author->,
  }
  `;

  const post = await client.fetch(query, { slug });

  return (
    <div className='wrapper'>
      <article className={styles.post__wrapper}>
        <h1 className='main__heading' style={kanit.style}>
          {post.title}
        </h1>
        {/* <DateFormatter dateString={post._createdAt} /> */}
        <div className={styles.author}>
          <Image
            src={urlFor(post.author.image).url()}
            alt={post.author.name}
            width={42}
            height={42}
          />
          <p>by {post.author.name}</p>
        </div>
        <div className={styles.body__wrapper} style={poppins.style}>
          <PortableText value={post.body} components={components} />
        </div>
      </article>
    </div>
  );
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2 style={kanit.style}>{children}</h2>,
  },
};
