let startTime;
let elapsedTime = 0;
let timerInterval;

function printTime() {
  let time = new Date(elapsedTime);
  document.getElementById('display').innerHTML = time.toISOString().substr(11, 8) + "." + time.getMilliseconds();
}

document.getElementById('start').addEventListener('click', function() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    printTime();
  }, 10);
});

document.getElementById('pause').addEventListener('click', function() {
  clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  printTime();
});

document.getElementById('lap').addEventListener('click', function() {
  let lapTime = new Date(elapsedTime);
  console.log("Lap Time: " + lapTime.toISOString().substr(11, 8) + "." + lapTime.getMilliseconds());
});