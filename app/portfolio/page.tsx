import { Metadata } from 'next';
import React from 'react';

import PortfolioCard from '@/components/PortfolioCard';
import styles from '@/styles/Portfolio.module.scss';
import { kanit } from '../font';

export const metadata: Metadata = {
  title: 'Savoir Faire',
};

const projects = [
  {
    title: 'Urban Vikings',
    desc: "If clothes were still about survival we'd be wearing loinclothes and animal furs, finding something to wear that says something about yourself, and how much disposable income you have.",
    liveDemoHref: 'https://urban-vikings.vercel.app/',
    repoHref: 'https://github.com/Darkryhr/urban-vikings',
  },
  {
    title: 'STR Blog',
    desc: 'Talking incessantly about yourself is a great way to foster a community for some reason, do that here because why not.',
    liveDemoHref: 'https://next-blog-nine-henna.vercel.app/',
    repoHref: 'https://github.com/Darkryhr/nextfire-blog',
  },
  {
    title: 'Sightsee',
    desc: 'Pick your next vacation destination here, then tear up when you realize you cant afford it and have no one to go with, Im not projecting—you are.',
    liveDemoHref: 'https://clever-stonebraker-68587b.netlify.app/',
    repoHref: 'https://github.com/Darkryhr/sightsee-client',
  },
  {
    title: 'Firestarter',
    desc: "Do 'To-Do' apps need an introduction at this point? At least this is a kanban with drag & drop functionality, and nice colors, so you can play simon says with your daily tasks.",
    liveDemoHref: 'https://wonderful-goldstine-9fcc89.netlify.app/',
    repoHref: 'https://github.com/Darkryhr/firestarter',
  },
  {
    title: 'AngleMart',
    desc: 'Groceries are important, without them we die, they sustain us, also going to a physical location is wretched, now with technology we can make the process slightly less annoying.',
    liveDemoHref: 'https://angular-firemart.firebaseapp.com/',
    repoHref: 'https://github.com/Darkryhr/firemart',
  },
  {
    title: 'Lena Ozer',
    desc: 'I built my mom a blog, because somehow this seemed simpler than talking.',
    liveDemoHref: 'https://www.lena-ozer.com/',
    repoHref: 'https://github.com/Darkryhr/lena-ozer',
  },
  {
    title: 'Gabriel Lellouche',
    desc: "You're already here but theres no way I'm not counting this. It was a lotta work to make something that felt like me.",
    liveDemoHref: 'https://www.gabriel-lellouche.com/',
    repoHref: 'https://github.com/Darkryhr/portfolio-renewed',
  },
];

const PortfolioPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='main__heading' style={kanit.style}>
        le savoir faire
      </h1>
      <p>
        Here are some of the things I&apos;m proudest of making, feel free to
        browse.
      </p>
      <div className={styles.grid}>
        {projects.map(({ title, desc, repoHref, liveDemoHref }, i) => (
          <PortfolioCard
            key={i}
            number={i}
            title={title}
            desc={desc}
            repoHref={repoHref}
            liveDemoHref={liveDemoHref}
            id={title + '_repoLink'}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
