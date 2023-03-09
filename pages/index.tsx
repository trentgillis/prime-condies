import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  * {
    grid-column: 2;
  }

  @media only screen and (min-width: 788px) {
    grid-template-columns: 1fr 768px 1fr;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <h1>Prime Condies</h1>
    </Wrapper>
  );
}
