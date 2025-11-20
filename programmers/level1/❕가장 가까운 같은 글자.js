// ! 시간 복잡도 O(n^2)로 가장 비효율적인 방법
// ! 추천도: ★★☆☆☆
function solution(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== i) {
      let count = 0;

      for (let j = i - 1; j >= 0; j--) {
        count++;

        if (s[i] === s[j]) {
          result.push(count);
          break;
        }
      }
    } else {
      result.push(-1);
    }
  }

  return result;
}

// * 시간 복잡도 O(n^2)이지만 가독성이 올라감(lastIndexOf로 내부적으로 for문을 돌림)
// * 추천도: ★★★★★
function secondSolution(s) {
  let temp = [];
  let result = [];

  for (const char of s) {
    if (!temp.includes(char)) {
      result.push(-1);
      temp.push(char);
    } else {
      result.push(temp.length - temp.lastIndexOf(char));
      temp.push(char);
    }
  }

  return result;
}

// * hash 알고리즘을 사용한 O(n)으로 적절한 시간복잡도로 만드는 방법
// * 추천도: ★★★☆☆
function thirdSolution(s) {
  const result = [];
  const lastIndexHash = new Map();

  [...s].forEach((char, idx) => {
    if (lastIndexHash.has(char)) {
      result.push(idx - lastIndexHash.get(char));
    } else {
      result.push(-1);
    }

    lastIndexHash.set(char, idx);
  });

  return result;
}

const s = 'banana';

console.log(solution(s));
console.log(secondSolution(s));
console.log(thirdSolution(s));
