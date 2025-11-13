function solution(a, b) {
  let result = '';
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
      result += '*';
    }

    if (i !== b) {
      result += '\n';
    }
  }

  return result;
}

console.log(solution(5, 3));
