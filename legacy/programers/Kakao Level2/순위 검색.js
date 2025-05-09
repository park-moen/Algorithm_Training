function solution(info, query) {
  const answer = [];
  const map = {};

  function combination(infos, score, map, start) {
    const key = infos.join('');

    if (map[key]) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = start; i < infos.length; i++) {
      const copyInfos = [...infos];

      copyInfos[i] = '-';
      combination(copyInfos, score, map, i + 1);
    }
  }

  function binarySearch(map, key, score) {
    let scoreList = map[key];

    if (scoreList) {
      let start = 0;
      let end = scoreList.length;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (scoreList[mid] >= score) {
          end = mid;
        } else if (scoreList[mid] < score) {
          start = mid + 1;
        }
      }

      return scoreList.length - start;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < info.length; i++) {
    const infos = info[i].split(' ');
    const score = infos.pop();

    combination(infos, score, map, 0);
  }
  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const querys = query[i].replace(/ and /g, '').split(' ');
    const score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(''), score));
  }

  return answer;
}

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

solution(info, query);
