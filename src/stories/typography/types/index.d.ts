import { type CSSProperties } from 'react';
export interface TypographyProps {
  variant: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'label';
  color?: string | undefined;
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  style?: CSSProperties;
  className?: string;
  fontSize?: number | string;
  children: string;
  fontWeight?: 'bold' | 'bolder' | 'normal';
}

interface IgetVariantStyles {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: number;
}
