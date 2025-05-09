function solution1(n) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += '수';
    } else {
      answer += '박';
    }
  }

  return answer;
}

function solution2(n) {
  return '수박'.repeat(n).slice(0, n);
}

solution1(4);
solution2(11);
