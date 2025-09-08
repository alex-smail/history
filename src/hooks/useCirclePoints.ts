import { useEffect } from 'react';
import { gsap } from 'gsap';
import { getCirclePoints } from '../components/utils';

export function useCirclePoints(
  circleRef: React.RefObject<HTMLDivElement>,
  pointsRef: React.RefObject<HTMLDivElement>,
  activeIndex: number,
  pointsCount: number,
) {
  useEffect(() => {
    if (!circleRef.current || !pointsRef.current) return;

    const points = pointsRef.current.querySelectorAll('.point');
    const rect = circleRef.current.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) / 2;
    const angleStep = 360 / pointsCount;
    const coords = getCirclePoints(pointsCount, radius, angleStep);

    points.forEach((point, index) => {
      const { x, y } = coords[index];
      (point as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    });

    const targetRotation = -activeIndex * angleStep;

    gsap.to(pointsRef.current, {
      rotation: targetRotation,
      transformOrigin: '50% 50%',
      duration: 1,
      ease: 'power2.inOut',
    });

    const allNumbers = pointsRef.current.querySelectorAll('.point__number');
    allNumbers.forEach((number) => {
      gsap.to(number, {
        rotation: -targetRotation,
        duration: 1,
        ease: 'power2.inOut',
      });
    });
  }, [activeIndex, pointsCount]);
}
