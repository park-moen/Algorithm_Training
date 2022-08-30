// 1번 방법 (2번 방법 보다 성능이 좋지 않음)
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map(permutation => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

const example = [1, 2, 3, 4];

const result = getPermutations(example, 3);
console.log(result);

// 2번 방법 (메모이제이션을 사용하여 1번 방법 보다 성능이 좋음)
function solution2(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [1, 2, 3, 4];

console.log(solution2(3, arr));
