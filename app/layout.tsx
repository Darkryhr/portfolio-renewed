import clsx from 'clsx';
import { IBM_Plex_Mono, Kanit, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import './global.scss';

const kanitLocal = localFont({
  src: './Kanit-Black.ttf',
  weight: '900',
  variable: '--font-kanit',
  display: 'swap',
});

const kanit = Kanit({
  weight: '900',
  subsets: ['latin'],
  display: 'block',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['500'],
  subsets: ['latin'],
  display: 'block',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'block',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gabriel-lellouche.com'),
  title: {
    default: '| Gabriel has Issues.',
    template: '%s | Gabriel has Issues.',
  },
  description: 'Designing developer and developing designer',
  openGraph: {
    title: '| Gabriel has Issues.',
    description: 'Designing developer and developing designer',
    siteName: 'Gabriel Lellouche',
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={clsx(
        kanitLocal.variable,
        kanit.className,
        poppins.className,
        ibmPlexMono.className
      )}
    >
      <body>
        <div className='static__noise'></div>
        <Header />
        <main
          style={{
            paddingTop: '92px',
          }}
          className={clsx(
            kanitLocal.variable,
            kanit.className,
            poppins.className,
            ibmPlexMono.className
          )}
        >
          {children}
        </main>
        <svg className='static__svg'>
          <filter id='noise'>
            <feTurbulence id='turbulence'>
              <animate
                attributeName='baseFrequency'
                dur='50s'
                values='0.9 0.9;0.8 0.8;0.9 0.9;'
                repeatCount='indefinite'
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              in='SourceGraphic'
              scale='60'
            ></feDisplacementMap>
          </filter>
        </svg>
        <Footer />
      </body>
    </html>
  );
}
