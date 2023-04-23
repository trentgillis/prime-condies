import { Container, Header, Paragraph } from '@/components';
import { AreaCard } from '@/components/AreaCard/AreaCard';
import { useAreas } from '@/lib/hooks/useAreas';

export default function Home() {
  const { data: areas, isLoading } = useAreas();

  if (isLoading) {
    // TODO: Loading spinner
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Header variant="H1">Prime Condies</Header>
      {areas &&
        areas.map((area) => {
          // TODO: Render in an areas list component
          const { min, max } = area.weather.daily[0].temp as { min: number; max: number };

          return (
            <AreaCard
              key={area._id.$oid}
              currentWeather={area.weather.current}
              areaName={area.name}
              areaPlace={area.place}
              areaCountry={area.country}
              todayMinTemp={min}
              todayMaxTemp={max}
            />
          );
        })}
    </Container>
  );
}
