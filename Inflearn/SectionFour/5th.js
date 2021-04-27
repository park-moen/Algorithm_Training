function solution(k, card) {
  let answer;
  const len = card.length;
  const temp = new Set();

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  const templateArr = Array.from(temp).sort((a, b) => b - a);

  answer = templateArr[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
