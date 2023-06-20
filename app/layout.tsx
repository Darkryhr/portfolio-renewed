import clsx from 'clsx';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Metadata } from 'next';
import { ibmPlexMono, kanit, poppins } from './font';
import './global.scss';

const kanitLocal = localFont({
  src: './Kanit-Black.ttf',
  weight: '900',
  variable: '--font-kanit',
  display: 'swap',
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
        <ScrollToTop />
      </body>
    </html>
  );
}
