function solution(babbling) {
  const specificBabbling = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((possible, babble) => {
    const isRepeat = specificBabbling.some(specifics =>
      babble.includes(specifics.repeat(2))
    );

    if (isRepeat) {
      return possible;
    }

    specificBabbling.forEach(specifics => {
      babble = babble.split(specifics).join(' ').trim();
    });

    if (babble.length !== 0) {
      return possible;
    }

    // ! 왜 possible++은 올바른 정답을 반환하지 않고 ++possible은 올바른 정답을 반환하는가?
    return ++possible;
  }, 0);
}

function secondSolution(babbling) {
  return babbling.filter(babble => {
    if (/(aya|ye|woo|ma)\1/.test(babble)) {
      return false;
    }

    return babble.replace(/aya|ye|woo|ma/g, '') === '';
  }).length;
}

const babbling = ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'];
console.log(solution(babbling));
console.log(secondSolution(babbling));
