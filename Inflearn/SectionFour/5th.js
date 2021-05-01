function solution(k, card) {
  let answer;
  const temp = new Set();
  const n = card.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = card[i] + card[j] + card[k];
        temp.add(sum);
      }
    }
  }
  answer = [...temp].sort((a, b) => b - a)[k - 1];

  return answer;
}

// let arr = [13, 15, 34, 23];
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
