import { getCircleCoordinates } from './circle-coordinates';
import { getPointAngle } from './point-angle';

// Генерирует список координат для всех точек
export const getCirclePoints = (total: number, radius: number, offset = 0) => {
  const angleStep = 360 / total;
  
  return Array.from({ length: total }).map((_, index) => {
    const angle = getPointAngle(index, angleStep, offset);
    return getCircleCoordinates(angle, radius);
  });
}
