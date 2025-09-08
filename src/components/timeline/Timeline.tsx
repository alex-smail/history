import React, { useEffect, useState } from 'react';
import { TimelineSegment } from '../../types';
import { Header, Circle, Events } from './components';
import './Timeline.scss';

interface TimelineProps {
  data: TimelineSegment[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    if (activeSegment >= data.length) {
      setActiveSegment(0);
    }
  }, [data.length]);

  const handlePrev = () => {
    setActiveSegment((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveSegment((prev) => (prev < data.length - 1 ? prev + 1 : prev));
  };

  if (!data || data.length === 0) {
    return null;
  }

  const { period, title, events } = data[activeSegment];

  return (
    <div className="timeline">
      <Header title="Исторические даты" />
      <Circle
        period={period}
        pointsCount={data.length}
        activeIndex={activeSegment}
        activeTitle={title}
        onPointClick={setActiveSegment}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Events events={events} activeIndex={activeSegment} />
    </div>
  );
};
