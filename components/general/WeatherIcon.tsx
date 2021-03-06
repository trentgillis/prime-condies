import { Typography } from '@mui/material';

import theme from '@/styles/theme';
import { IconProps } from '@/lib/ui/types/WeatherIconTypes';

import ChanceOfRainIcon from './Icons/ChanceOfRainIcon';
import ChanceOfSnowIcon from './Icons/ChanceOfSnowIcon';
import PartlyCloudyIcon from './Icons/PartlyCloudyIcon';
import RainIcon from './Icons/RainIcon';
import SnowIcon from './Icons/SnowIcon';
import SunnyIcon from './Icons/SunnyIcon';
import ThunderstormIcon from './Icons/ThunderstormIcon';

interface WeatherIconProps extends IconProps {
  iconName: string;
}

const WeatherIcon = ({ iconName, size, color = theme.palette.primary.main, strokeWidth = 3 }: WeatherIconProps) => {
  const iconProps: IconProps = {
    color,
    size,
    strokeWidth,
  };

  const weatherIcons: any = {
    chanceOfRain: <ChanceOfRainIcon {...iconProps} />,
    chanceOfSnow: <ChanceOfSnowIcon {...iconProps} />,
    partlyCloudy: <PartlyCloudyIcon {...iconProps} />,
    rain: <RainIcon {...iconProps} />,
    snow: <SnowIcon {...iconProps} />,
    sunny: <SunnyIcon {...iconProps} />,
    thunderstorm: <ThunderstormIcon {...iconProps} />,
  };

  return weatherIcons[iconName] || <Typography>ICON NOT FOUND</Typography>;
};

export default WeatherIcon;
