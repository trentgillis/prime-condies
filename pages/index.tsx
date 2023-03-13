import styled from 'styled-components';

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
  return (
    <Wrapper>
      <h1>Prime Condies</h1>
    </Wrapper>
  );
}
