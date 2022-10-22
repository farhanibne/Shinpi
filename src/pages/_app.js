import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import Head from 'next/head';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/shinpi.png" />
      <link rel="apple-touch-icon" href="/shinpi.png" />
      <title>Shinpi 神秘 </title>
    </Head>
  <Component style={{backgroundColor:'#F9FBFD'}} {...pageProps} />
  </>
  );
}
