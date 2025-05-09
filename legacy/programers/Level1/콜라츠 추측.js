function solution1(num) {
  if (num === 1) {
    return 0;
  }

  let count = 0;

  while (true) {
    if (count > 500) {
      return -1;
    }

    if (num === 1) {
      return count;
    }

    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    count++;
  }
}

function solution2(num) {
  let count = 0;

  while (num !== 1 && count !== 500) {
    console.log(num);
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return num === 1 ? count : -1;
}

const n = 626331;
const n2 = 1;

console.log(solution1(n));
console.log(solution2(n2));
