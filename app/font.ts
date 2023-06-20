import { IBM_Plex_Mono, Kanit, Poppins } from 'next/font/google';

export const kanit = Kanit({
  weight: '900',
  subsets: ['latin'],
  display: 'block',
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['500'],
  subsets: ['latin'],
  display: 'block',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'block',
});
