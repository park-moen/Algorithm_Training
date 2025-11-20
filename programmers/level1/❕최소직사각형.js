function solution(sizes) {
  let quadrangleWith = 0;
  let quadrangleHight = 0;

  sizes.forEach(size => {
    let max = Math.max(...size);
    let min = Math.min(...size);

    if (max > quadrangleWith) {
      quadrangleWith = max;
    }

    if (min > quadrangleHight) {
      quadrangleHight = min;
    }
  });

  return quadrangleWith * quadrangleHight;
}

function secondeSolution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  const maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

const size = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

solution(size);
secondeSolution(size);
