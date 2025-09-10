// Возвращает угол для конкретной точки
export const getPointAngle = (index: number, angleStep: number, offset = 0) =>
  index * angleStep + offset;
