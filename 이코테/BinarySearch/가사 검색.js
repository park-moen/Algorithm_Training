function lowerBound(list, key, len) {
  let sp = 0;
  let ep = len - 1;

  while (sp < ep) {
    const mid = parseInt((sp + ep) / 2);

    if (compare(list[mid], key)) {
    } else {
    }
  }
}
function upperBound(list, key, len) {
  let sp = 0;
  let ep = len - 1;

  while (sp < ep) {
    const mid = parseInt((sp + ep) / 2);

    if (compare(list[mid], key)) {
    } else {
    }
  }
}

function countByRange(list, lower, upper, len) {
  const upperIdx = upperBound(list, upper, len);
  const lowerIdx = lowerBound(list, lower, len);

  return upperIdx - lowerIdx;
}

function solution(words, queries) {
  const answer = [];
  const len = words.length;

  for (let word of words) {
    const wLen = word.length;
    const reverseWord = word.split('').reverse().join('');

    arr[wLen].push(word);
    reverseArr[wLen].push(reverseWord);
  }

  for (let i = 0; i < 10; i++) {
    arr[i].sort();
    reverseArr[i].sort();
  }

  for (let query of queries) {
    const qLen = query.length;

    const res = countByRange(
      arr[qLen],
      query.replace(/\?/g, 'a'),
      query.replace(/\?/g, 'z'),
      len
    );

    answer.push(res);
  }
}

const arr = Array.from(Array(10), () => []);
const reverseArr = Array.from(Array(10), () => []);

const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', 'fr???', 'fro???', 'pro?'];
// ['fro??', '????o', 'fr???', 'fro???', 'pro?'];

solution(words, queries);
