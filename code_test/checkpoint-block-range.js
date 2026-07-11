/**
 * Checkpoint Block Range Query
 *
 * 1차원 좌표축 위에 "블록(장애물)"을 설치하거나, 특정 구간에 블록이 있는지
 * 확인하는 연산이 순서대로 주어집니다.
 *
 * operations 배열의 각 원소는 다음 두 가지 타입 중 하나입니다.
 *
 * [1, x]
 *   → 좌표 x 위치에 블록을 설치합니다. (같은 위치에 중복 설치될 수 있음)
 *
 * [2, x, size]
 *   → 좌표 (x - size + 1) 부터 x까지, 총 size칸의 구간을 확인합니다.
 *   → 이 구간 안에 블록이 하나라도 있으면 '0'을,
 *     블록이 하나도 없으면 '1'을 결과에 추가합니다.
 *
 * 모든 연산을 순서대로 처리한 뒤, [2, x, size] 타입 연산에서 얻어진
 * '0'/'1' 값들을 순서대로 이어붙인 문자열을 반환하세요.
 *
 * 좌표 x는 음수, 0, 양수를 모두 포함할 수 있습니다.
 *
 * Example 1:
 * Input: operations = [
 *   [1, 5],
 *   [1, 3],
 *   [2, 5, 2],
 *   [2, 4, 2],
 *   [2, 7, 3],
 * ]
 * Output: "000"
 * Explanation:
 * - [1,5]  → 좌표 5에 블록 설치
 * - [1,3]  → 좌표 3에 블록 설치
 * - [2,5,2] → 구간 [4,5] 확인 → 5에 블록 있음 → '0'
 * - [2,4,2] → 구간 [3,4] 확인 → 3에 블록 있음 → '0'
 * - [2,7,3] → 구간 [5,6,7] 확인 → 5에 블록 있음 → '0'
 *
 * Example 2:
 * Input: operations = [
 *   [1, 10],
 *   [2, 1, 3],
 *   [2, 12, 3],
 * ]
 * Output: "10"
 * Explanation:
 * - [1,10]  → 좌표 10에 블록 설치
 * - [2,1,3] → 구간 [-1,1] 확인 → 블록 없음 → '1'
 * - [2,12,3] → 구간 [10,12] 확인 → 10에 블록 있음 → '0'
 *
 * Example 3 (음수 좌표 확인):
 * Input: operations = [
 *   [1, -3],
 *   [2, -2, 2],
 *   [2, 0, 2],
 * ]
 * Output: "01"
 * Explanation:
 * - [1,-3]   → 좌표 -3에 블록 설치
 * - [2,-2,2] → 구간 [-3,-2] 확인 → -3에 블록 있음 → '0'
 * - [2,0,2]  → 구간 [-1,0] 확인 → 블록 없음 → '1'
 *
 * Constraints:
 * - 1 <= operations.length <= 10^5
 * - operations[i][0]은 1 또는 2
 * - -10^9 <= x <= 10^9  (좌표가 이 정도 범위이므로 배열로 직접 인덱싱하면 메모리 초과)
 * - size는 상대적으로 작은 양의 정수 (구간을 순회하며 확인 가능한 크기)
 *
 * 핵심 포인트: 좌표 범위가 -10^9 ~ 10^9로 매우 넓기 때문에,
 * new Array(n) 같은 고정 크기 배열로 좌표를 직접 인덱싱하는 방식은
 * 메모리 초과로 불가능합니다. Set(또는 Map)을 사용해
 * "실제로 블록이 설치된 좌표만" 저장하는 방식이 필수입니다.
 */

/**
 * @param {Array<Array<number>>} operations
 * @return {string}
 */
const solveCoordinateBlocks = function (operations) {
  const blocks = new Set();
  let result = '';

  for (const op of operations) {
    if (op[0] === 1) {
      const [, x] = op;
      blocks.add(x);
    } else if (op[0] === 2) {
      const [, x, size] = op;
      let hasBlock = false;

      for (let pos = x - size + 1; pos <= x; pos++) {
        if (blocks.has(pos)) {
          hasBlock = true;
          break;
        }
      }

      result += hasBlock ? '0' : '1';
    }
  }

  return result;
};

// ---- 테스트 케이스 ----

const operations1 = [
  [1, 5],
  [1, 3],
  [2, 5, 2],
  [2, 4, 2],
  [2, 7, 3],
];
console.log(solveCoordinateBlocks(operations1));
// 예상 출력: "000"

const operations2 = [
  [1, 10],
  [2, 1, 3],
  [2, 12, 3],
];
console.log(solveCoordinateBlocks(operations2));
// 예상 출력: "10"

const operations3 = [
  [1, -3],
  [2, -2, 2],
  [2, 0, 2],
];
console.log(solveCoordinateBlocks(operations3));
// 예상 출력: "01"
