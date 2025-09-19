import 'server-only';

import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { sql, type AreaSelect } from '@/db';
import { fetchAreaWeather } from '@/lib/api';
import { Area } from '@/lib/types';

import {
  AreaDetailsPageHeader,
  HourlyForecast,
  HumidityCard,
  PrecipitationCard,
  SunriseSunsetCard,
  TemperatureCard,
  WeatherDetailsGrid,
  WindCard,
} from './_components';

export const revalidate = 3600;

export async function generateMetadata(props: {
  params: Promise<{ areaSlug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const area = await getArea(params.areaSlug);

  return {
    title: `${area.name} - PrimeCondies`,
  };
}

const getArea = React.cache(async function getArea(areaSlug: string) {
  const areas = await sql<AreaSelect>`
    SELECT id,
           area_slug                AS "areaSlug",
           name,
           place,
           country_code             AS "countryCode",
           ST_X(location::geometry) AS lng,
           ST_Y(location::geometry) AS lat
    FROM areas
    WHERE area_slug = ${areaSlug}
  `;

  if (areas.length === 0) {
    notFound();
  }

  const weatherData = await fetchAreaWeather(areas[0].lat, areas[0].lng);
  return { ...areas[0], weather: weatherData };
});

interface AreaDetailsProps {
  params: Promise<{ areaSlug: string }>;
}

async function AreaDetails(props: AreaDetailsProps) {
  const params = await props.params;
  const area: Area = await getArea(params.areaSlug);

  return (
    <main className="flex h-full flex-col gap-4 py-6 lg:gap-6 lg:py-10">
      <AreaDetailsPageHeader area={area} />
      <WeatherDetailsGrid>
        <PrecipitationCard
          precipitation={area.weather.current.precipitation}
          precipitationProbability={area.weather.daily.precipitation_probability_mean[0]}
        />
        <HumidityCard
          humidity={area.weather.daily.relative_humidity_2m_mean[0]}
          dewPoint={area.weather.daily.dew_point_2m_max[0]}
        />
        <TemperatureCard
          feelsLikeTemp={area.weather.current.apparent_temperature}
          actualTemp={area.weather.current.temperature_2m}
          maxTemp={area.weather.daily.temperature_2m_max[0]}
          minTemp={area.weather.daily.temperature_2m_min[0]}
          weatherCode={area.weather.current.weather_code}
          isDay={Boolean(area.weather.current.is_day)}
        />
        <WindCard
          windSpeed={area.weather.current.wind_speed_10m}
          windGusts={area.weather.current.wind_gusts_10m}
          windDirection={area.weather.current.wind_direction_10m}
        />
        <SunriseSunsetCard
          currentSunrise={area.weather.daily.sunrise[0]}
          currentSunset={area.weather.daily.sunset[0]}
          tomorrowSunrise={area.weather.daily.sunrise[1]}
          tomorrowSunset={area.weather.daily.sunset[1]}
          timezone={area.weather.timezone}
        />
        <HourlyForecast weather={area.weather} />
      </WeatherDetailsGrid>
    </main>
  );
}

export default AreaDetails;
