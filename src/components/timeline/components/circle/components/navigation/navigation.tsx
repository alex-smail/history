import React from 'react';
import { Button } from '../../../../../button/button';
import './navigation.scss';

interface CircleNavigationProps {
  activeIndex: number;
  pointsCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const CircleNavigation: React.FC<CircleNavigationProps> = ({
  activeIndex,
  pointsCount,
  onPrev,
  onNext,
}) => (
  <div className="navigation">
    <div className="navigation__dots">
      {String(activeIndex + 1).padStart(2, '0')}/
      {String(pointsCount).padStart(2, '0')}
    </div>
    <div className="navigation__btn">
      <Button
        className="btn__navigation"
        onClick={onPrev}
        disabled={activeIndex === 0}
      >
        <span>‹</span>
      </Button>
      <Button
        className="btn__navigation"
        onClick={onNext}
        disabled={activeIndex === pointsCount - 1}
      >
        <span>›</span>
      </Button>
    </div>
  </div>
);
