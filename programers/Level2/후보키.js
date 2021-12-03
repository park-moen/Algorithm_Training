function combination(els, k) {
  const res = [];
  const prevEl = [];

  function dfs(els, k) {
    if (prevEl.length === k) {
      const temp = prevEl.slice().join('');
      res.push(temp);

      return;
    } else {
      for (let i = 0; i < els.length; i++) {
        const nextEl = els.slice(i + 1);

        prevEl.push(els[i]);
        dfs(nextEl, k);
        prevEl.pop();
      }
    }
  }

  dfs(els, k);

  return res;
}

function isUnique(tuple) {
  const temp = tuple.map(item => item.join(''));
  const set = new Set(temp);

  return temp.length === set.size ? true : false;
}

function solution(relation) {
  let answer = 0;
  let combList = [];
  const attrNum = relation[0].length;
  const indexes = Array.from({ length: attrNum }, (_, i) => i);

  for (let i = 0; i < attrNum; i++) {
    combList.push(...combination(indexes, i + 1));
  }

  while (combList.length) {
    const columns = combList.shift().split('');
    const tuple = relation.map(row => columns.map(col => row[col]));

    if (isUnique(tuple)) {
      const colCombTemp = [];

      answer++;

      for (let i = 0; i < combList.length; i++) {
        for (let j = 0; j < columns.length; j++) {
          if (!combList[i].includes(columns[j])) colCombTemp.push(combList[i]);
        }
      }

      combList = colCombTemp;
    }
  }

  return answer;
}

const relation = [
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
];

console.log(solution(relation));
