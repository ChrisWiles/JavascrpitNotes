// [6] Triangle type.js

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

// If all angles are less than 90°, this triangle is acute and function should return 1.

// If one angle is strictly 90°, this triangle is right and function should return 2.

// If one angle more than 90°, this triangle is obtuse and function should return 3
// If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

// Solving SSS Triangles
// use The Law of Cosines first to calculate one of the angles
// then use The Law of Cosines again to find another angle
// and finally use angles of a triangle add to 180° to find the last angle.

function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 0; // 0 : if ᐃ cannot be made with given sides
  }

  var angleA = lawofCosines(a, b, c).toFixed(3);
  var angleB = lawofCosines(b, c, a).toFixed(3);
  var angleC = (180 - (+angleA + angleB));
  console.log(angleA, angleB, angleC);

  function lawofCosines(a, b, c) {
    return Math.acos(((b * b + c * c - a * a) / (2 * b * c))) * (180 / Math.PI);
  }

  if (angleA < 90 && angleB < 90 && angleC < 90) {
    return 1; // 1 : acute ᐃ
  } else if (angleA == 90 || angleB == 90 || angleC == 90) {
    return 2; // 2 : right ᐃ
  } else if (angleA > 90 || angleB > 90 || angleC > 90) {
    return 3; // 3 : obtuse ᐃ
  }
}

function triangleType(a, b, c) {
  var max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) return 0;
  if (2 * max * max == a * a + b * b + c * c) return 2;
  if (2 * max * max > a * a + b * b + c * c) return 3;
  return 1;
}
triangleType(7, 3, 2); // 0
triangleType(7, 12, 8) // 0
