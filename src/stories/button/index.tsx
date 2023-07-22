import { type ReactNode } from 'react';
import './styles/index.css';
import { type IButton } from './types';

function Button({
  children,
  loading = false,
  ariaLabel,
  type,
  startIcon,
  endIcon,
  variant,
  className,
  href,
  target,
  onClick,
  style,
  ...rest
}: IButton): ReactNode {
  const applyStartIcon = startIcon ?? null;
  const applyendIcon = endIcon ?? null;
  const getButtonstyles = (): string => {
    switch (variant) {
      case 'contained':
        return ' base-button-styles contained-button ';
      case 'outlined':
        return ' base-button-styles  outline-button';
      case 'text':
        return ' base-button-styles text-button';
      default:
        return '';
    }
  };

  const mergedClasses: string = `${getButtonstyles()}${className ?? ''}  `;

  // eslint-disable-next-line no-extra-boolean-cast
  if (Boolean(href)) {
    return (
      <a target={target} aria-label={ariaLabel} type={type} className={mergedClasses} style={style} {...rest}>
        {applyStartIcon}
        {children}
        {applyendIcon}
      </a>
    );
  }

  return (
    <button
      disabled={loading}
      aria-label={ariaLabel}
      type={type}
      className={mergedClasses}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {applyStartIcon}
      {!loading ? <>{children}</> : 'loading...'}
      {applyendIcon}
    </button>
  );
}

export default Button;
