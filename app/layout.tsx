import { Kanit, Poppins } from 'next/font/google';

const kanit = Kanit({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${kanit.className} ${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}
