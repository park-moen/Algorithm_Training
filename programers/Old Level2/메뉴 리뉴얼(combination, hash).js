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
      console.log(menu, 'menu');
      combinationArr[i].push(...combination(menu, course[i]));
    }
  }

  for (let i = 0; i < combinationArr.length; i++) {
    for (let val of combinationArr[i]) {
      if (newMap[i].has(val)) newMap[i].set(val, newMap[i].get(val) + 1);
      else newMap[i].set(val, 1);
    }
  }

  // console.log(newMap);

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
const orders1 = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const course1 = [2, 3, 4];

const orders = ['XYZ', 'XWY', 'WXA'];
const course = [2, 3, 4];

console.log(solution(orders1, course1));

// 다른 방식 풀이

function combination2(level, start, end, order, initialMenu, hash) {
  if (level === end) {
    const courseName = initialMenu.split('').sort().join('');
    if (hash[courseName] === undefined) {
      hash[courseName] = 1;
    } else {
      hash[courseName]++;
    }
  } else {
    for (let i = start; i < order.length; i++) {
      const components = order.charAt(i);
      combination2(level + 1, i + 1, end, order, initialMenu + components, hash);
    }
  }
}

function getMaxSet(hash, result) {
  let maxValue = 0;

  for (const value of Object.values(hash)) {
    if (maxValue < value) maxValue = value;
  }

  for (const [key, value] of Object.entries(hash)) {
    if (maxValue <= 1) continue;
    if (maxValue === value) {
      result.push(key);
    }
  }
}

function solution2(orders, course) {
  const result = [];

  course.forEach(courseNumber => {
    const hash = {};
    orders.forEach(order => {
      combination2(0, 0, courseNumber, order, '', hash);
    });

    getMaxSet(hash, result);
  });

  console.log(result);

  return result.sort();
}
