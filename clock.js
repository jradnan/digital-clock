setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const mint = date.getMinutes();
  const second = date.getSeconds();
  const clock = document.getElementById("clock");
  clock.innerHTML = `${hours}:${mint}:${second}`;
  return clock;
}, 1000);
