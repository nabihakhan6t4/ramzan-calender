var ramadanDate = new Date("February 28, 2025 00:00:00").getTime();

setInterval(function () {
  var now = new Date().getTime();
  var distance = ramadanDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Play ticking sound every second
  document.getElementById("tickAudio").play();

  // Play sound when countdown ends
  if (distance < 0) {
    clearInterval(intervalId);
    document.getElementById("countdown").innerHTML = "Ramadan has started!";
    document.getElementById("countdownAudio").play();
  }
}, 1000);

// Example of creating a calendar (for demonstration purposes)
for (let i = 1; i <= 30; i++) {
  let day = document.createElement('div');
  day.className = 'day';
  day.innerText = i;
  document.getElementById('calendar').appendChild(day);
}
