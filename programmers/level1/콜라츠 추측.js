function solution(num) {
  let copyNum = num;
  let count = 0;
  while (copyNum !== 1) {
    if (count === 500) return -1;

    copyNum = copyNum % 2 == 0 ? copyNum / 2 : copyNum * 3 + 1;
    count++;
  }

  return count;
}

console.log(solution(16));
