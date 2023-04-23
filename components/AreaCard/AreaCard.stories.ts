import type { Meta, StoryObj } from '@storybook/react';

import { AreaCard as AreaCardComponent } from './AreaCard';

const meta: Meta<typeof AreaCardComponent> = {
  title: 'Area Card',
  component: AreaCardComponent,
};

export default meta;
type Story = StoryObj<typeof AreaCardComponent>;

export const AreaCard: Story = {
  args: {
    areaName: 'Eleven Mile Canyon',
    areaPlace: 'Colorado',
    areaCountry: 'USA',
    todayMinTemp: 34.18,
    todayMaxTemp: 54.18,
    currentWeather: {
      dt: 1679542866,
      sunrise: 1679490086,
      sunset: 1679534030,
      temp: 40.28,
      feels_like: 34.34,
      pressure: 1011,
      humidity: 40,
      dew_point: 19.47,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 9.22,
      wind_deg: 310,
      wind_gust: 19.57,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
    },
  },
};
