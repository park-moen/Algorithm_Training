// ? O(T × M × K × L): T: targets 길이, M: target 평균 길이, K: keymap 길이, L: keymap 평균 길이
function solution(keymap, targets) {
  return targets.map(target => {
    let totalTouchCount = 0;

    for (const char of target.split('')) {
      let minTouch = Number.MAX_SAFE_INTEGER;

      for (const key of keymap) {
        const charIndex = key.indexOf(char);

        if (charIndex !== -1) {
          minTouch = Math.min(minTouch, charIndex + 1);
        }
      }

      if (minTouch === Number.MAX_SAFE_INTEGER) {
        return -1;
      }

      totalTouchCount += minTouch;
    }

    return totalTouchCount;
  });
}

// ? O(K × L + T × M): 전처리: O(K × L), target 처리: O(T × M), Map 조회는 O(1)이므로 빠름
function secondSolution(keymap, targets) {
  const charMinTouch = new Map();

  keymap.forEach(key => {
    key.split('').forEach((char, index) => {
      const touchCount = index + 1;

      if (!charMinTouch.has(char) || charMinTouch.get(char) > touchCount) {
        charMinTouch.set(char, touchCount);
      }
    });
  });

  return targets.map(target => {
    let totalTouchCount = 0;

    for (const char of target) {
      if (!charMinTouch.has(char)) {
        return -1;
      }

      totalTouchCount += charMinTouch.get(char);
    }

    return totalTouchCount;
  });
}

const keymap = ['ABACD', 'BCEFD'];
const targets = ['ABCD', 'AABB'];

console.log(solution(keymap, targets));
