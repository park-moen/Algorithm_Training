function solution(n) {
  let index = 2;

  while (true) {
    if (n % index === 1) {
      return index;
    }

    index++;
  }
}

solution(12);
