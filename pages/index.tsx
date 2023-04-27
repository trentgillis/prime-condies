import { Container, Header, Paragraph } from '@/components';
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
          return <Paragraph key={area._id.$oid}>{area.name}</Paragraph>;
        })}
    </Container>
  );
}
