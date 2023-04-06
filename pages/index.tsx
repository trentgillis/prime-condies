import styled from 'styled-components';

import { Header, Paragraph, Subscript } from '@/components';
import { useAreas } from '@/lib/hooks/useAreas';

const Wrapper = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;

  @media only screen and (min-width: 788px) {
    grid-template-columns: 1fr 768px 1fr;
    padding: 0px;

    * {
      grid-column: 2;
    }
  }
`;

export default function Home() {
  const { data: areas, isLoading } = useAreas();

  if (isLoading) {
    // TODO: Loading spinner
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <Header variant="H1">Prime Condies</Header>
      {areas &&
        areas.map((area) => {
          return <Paragraph key={area._id.$oid}>{area.name}</Paragraph>;
        })}
      <Subscript>Hello</Subscript>
    </Wrapper>
  );
}
