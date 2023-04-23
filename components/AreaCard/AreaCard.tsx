import styled from 'styled-components';

import { Header, Paragraph, WeatherIcon, WeatherIconCode } from '@/components';
import { WeatherData } from '@/lib/types/WeatherData';

type AreaCardProps = {
  currentWeather: WeatherData;
  areaName: string;
  areaPlace: string;
  areaCountry: string;
  todayMaxTemp: number;
  todayMinTemp: number;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'areaCardInfo areaCardIcon';
  width: 100%;
  padding: 16px 32px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
`;

const InfoWrapper = styled.div`
  grid-area: areaCardInfo;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const AreaLocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

const AreaTemperatureInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  width: 100%;

  & > div {
    display: flex;
    gap: 4px;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  grid-area: areaCardIcon;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;

export function AreaCard({
  currentWeather,
  areaName,
  areaPlace,
  areaCountry,
  todayMinTemp,
  todayMaxTemp,
}: AreaCardProps) {
  return (
    <Wrapper>
      <InfoWrapper>
        <AreaLocationInfoWrapper>
          <Paragraph variant="s">
            {areaPlace}, {areaCountry}
          </Paragraph>
          <Header variant="H5">{areaName}</Header>
        </AreaLocationInfoWrapper>
        <AreaTemperatureInfoWrapper>
          <Header variant="H1">{Math.round(currentWeather.temp as number)}&#176;</Header>
          <div>
            <Paragraph variant="s">H: {Math.round(todayMaxTemp)}&#176;</Paragraph>
            <Paragraph variant="s">L: {Math.round(todayMinTemp)}&#176;</Paragraph>
          </div>
        </AreaTemperatureInfoWrapper>
      </InfoWrapper>
      <IconWrapper>
        <div>
          <WeatherIcon weatherIconCode={currentWeather.weather[0].icon as WeatherIconCode} size={80} />
          <Paragraph variant="s" color="N500">
            {/* TODO: Create util or use lodash */}
            {currentWeather.weather[0].description
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </Paragraph>
        </div>
      </IconWrapper>
    </Wrapper>
  );
}
