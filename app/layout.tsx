import { IBM_Plex_Mono, Kanit, Poppins } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './global.scss';

const kanit = Kanit({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300','400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${kanit.className} ${poppins.className} ${ibmPlexMono.className}`}
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
      </body>
    </html>
  );
}
