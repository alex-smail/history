import React from 'react';
import './years.scss';

interface CircleYearsProps {
  start: string;
  end: string;
}

export const CircleYears: React.FC<CircleYearsProps> = ({ start, end }) => (
  <div className="years">
    <span className="years__year years__year--start">{start}</span>
    <span className="years__year years__year--end">{end}</span>
  </div>
);
