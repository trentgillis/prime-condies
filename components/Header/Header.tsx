import styled from 'styled-components';

import { Logo } from '@/components';
import { SearchBar } from '../SeachBar/SearchBar';

const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  flex-direction: column;
  gap: 16px;
  margin: 16px 16px 16px;
 @media(min-width: 450px) {
    flex-direction: row;
    height: 80px;
    flex-wrap: wrap;
    align-items: left;
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
