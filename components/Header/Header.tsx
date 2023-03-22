import styled from 'styled-components';

import { Logo } from '@/components';
import { SearchBar } from '../SeachBar/SearchBar';

const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
  @media only screen and (min-width: 768px)  {
    display: grid
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    height: 80px;
  } 
`


export function Header() {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
    </Wrapper>
  );
}
