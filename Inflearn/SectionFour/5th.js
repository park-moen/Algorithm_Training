function solution(k, card) {
  let answer;
  let temp = new Set();
  const len = card.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let sortTemp = [...temp].sort((a, b) => b - a);
  return (answer = sortTemp[k - 1]);
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
