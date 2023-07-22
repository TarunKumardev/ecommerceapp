import { type CSSProperties } from 'react';

type HTMLAttributeAnchorTarget = '_self' | '_blank' | '_parent' | '_top' | string;
export interface IButton {
  children: string;
  variant?: 'text' | 'contained' | 'outlined';
  type?: 'reset' | 'submit' | undefined;
  ariaLabel?: string;
  loading?: boolean;
  onClick?: (data: any) => void;
  className?: string;
  href?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  target?: HTMLAttributeAnchorTarget;
  style?: CSSProperties;
}
