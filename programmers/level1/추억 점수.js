function solution(name, yearning, photo) {
  const hash = new Map();

  name.forEach((value, idx) => {
    hash.set(value, yearning[idx]);
  });

  return photo.map(nameOfPhoto =>
    nameOfPhoto.reduce((acc, cur) => (acc += hash.has(cur) ? hash.get(cur) : 0), 0)
  );
}

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

console.log(solution(name, yearning, photo));
