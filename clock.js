const newTime = new Date().toLocaleTimeString()

console.log(newTime);



const clock = document.getElementById("clock");
console.log(clock);

clock.appendChild(newTime)