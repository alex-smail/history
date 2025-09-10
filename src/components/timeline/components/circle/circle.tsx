import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getCirclePoints } from './utils';
import { Button } from '../../../button/button';
import './circle.scss';
import { useCirclePoints, useTitleAnimation } from '../../../../hooks';
import { CircleNavigation, CirclePoints, CircleYears } from './components';

interface CircleProps {
  period: string;
  pointsCount: number;
  onPointClick: (index: number) => void;
  activeIndex: number;
  activeTitle: string;
  onPrev: () => void;
  onNext: () => void;
}

export const Circle: React.FC<CircleProps> = ({
  period,
  pointsCount,
  onPointClick,
  activeIndex,
  activeTitle,
  onPrev,
  onNext,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useCirclePoints(circleRef, pointsRef, activeIndex, pointsCount);
  useTitleAnimation(titleRef, activeTitle);

  const [start, end] = period.split('-').map((s) => s.trim());

  return (
    <div className="circle-container">
      <div className="circle" ref={circleRef}>
        <CircleYears start={start} end={end} />
        <CirclePoints
          pointsCount={pointsCount}
          activeIndex={activeIndex}
          onPointClick={onPointClick}
          pointsRef={pointsRef}
        />
      </div>

      <h3 className="circle__title" ref={titleRef}>
        {activeTitle}
      </h3>

      <CircleNavigation
        activeIndex={activeIndex}
        pointsCount={pointsCount}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
};
