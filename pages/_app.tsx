import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { FC } from 'react';
import Head from 'next/head';
import { Container, ThemeProvider } from '@mui/material';

import theme from '@/styles/theme';
import { Navbar } from '@/components';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>PrimeCondies</title>
        <meta name="description" content="The ultimate weather site for rock climbers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
