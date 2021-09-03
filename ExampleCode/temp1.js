const theSameNameOfNumber = list => {
  const extractArr = [];
  const extractArrIndex = [];
  const sortIndexNum = Array.from({ length: list.length }, (_, i) => i);

  list.forEach((el, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === index) return;
      if (el.equipmentName === arr[i].equipmentName && el.size === arr[i].size) {
        extractArr.push({
          equipmentName: el.equipmentName,
          size: el.size,
          rentNumber: el.rentNumber + arr[i].rentNumber,
        });
        extractArrIndex.push(index, i);
      }
    }
  });

  const unextractIndex = sortIndexNum.filter(val => !extractArrIndex.includes(val));

  for (let val of unextractIndex) {
    extractArr.push(list[val]);
  }

  return extractArr;
};

const arr = [
  { equipmentName: '오리발', size: '270', rentNumber: 3 },
  { equipmentName: '오리발', size: '230', rentNumber: 1 },
  { equipmentName: '슈트', size: 'S', rentNumber: 2 },
  { equipmentName: '수경', size: 'M', rentNumber: 1 },
  { equipmentName: '수경', size: 'M', rentNumber: 1 },
  { equipmentName: '수경', size: 'L', rentNumber: 1 },
  { equipmentName: '슈트', size: 'S', rentNumber: 3 },
  { equipmentName: '오리발', size: '270', rentNumber: 4 },
];

console.log(theSameNameOfNumber(arr));
