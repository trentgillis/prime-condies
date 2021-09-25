import logoStyles from '@/styles/Logo.module.css';

import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';

// Add poo-storm icon to icon library. This is needed to render it in the component
library.add(faPooStorm);

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <FontAwesomeIcon className={logoStyles.logoIcon} icon="poo-storm" />
          <Typography variant="body1" className={logoStyles.logoText} display="inline">
            PrimeCondies
          </Typography>
        </a>
      </Link>
    </>
  );
};

export default Logo;
