export const normaliseAngle = (angle: number): number => {
  // Calculates remainder to normalise positive angles to the range [0,359].
  const remainderAngle = angle % 360;

  // If remainder is negative, ajust it to the range [0,359] (-90 becomes 270).
  if (remainderAngle < 0) {
    return remainderAngle + 360;
  }
  return remainderAngle;
};
