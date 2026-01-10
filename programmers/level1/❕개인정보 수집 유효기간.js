/**
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns
 */
function dateToDay(year, month, day) {
  return year * 12 * 28 + month * 28 + day;
}

/**
 *
 * @param {string} today
 * @param {string[]} terms
 * @param {string[]} privacies
 */
function solution(today, terms, privacies) {
  const todayToTime = dateToDay(...today.split('.').map(Number));
  const termsMap = {};

  for (const term of terms) {
    const [key, value] = term.split(' ');
    termsMap[key] = Number(value);
  }

  let result = [];

  privacies.forEach((privacy, idx) => {
    const [date, term] = privacy.split(' ');
    const currentDateToTime = dateToDay(...date.split('.').map(Number));
    const currentTerm = termsMap[term] * 28;

    if (currentDateToTime + currentTerm <= todayToTime) {
      result.push(idx + 1);
    }
  });

  return result.sort((a, b) => a - b);
}

const today = '2022.05.19';
const terms = ['A 6', 'B 12', 'C 3'];
const privacies = ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'];

console.log(solution(today, terms, privacies));
