import areaStyles from '@/styles/Areas/Area.module.css';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type AreaHeaderProps = {
  areaName: string;
  areaLocation: string;
  areaCountry: string;
};

const AreaHeader = ({ areaName, areaLocation, areaCountry }: AreaHeaderProps) => {
  return (
    <>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Typography className={areaStyles.areaHeaderText} variant="h5">
          {areaLocation}, {areaCountry.toUpperCase()}
        </Typography>
        <Typography className={areaStyles.areaHeaderText} variant="h3">
          {areaName}
        </Typography>
      </Box>
      <Box display={{ md: 'none' }}>
        <Typography className={areaStyles.areaHeaderText} variant="h6">
          {areaLocation}, {areaCountry.toUpperCase()}
        </Typography>
        <Typography className={areaStyles.areaHeaderText} variant="h4">
          {areaName}
        </Typography>
      </Box>
    </>
  );
};

export default AreaHeader;
