import { Typography } from '@mui/material';

import theme from '@/styles/theme';
import { IconProps } from '@/lib/ui/types/WeatherIconTypes';

import HumidityIcon from './Icons/HumidityIcon';
import PrecipitationIcon from './Icons/PrecipitationIcon';
import WindSpeedIcon from './Icons/WindSpeedIcon';

interface InfoIconProps extends IconProps {
  iconName: string;
}

const InfoIcon = ({ iconName, size, color = theme.palette.secondary.main }: InfoIconProps) => {
  const iconProps: IconProps = {
    size,
    color,
  };

  const infoIcons: any = {
    humidity: <HumidityIcon {...iconProps} />,
    precipitation: <PrecipitationIcon {...iconProps} />,
    windSpeed: <WindSpeedIcon {...iconProps} />,
  };

  return infoIcons[iconName] || <Typography>ICON NOT FOUND</Typography>;
};

export default InfoIcon;
