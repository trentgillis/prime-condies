import { Inter } from 'next/font/google';
import styled from 'styled-components';

import { ColorCodes } from '@/lib/types/ColorCodes';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

type StyledParagraphProps = {
  color?: ColorCodes;
  variant?: 's' | 'm';
  bold?: boolean;
};

type ParagraphProps = StyledParagraphProps & {
  children: React.ReactNode;
};

const inter = Inter({ weight: ['400', '500'], subsets: ['latin'] });

const StyledParagraph = styled.p<StyledParagraphProps>`
  letter-spacing: 0.25px;
  font-size: ${({ variant }) => (variant === 's' ? '0.875rem' : '1rem')};
  color: ${({ color: colorCode }) => getColorFromColorCode(colorCode)};
  font-weight: ${({ bold }) => bold && '500'};
`;

export function Paragraph({ variant = 'm', color = 'N800', bold = false, children }: ParagraphProps) {
  return (
    <StyledParagraph className={inter.className} variant={variant} color={color} bold={bold}>
      {children}
    </StyledParagraph>
  );
}
