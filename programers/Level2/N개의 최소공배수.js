function solution1(arr) {
  let answer = 0;
  let index = 1;

  arr.sort((a, b) => a - b);

  while (true) {
    let isFind = false;
    const flagValue = arr[arr.length - 1] * index;

    for (let i = 0; i < arr.length; i++) {
      if (flagValue % arr[i] === 0) {
        isFind = true;
      } else {
        isFind = false;
        break;
      }
    }

    index++;

    if (isFind) {
      answer = flagValue;
      break;
    }
  }

  return answer;
}

// 유클리드 호제법을 사용하여 풀어본 풀이 방법
function solution2(arr) {
  function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
  }

  return arr.reduce((a, b) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return (max * min) / gcd(max, min);
  });
}

const arr = [2, 6, 8, 14];

console.log(solution1(arr));
console.log(solution2(arr));
