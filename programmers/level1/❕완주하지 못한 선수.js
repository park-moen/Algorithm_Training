/**
 *
 * @param {string[]} participant
 * @param {string[]} completion
 */
function solution(participant, completion) {
  const completionMap = new Map();
  completion.forEach(person =>
    completionMap.set(person, (completionMap.get(person) || 0) + 1)
  );

  for (const person of participant) {
    const count = completionMap.get(person) || 0;

    if (count === 0) {
      return person;
    }

    completionMap.set(person, count - 1);
  }
}

/**
 *
 * @param {string[]} participant
 * @param {string[]} completion
 */
function secondSolution(participant, completion) {
  const completionMap = new Map();
  completion.forEach(person =>
    completionMap.set(person, (completionMap.get(person) || 0) + 1)
  );

  return participant.find(person => {
    const count = completionMap.get(person) || 0;
    completionMap.set(person, count - 1);

    return count === 0;
  });
}

/**
 *
 * @param {string[]} participant
 * @param {string[]} completion
 */
function thirdSolution(participant, completion) {
  const completionMap = {};

  completion.forEach(
    person => (completionMap[person] = (completionMap[person] || 0) + 1)
  );

  return participant.find(person => {
    const count = completionMap[person] || 0;
    completionMap[person] = count - 1;

    return count === 0;
  });
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

// solution(participant, completion);
// secondSolution(participant, completion);
thirdSolution(participant, completion);
