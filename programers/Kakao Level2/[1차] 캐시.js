function solution(cacheSize, cities) {
  const CACHEHIT = 1;
  const CACHEMISS = 5;
  const LRU = [];

  let time = 0;

  if (cacheSize < 1) {
    return cities.length * CACHEMISS;
  }

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toUpperCase();

    if (LRU.indexOf(city) !== -1) {
      LRU.splice(LRU.indexOf(city), 1);
      LRU.push(city);
      time += CACHEHIT;
    } else {
      if (LRU.length === cacheSize) {
        LRU.shift();
        LRU.push(city);
      } else {
        LRU.push(city);
      }

      time += CACHEMISS;
    }
  }

  return time;
}

const cacheSize = 2;
const cities = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];

solution(cacheSize, cities);
