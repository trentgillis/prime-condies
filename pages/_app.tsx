import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from './components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Head>
        <title>PrimeCondies</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
