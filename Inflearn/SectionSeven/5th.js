// 방법 1
function solution1(size, arr) {
  const answer = [];

  arr.forEach(val => {
    let pos = -1;

    for (let i = 0; i < size; i++) {
      if (answer[i] === val) pos = i;
    }

    if (pos === -1) {
      answer.unshift(val);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(val);
    }
  });

  return answer;
}

let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution1(5, arr1));

// 방법 2
function solution2(size, arr) {
  const answer = Array.from({ length: size }, () => 0);

  arr.forEach(val => {
    let pos = -1;

    for (let i = 0; i < size; i++) {
      if (answer[i] === val) pos = i;
    }

    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) answer[i] = answer[i - 1];
    } else {
      for (let i = pos; i >= 1; i--) answer[i] = answer[i - 1];
    }

    answer[0] = val;
  });

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution2(5, arr2));
