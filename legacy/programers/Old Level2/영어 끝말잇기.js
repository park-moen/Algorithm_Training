function solution(n, words) {
  let roof = 0;

  for (let i = 0; i < words.length; i++) {
    if (words.indexOf(words[i]) !== i) {
      const idx = (i + 1) % n === 0 ? n : (i + 1) % n;

      return [idx, Math.ceil((roof + 1) / n)];
    }

    if (words.length - 1 === i) break;

    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      i += 1;
      roof += 1;
      const idx = (i + 1) % n === 0 ? n : (i + 1) % n;

      return [idx, Math.ceil((roof + 1) / n)];
    }

    roof++;
  }

  return [0, 0];
}

const words1 = [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
];
const words2 = [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
];
const words3 = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
const words4 = ['land', 'dream', 'mom', 'mom', 'ror'];
const words5 = ['qwe', 'eqwe', 'eqwe'];

const n = 2;

console.log(solution(n, words5));

// 다른 사람 풀이

// function solution(n, words) {
//   let before = words[0];
//   let turn = 1;

//   for (let i = 1; i < words.length; i++) {
//     const player = (i % n) + 1;

//     if (before.slice(-1) !== words[i][0]) return [player, turn];
//     if (words.indexOf(words[i]) !== i) return [player, turn];

//     before = words[i];

//     if (player === n) turn += 1;
//   }

//   return [0, 0];
// }
