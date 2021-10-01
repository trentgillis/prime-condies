import type { NextPage } from 'next';

import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h4">TODO: Home Page</Typography>
      <Typography>To access some test pages to view individual location weather data use the below buttons.</Typography>
      <Box sx={{ marginTop: '8px' }}>
        <Link href="/areas/boulder-canyon">
          <a>
            <Button variant="contained" color="secondary" style={{ marginRight: '8px' }}>
              Boulder Canyon
            </Button>
          </a>
        </Link>
        <Link href="/areas/newlin-creek">
          <a>
            <Button variant="contained" color="secondary" style={{ marginRight: '8px' }}>
              Newlin Creek
            </Button>
          </a>
        </Link>
        <Link href="/areas/clear-creek-canyon">
          <a>
            <Button variant="contained" color="secondary" style={{ marginRight: '8px' }}>
              Clear Creek Canyon
            </Button>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default Home;
