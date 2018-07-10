export const getDurationTrack = (url, id) => {
  const audio = new Audio(url);
  audio.addEventListener('loadedmetadata', () => {
    if (document.getElementById(id)) {
      console.log('ddddddd');
      document.getElementById(id).textContent = formatSeconds(
        Math.floor(audio.duration),
      );
    }
  });
};

const countZero = (num, size) => {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

export const formatSeconds = num => {
  const minutes = countZero(Math.floor(num / 60), 2);
  const seconds = countZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};

export const formatVolume = volume => {
  const currentVolume = Math.floor(volume * 100);
  return `${currentVolume}%`;
};
