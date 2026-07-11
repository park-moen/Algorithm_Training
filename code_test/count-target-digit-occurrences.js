/**
 * Count Target Digit Occurrences (0, 2, 4)
 *
 * 정수 n이 주어지면, 0부터 n까지의 모든 정수를 10진수로 나타냈을 때,
 * 그 안에 등장하는 숫자 0, 2, 4의 "등장 횟수"를 전부 더한 값을 반환하세요.
 *
 * 주의할 점: 한 숫자 안에 목표 숫자(0,2,4)가 여러 번 등장하면
 * 그 등장 횟수만큼 전부 카운트해야 합니다.
 * 예를 들어 22는 '2'가 두 번 등장하므로 2로 카운트합니다 (1이 아님).
 * 20은 '2'와 '0'이 각각 한 번씩 등장하므로 2로 카운트합니다.
 *
 * Example 1:
 * Input: n = 22
 * Output: 11
 * Explanation:
 *   0(0→1), 2(2→1), 4(4→1),
 *   10(0→1), 12(2→1), 14(4→1),
 *   20(2,0→2), 21(2→1), 22(2,2→2)
 *   1+1+1+1+1+1+2+1+2 = 11
 *
 * Example 2:
 * Input: n = 0
 * Output: 1
 * Explanation: 0 자체가 목표 숫자(0)이므로 1
 *
 * Example 3:
 * Input: n = 5
 * Output: 3
 * Explanation: 0..5 중 0,2,4가 각각 한 번씩 등장 → 1+1+1 = 3
 *
 * Constraints:
 * - 0 <= n <= 1000
 *
 * n이 최대 1000 정도로 작기 때문에, 0부터 n까지 전부 순회하며
 * 각 자릿수를 하나씩 확인하는 O(n log n) (자릿수 개수만큼 내부 반복) 풀이로
 * 충분히 시간 안에 통과합니다. 굳이 더 빠른 수학적 공식(자릿수 DP 등)을
 * 고민할 필요는 없는 규모입니다.
 */

/**
 * @param {number} n
 * @return {number}
 */
const countTargetDigits = function (n) {
  const targets = new Set([0, 2, 4]);
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let num = i;

    if (num === 0) {
      if (targets.has(0)) count++;
      continue;
    }

    while (num > 0) {
      const digit = num % 10;
      if (targets.has(digit)) count++;
      num = Math.floor(num / 10);
    }
  }

  return count;
};

// ---- 테스트 케이스 ----

console.log(countTargetDigits(22)); // 예상 출력: 11 (22가 '2'를 두 번 포함하는 걸 정확히 반영)
console.log(countTargetDigits(0));  // 예상 출력: 1
console.log(countTargetDigits(5));  // 예상 출력: 3
console.log(countTargetDigits(100)); // 예상 출력: 52
