function solution(participant, completion) {
  var answer;
  const Hash = new Map();

  for (let val of participant) {
    if (Hash.has(val)) Hash.set(val, Hash.get(val) + 1);
    else Hash.set(val, 1);
  }

  for (let val of completion) {
    if (Hash.has(val)) Hash.set(val, Hash.get(val) - 1);
    if (Hash.get(val) === 0) Hash.delete(val);
  }

  answer = [...Hash.keys()][0];

  return answer;
}

const arr1 = ['leo', 'kiki', 'eden'];
const arr2 = ['eden', 'kiki'];

console.log(solution(arr1, arr2));
