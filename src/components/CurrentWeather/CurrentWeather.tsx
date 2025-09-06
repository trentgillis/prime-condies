import React from 'react';

import { CurrentWeatherData, DailyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherDetails from '@/components/WeatherDetails';

import WeatherSummary from './WeatherSummary';
import SunriseSunset from './SunriseSunset';

interface CurrentWeatherProps {
  areaTimezone: string;
  currentForecast: CurrentWeatherData;
  todayWeather: DailyWeatherData;
}

function CurrentWeather({ areaTimezone, currentForecast, todayWeather }: CurrentWeatherProps) {
  return (
    <div className="col-span-2 flex w-full flex-col items-center gap-4 pb-4 lg:col-span-1 lg:p-4">
      <div className="flex w-full flex-col items-center">
        <span className="text-xs">Now</span>
        <span className="font-outfit text-sm">
          {new Date().toLocaleString('en-US', { timeZone: areaTimezone, hour: 'numeric', minute: 'numeric' })}
        </span>
      </div>
      <WeatherSummary
        currentTemp={Math.round(currentForecast.temp)}
        todayTempMax={todayWeather.temp.max}
        todayTempMin={todayWeather.temp.min}
        weatherDescription={currentForecast.weather[0]}
      />
      <SunriseSunset
        areaTimezone={areaTimezone}
        sunriseDatetime={currentForecast.sunrise}
        sunsetDatetime={currentForecast.sunset}
      />
      <div className="pt-2 lg:pt-6">
        <WeatherDetails
          precipitation={todayWeather.pop}
          humidity={currentForecast.humidity}
          windSpeed={currentForecast.wind_speed}
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
