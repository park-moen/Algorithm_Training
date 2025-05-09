function solution(files) {
  const answer = [];

  files.forEach(file => {
    const splitFile = file.split('');
    const part = ['', '', ''];

    splitFile.forEach(word => {
      const isNumber = !Number.isNaN(parseInt(word));

      if (!isNumber && !part[1].length) {
        part[0] += word;
      } else if (isNumber && !part[2].length) {
        part[1] += word;
      } else {
        part[2] += word;
      }
    });

    answer.push(part);
  });

  answer.sort((a, b) => {
    const first = a[0].toUpperCase();
    const last = b[0].toUpperCase();

    if (first > last) {
      return 1;
    } else if (first < last) {
      return -1;
    } else {
      return parseInt(a[1]) - parseInt(b[1]);
    }
  });

  return answer.map(arr => arr.join(''));
}

function solution2(files) {
  const copyFiles = [...files];

  copyFiles.sort((a, b) => {
    const firstHead = a.match(/^\D+/)[0].toUpperCase();
    const lastHead = b.match(/^\D+/)[0].toUpperCase();

    if (firstHead > lastHead) {
      return 1;
    } else if (firstHead < lastHead) {
      return -1;
    }

    const firstNumber = Number(a.match(/\d+/)[0]);
    const lastNumber = Number(b.match(/\d+/)[0]);

    return firstNumber - lastNumber;
  });

  return copyFiles;
}

const files = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];

console.log(solution(files));
console.log(solution2(files));
