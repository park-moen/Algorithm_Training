const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStrea,
    crlfDelay: Infinity,
  });
  // Note: 모든 CR LF의 인스턴스를 인식하기 위해 crlfDelay 옵션을 사용한다.
  // single line break로서 input.txt 안의 ('\r\n')

  for await (const line of rl) {
    // input.txt의 각 줄은 'line'으로서 사용할 수 있다.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();
