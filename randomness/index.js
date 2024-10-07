async function randomness() {
  return getRandomInteger(0, 5);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default randomness;