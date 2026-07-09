/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let arrowPos = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];

    if (start > arrowPos) {
      arrows++;
      arrowPos = end;
    }
  }

  return arrows;
};

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

findMinArrowShots(points);
