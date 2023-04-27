import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
};

const Wrapper = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 768px 1fr;
    padding: 0px;

    * {
      grid-column: 2;
    }
  }
`;

export function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
