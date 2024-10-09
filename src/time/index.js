function time() {
  const date = (new Date()).getTime();
  const parity = date % 2 ? "even" : "odd";
  console.log(parity);
  return parity;
}

time();

export default time;