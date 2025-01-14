export const normaliseAngle = (angle: number): number => {
  // Calculates remainder to normalise positive angles to the range [0,359].
  const normalisedAngle = angle % 360;

  // If remainder is negative, adjust it to the range [0,359] (-90 becomes 270).
  if (normalisedAngle < 0) {
    return normalisedAngle + 360;
  }
  return normalisedAngle;
};
