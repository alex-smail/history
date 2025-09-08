import React, { ReactNode } from 'react';
import './button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button className={`btn  ${className || ''}`} {...props}>
    {children}
  </button>
);
