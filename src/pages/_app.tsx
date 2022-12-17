import { AppProps } from 'next/app';
import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/scss/app.scss';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
        crossOrigin='anonymous'
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
