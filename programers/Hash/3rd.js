function solution(genres, plays) {
  const answer = [];
  const genreCountMap = new Map();
  const genreMap = new Map();

  genres.forEach((item, index) => {
    if (genreCountMap.has(item)) {
      genreCountMap.set(item, genreCountMap.get(item) + plays[index]);
      genreMap.set(item, [
        ...genreMap.get(item),
        { index: index, play: plays[index] },
      ]);
    } else {
      genreCountMap.set(item, plays[index]);
      genreMap.set(item, [{ index: index, play: plays[index] }]);
    }
  });

  console.log(genreMap, genreCountMap);

  let orderGenre = [...genreCountMap].sort((a, b) => b[1] - a[1]);

  console.log(orderGenre);

  orderGenre.forEach(item => {
    let targetIndex = genreMap
      .get(item[0])
      .sort((a, b) => b.play - a.play)
      .map(item => item.index)
      .slice(0, 2);

    answer.push(...targetIndex);
  });

  return answer;
}

const arr1 = ['classic', 'pop', 'classic', 'classic', 'pop'];
const arr2 = [500, 600, 150, 800, 2500];

console.log(solution(arr1, arr2));
