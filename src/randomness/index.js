function randomness() {
  const x = getRandomInteger(0, 5);
  console.log(x);
  return x;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

randomness();

export default randomness;