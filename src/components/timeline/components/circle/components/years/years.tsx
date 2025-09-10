// import React from 'react';
// import './years.scss';

// interface CircleYearsProps {
//   start: string;
//   end: string;
// }

// export const CircleYears: React.FC<CircleYearsProps> = ({ start, end }) => (
//   <div className="years">
//     <span className="years__year years__year--start">{start}</span>
//     <span className="years__year years__year--end">{end}</span>
//   </div>
// );

import React, { useRef } from 'react';
import { useCounterAnimation } from '../../../../../../hooks';
import './years.scss';

interface CircleYearsProps {
  start: string;
  end: string;
}

export const CircleYears: React.FC<CircleYearsProps> = ({ start, end }) => {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useCounterAnimation(startRef, Number(start), 1);
  useCounterAnimation(endRef, Number(end), 1);

  return (
    <div className="years">
      <div className="years__year years__year--start" ref={startRef}>
        {start}
      </div>
      <div className="years__year years__year--end" ref={endRef}>
        {end}
      </div>
    </div>
  );
};
