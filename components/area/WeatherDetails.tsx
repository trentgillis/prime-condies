import { Grid } from '@mui/material';
import { WeatherDetail } from '..';

type WeatherDetailsProps = {
  data: {
    rain: { '1h': number } | number;
    humidity: number;
    windSpeed: number;
  };
};

const getPrecipitation = (rain: { '1h': number } | number) => {
  if (rain) {
    return typeof rain === 'number' ? rain : rain['1h'];
  }

  return 0;
};

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  const details = [
    {
      label: 'precipitation',
      icon: 'precipitation',
      unitLabel: '%',
      value: getPrecipitation(data.rain),
    },
    {
      label: 'humidity',
      icon: 'humidity',
      unitLabel: '%',
      value: data.humidity,
    },
    {
      label: 'wind speed',
      icon: 'windSpeed',
      unitLabel: 'mph',
      value: data.windSpeed,
    },
  ];

  return (
    <>
      <Grid container>
        {details.map(({ label, icon, unitLabel, value }) => (
          <Grid item xs={4} key={label}>
            <WeatherDetail label={label} icon={icon} unitLabel={unitLabel} value={value} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeatherDetails;
