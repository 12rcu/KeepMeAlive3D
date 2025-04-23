import * as THREE from "three";


/**
 * Rounds a number to `n` decimal places.
 */
function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Rounds the quaternion in place.
 */
export function roundQuaternionInPlace(
  q: THREE.Quaternion,
  decimals: number = 4,
): THREE.Quaternion {
  q.x = roundTo(q.x, decimals);
  q.y = roundTo(q.y, decimals);
  q.z = roundTo(q.z, decimals);
  q.w = roundTo(q.w, decimals);
  return q;
}