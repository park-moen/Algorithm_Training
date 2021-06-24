function solution(k, card) {
  let answer;
  const len = card.length;
  const temp = new Set();

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  return (answer = [...temp].sort((a, b) => b - a))[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
