function solution1(n) {
  const route = Math.sqrt(n);

  if (n % route === 0) {
    return Math.pow(route + 1, 2);
  } else {
    return -1;
  }
}

function solution2(n) {
  const route = Math.sqrt(n);
  const integer = Math.floor(route);

  if (route - integer === 0) {
    return Math.pow(route + 1, 2);
  } else {
    return -1;
  }
}

const n1 = 121;
const n2 = 5;

console.log(solution1(n1));
console.log(solution2(n2));
