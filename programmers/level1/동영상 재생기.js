function toSeconds(timeStr) {
  const [mm, ss] = timeStr.split(':').map(Number);

  return mm * 60 + ss;
}

function toTimeString(seconds) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return `${mm}:${ss}`;
}

function applyOpeningSkip(now, opStart, opEnd) {
  return now >= opStart && now <= opEnd ? opEnd : now;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const videoLenSec = toSeconds(video_len);
  const opStartSec = toSeconds(op_start);
  const opEndSec = toSeconds(op_end);

  let current = toSeconds(pos);

  if (current >= videoLenSec) {
    return video_len;
  }

  current = applyOpeningSkip(current, opStartSec, opEndSec);

  for (const cmd of commands) {
    if (cmd === 'prev') {
      current = Math.max(0, current - 10);
      current = applyOpeningSkip(current, opStartSec, opEndSec);
    }

    if (cmd === 'next') {
      current = Math.min(videoLenSec, current + 10);
      current = applyOpeningSkip(current, opStartSec, opEndSec);
    }
  }

  return toTimeString(current);
}

const value_len = '00:20';
const pos = '00:09';
const op_start = '00:10';
const op_end = '00:15';
const commands = ['next'];

console.log(solution(value_len, pos, op_start, op_end, commands));
