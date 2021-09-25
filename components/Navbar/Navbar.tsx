import Link from 'next/link';
import { AppBar, Container, Toolbar } from '@mui/material';

import { Logo } from '@/components';

const Navbar = () => {
  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Toolbar>
        <Container maxWidth="xl">
          <Logo />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
