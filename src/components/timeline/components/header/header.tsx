import React from 'react';
import './header.scss';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="header">
    <h2 className="header__title">{title}</h2>
  </div>
);
