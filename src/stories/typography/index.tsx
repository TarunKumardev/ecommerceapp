import { type ReactNode, type CSSProperties } from 'react';
import { type IgetVariantStyles, type TypographyProps } from './types';

function Typography({
  children,
  variant,
  className,
  color,
  align,
  italic,
  style,
  fontSize,
  fontWeight,
}: TypographyProps): ReactNode {
  const getVariantStyles = (): IgetVariantStyles => {
    switch (variant) {
      case 'heading1':
        return { fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.2 };
      case 'heading2':
        return { fontSize: '2rem', fontWeight: 'bold', lineHeight: 1.3 };
      case 'heading3':
        return { fontSize: '1.5rem', fontWeight: 'bold', lineHeight: 1.4 };
      case 'paragraph':
        return { fontSize: '1rem', fontWeight: 'normal', lineHeight: 1.6 };
      case 'label':
        return { fontSize: '0.8rem', fontWeight: 'bold', lineHeight: 1.2 };
      default:
        return {};
    }
  };

  const styles: CSSProperties = {
    ...getVariantStyles(),
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: color ?? '',
    textAlign: align ?? 'initial',
    fontStyle: italic ?? false ? 'italic' : 'normal',
    fontSize: fontSize ?? getVariantStyles().fontSize,
    fontWeight: fontWeight ?? getVariantStyles().fontWeight,
    ...style,
  };
  return (
    <p className={className} style={styles}>
      {children}
    </p>
  );
}

export default Typography;
