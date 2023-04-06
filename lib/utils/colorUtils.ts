import { theme } from '@/styles/theme';
import { ColorCodes } from '@/lib/types/ColorCodes';

const validColorMap = {
  N300: theme.colors.neutral[300],
  N500: theme.colors.neutral[500],
  N700: theme.colors.neutral[700],
  N800: theme.colors.neutral[800],
  P500: theme.colors.brand.primary[500],
  P400: theme.colors.brand.primary[400],
};

export function getColorFromColorCode(
  colorCode: ColorCodes | undefined,
  defaultColor: string = theme.colors.neutral[800]
) {
  if (colorCode) return validColorMap[colorCode];

  return defaultColor;
}
