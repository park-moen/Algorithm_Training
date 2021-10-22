function solution(expression) {
  const answer = [];
  const P = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  for (let oprList of P) {
    const splitStr = expression.split(/(\D)/);
    for (let opr of oprList) {
      while (splitStr.includes(opr)) {
        const idx = splitStr.indexOf(opr);
        const sn = Number(splitStr[idx - 1]);
        const en = Number(splitStr[idx + 1]);

        switch (opr) {
          case '+':
            splitStr.splice(idx - 1, 3, sn + en);
            continue;
          case '-':
            splitStr.splice(idx - 1, 3, sn - en);
            continue;
          case '*':
            splitStr.splice(idx - 1, 3, sn * en);
            continue;
        }
      }
    }

    answer.push(Math.abs(splitStr));
  }

  return Math.max(...answer);
}

const str = '100-200*300-500+20'; // 60420
// const str = '50*6-3*2'; // 300

console.log(solution(str));
