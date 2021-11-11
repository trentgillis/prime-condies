import { Stack, Typography } from '@mui/material';

import { InfoIcon } from '@/components';
import toUpper from 'lodash/toUpper';

type WeatherDetailProps = {
  label: string;
  icon: string;
  value: number;
  unitLabel: string;
};

const WeatherDetail = ({ label, icon, value, unitLabel }: WeatherDetailProps) => {
  return (
    <>
      <Stack spacing={0.1} alignItems="center">
        <InfoIcon iconName={icon} size={35} />
        <Typography variant="caption" style={{ fontWeight: 300 }}>
          {toUpper(label)}
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 400 }}>
          {Math.round(value)}
          {unitLabel}
        </Typography>
      </Stack>
    </>
  );
};

export default WeatherDetail;
