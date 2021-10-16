import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { Container, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { Hydrate, QueryClientProvider, QueryClient } from 'react-query';

import theme from '@/styles/theme';
import { Navbar } from '@/components';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <Head>
              <title>PrimeCondies</title>
              <meta name="description" content="The ultimate weather site for rock climbers" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Container maxWidth="xl">
              <Box sx={{ marginTop: '2rem' }}>
                <Component {...pageProps} />
              </Box>
            </Container>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};
export default MyApp;
