// ? 이 문제의 핵심은 “항상 맨 앞 카드만 사용할 수 있다”는 규칙을 그대로 코드로 옮기는 것입니다.

function solution(cards1, cards2, goal) {
  let cards1Idx = 0;
  let cards2Idx = 0;

  for (const findWord of goal) {
    if (cards1[cards1Idx] === findWord) {
      cards1Idx++;
    } else if (cards2[cards2Idx] == findWord) {
      cards2Idx++;
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

function secondSolution(cards1, cards2, goal) {
  let cards1Idx = 0;
  let cards2Idx = 0;

  const ok = goal.every(word => {
    if (cards1[cards1Idx] === word) {
      cards1Idx++;
      return true;
    }

    if (cards2[cards2Idx] === word) {
      cards2Idx++;
      return true;
    }

    return false;
  });

  return ok ? 'Yes' : 'No';
}

const cards1 = ['i', 'drink', 'water'];
const cards2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water', 'xx'];

console.log(solution(cards1, cards2, goal));
