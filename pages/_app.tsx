import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { Nav } from '@/components';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>PrimeCondies</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
