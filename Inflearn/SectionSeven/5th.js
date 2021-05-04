function solution(size, arr) {
  let answer = [];

  for (let value of arr) {
    let hit = -1;

    for (let i = 0; i < size; i++) {
      if (answer[i] === value) hit = i;
    }

    if (hit === -1) {
      for (let i = size - 1; i > 0; i--) answer[i] = answer[i - 1];
    } else {
      for (let i = hit; i > 0; i--) answer[i] = answer[i - 1];
    }

    answer[0] = value;
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
