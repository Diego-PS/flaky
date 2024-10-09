async function wait() {
  const response = await fetch("https://dogapi.dog/api/v2/facts");
  const { data } = await response.json();
  console.log(data[0]);
  return data[0];
}

wait();

export default wait;