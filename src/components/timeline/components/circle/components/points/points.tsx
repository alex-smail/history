import React from 'react';
import './points.scss';

interface CirclePointsProps {
  pointsCount: number;
  activeIndex: number;
  onPointClick: (index: number) => void;
  pointsRef: React.RefObject<HTMLDivElement>;
}

export const CirclePoints: React.FC<CirclePointsProps> = ({
  pointsCount,
  activeIndex,
  onPointClick,
  pointsRef,
}) => (
  <div className="points__container" ref={pointsRef}>
    {Array.from({ length: pointsCount }).map((_, index) => (
      <div key={index}>
        <button
          className={`point ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onPointClick(index)}
        >
          <span className="point__dot">
            <span className="point__number">{index + 1}</span>
          </span>
        </button>
      </div>
    ))}
  </div>
);
