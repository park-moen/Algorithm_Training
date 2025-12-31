/**
 *
 * @param {array []} lottos
 * @param {array []} win_nums
 */

function solution(lottos, win_nums) {
  const winSet = new Set(win_nums);
  const zeros = lottos.filter(num => num === 0).length;
  const matched = lottos.filter(num => winSet.has(num)).length;

  const getRank = cnt => [6, 6, 5, 4, 3, 2, 1][cnt];

  return [getRank(matched + zeros), getRank(matched)];
}

/**
 *
 * @param {array []} lottos
 * @param {array []} win_nums
 */

function secondSolution(lottos, win_nums) {
  const winSet = new Set(win_nums);

  let zeros = 0;
  let matched = 0;

  for (const num of lottos) {
    if (num === 0) {
      zeros++;
    } else if (winSet.has(num)) {
      matched++;
    }
  }

  const getRank = count => (count >= 2 ? 7 - count : 6);

  return [getRank(matched + zeros), getRank(matched)];
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_numbs = [31, 10, 45, 1, 6, 19];

// const lottos = [0, 0, 0, 0, 0, 0];
// const win_numbs = [38, 19, 20, 40, 15, 25];

// const lottos = [45, 4, 35, 20, 3, 9];
// const win_numbs = [20, 9, 3, 45, 4, 35];

solution(lottos, win_numbs);
