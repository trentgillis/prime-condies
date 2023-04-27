import { Container, Header, Paragraph } from '@/components';
import { useAreas } from '@/lib/hooks/useAreas';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

export default function Home() {
  const { data: areas, isLoading } = useAreas();

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  } else {
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
}
