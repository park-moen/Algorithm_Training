function combination(menu, ep) {
  const answer = [];
  let temp = Array.from({ length: ep }, () => 0);

  function DFS(L, sp) {
    if (L === ep) {
      const val = temp.slice(0).sort().join('');
      answer.push(val);
    } else {
      for (let i = sp; i < menu.length; i++) {
        temp[L] = menu[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

function solution(orders, course) {
  const result = [];
  const combinationArr = Array.from({ length: course.length }, () => []);
  const newMap = Array.from({ length: course.length }, () => new Map());

  for (let menu of orders) {
    for (let i = 0; i < course.length; i++) {
      combinationArr[i].push(...combination(menu, course[i]));
    }
  }

  console.log(combinationArr);

  for (let i = 0; i < combinationArr.length; i++) {
    for (let val of combinationArr[i]) {
      if (newMap[i].has(val)) newMap[i].set(val, newMap[i].get(val) + 1);
      else newMap[i].set(val, 1);
    }
  }

  console.log(newMap);

  for (let i = 0; i < course.length; i++) {
    let max = 2;
    let temp = [];
    for (let [key, val] of newMap[i]) {
      if (val < max) continue;

      if (val > max) {
        max = val;
        temp = [key];
      } else if (max === val) temp.push(key);
    }
    result.push(...temp);
  }

  return result.sort();
}

// const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const orders = ['XYZ', 'XWY', 'WXA'];
const course = [2, 3, 4];

console.log(solution(orders, course));
