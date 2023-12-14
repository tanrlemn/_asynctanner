import '@/app/globals.css';

// server
import dynamic from 'next/dynamic';

// providers
import { ThemeProvider } from './lib/context/ThemeProvider';
import { LoadingProvider } from './lib/context/LoadingProvider';
import { ContactProvider } from './lib/context/ContactProvider';

// local components
import Footer from './_navigation/footer';

const Navbar = dynamic(() => import('./_navigation/navbar'), {
  ssr: false,
});

const APP_NAME = 'Tanner Lemon';
const APP_DEFAULT_TITLE = 'Tanner Lemon – Atypical Full Stack Developer';
const APP_TITLE_TEMPLATE = '%s - Tanner Lemon';
const APP_DESCRIPTION =
  'Tanner Lemon is an atypical full stack developer with a passion for building beautiful, functional, and accessible (things).';

// metadata
export const metadata = {
  metadataBase: new URL('https://asynctanner.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: '/images/og-image.png',
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <LoadingProvider>
          <ThemeProvider>
            <ContactProvider>
              <Navbar />
              {children}
              <Footer />
            </ContactProvider>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
