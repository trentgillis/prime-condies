import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Toolbar>
        <Typography>PrimeCondies</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
