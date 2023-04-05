import { Lato } from 'next/font/google';
import styled from 'styled-components';

type CaptionProps = {
  children: React.ReactNode;
};

const StyledSubscript = styled.sub`
  font-size: 0.875rem;
  width: fit-content;
  color: ${({ theme }) => theme.colors.neutral[500]};
  letter-spacing: 0.5px;
`;

const lato = Lato({ weight: '400', subsets: ['latin'] });

export function Subscript({ children }: CaptionProps) {
  return <StyledSubscript className={lato.className}>{children}</StyledSubscript>;
}
