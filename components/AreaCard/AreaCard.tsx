import styled from 'styled-components';

import { Paragraph, WeatherIcon, WeatherIconCode } from '@/components';
import { WeatherData } from '@/lib/types/WeatherData';

type AreaCardProps = {
  weatherData: WeatherData;
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

export function AreaCard({ weatherData }: AreaCardProps) {
  return (
    <Wrapper>
      <InfoWrapper></InfoWrapper>
      <IconWrapper>
        <div>
          <WeatherIcon weatherIconCode={weatherData.weather[0].icon as WeatherIconCode} size={80} />
          <Paragraph variant="s" color="N500">
            {/* TODO: Create util or use lodash */}
            {weatherData.weather[0].description
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </Paragraph>
        </div>
      </IconWrapper>
    </Wrapper>
  );
}
