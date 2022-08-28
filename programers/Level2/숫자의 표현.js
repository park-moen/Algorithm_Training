function solution(n) {
  if (Math.ceil(n / 2) === 1) {
    return 1;
  }

  let answer = 1;
  let sum = 0;
  let index = 0;

  let array = Array.from({ length: n / 2 + 1 }, (_, index) => index + 1);

  while (index <= array.length) {
    if (sum === n) {
      const temp = array.slice(0, index);

      // console.log(temp);
      answer++;
      array = array.slice(1, array.length);
      sum = 0;
      index = 0;
    }
    if (sum > n) {
      array = array.slice(1, array.length);
      sum = 0;
      index = 0;
    }
    sum += array[index];

    index++;
  }

  return answer;
}

const n1 = 3;
const n2 = 15;
const n3 = 14;
const n4 = 15;

solution(n2);

// 10,000이라서 투포인터 알고리즘을 사용하여 문제를 해결했다.
function solution2(n) {
  let answer = 0;
  let right = 1;
  let sum = 1;

  for (let left = 1; left <= n; left++) {
    while (sum < n) {
      right++;
      sum += right;
    }

    if (sum === n) {
      answer++;
    }

    sum -= left;
  }

  return answer;
}

solution2(n2);

// 다른 사람 풀이
function solution3(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let temp = i;

    for (let j = i + 1; j <= n; j++) {
      console.log(j);
      temp += j;
      if (temp === n) answer++;
      else if (temp > n) break;
    }
  }

  return answer + 1;
}
