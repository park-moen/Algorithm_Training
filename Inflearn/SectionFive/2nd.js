function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = (p2 = 0);
  arr1.sort();
  arr2.sort();

  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// [ 1, 2, 3, 5, 9 ]
// [ 2, 3, 5, 7, 8 ]
