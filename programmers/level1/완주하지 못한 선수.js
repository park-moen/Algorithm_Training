function solution(participant, completion) {
  const hash = new Map();

  for (const player of completion) {
    if (hash.has(player)) {
      hash.set(player, hash.get(player) + 1);
    } else {
      hash.set(player, 1);
    }
  }

  for (const player of participant) {
    if (hash.get(player) === 0 || !hash.has(player)) {
      return player;
    }

    if (hash.get(player) > 0) {
      hash.set(player, hash.get(player) - 1);
    }
  }
}

const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];

console.log(solution(participant, completion));
