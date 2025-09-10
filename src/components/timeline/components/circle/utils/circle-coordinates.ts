// Возвращает координаты точки по углу и радиусу
export const getCircleCoordinates = (angle: number, radius: number) => {
  const rad = ((angle - 1200) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}
