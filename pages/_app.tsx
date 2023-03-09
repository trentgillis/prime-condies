import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

import GlobalStyles from '@/styles/global';

const Layout = styled.main`
  display: grid;
  grid-template-rows: 130px 1fr;
  grid-template-areas: 'header' 'main';

  main {
    grid-area: main;
  }

  @media only screen and (min-width: 768px) {
    grid-template-rows: 80px 1fr;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>PrimeCondies</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
