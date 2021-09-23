import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Typography>This is where there will be weather info!</Typography>
      </Container>
    </>
  );
};

export default Home;
