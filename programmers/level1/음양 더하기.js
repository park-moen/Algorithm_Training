function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => (signs[idx] ? acc + cur : acc - cur),
    0
  );
}

const absolutes = [1, 2, 3];
const signs = [false, false, true];

console.log(solution(absolutes, signs));
