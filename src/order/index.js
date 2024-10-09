function order(x) {
  let y = 'c';
  if (x == 'a') y = 'b';
  if (x == 'b') y = 'a';
  console.log(y);
  return y;
}

order(process.argv[2]);

export default order;
