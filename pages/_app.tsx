import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from '@/components';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 130px 1fr;
  grid-template-areas: 'header' 'main';

  @media only screen and (min-width: 768px) {
    grid-template-rows: 80px 1fr;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>PrimeCondies</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
