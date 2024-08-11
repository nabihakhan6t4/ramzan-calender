// Set the date for the beginning of Ramadan
var ramadanDate = new Date("February 28, 2025 00:00:00").getTime(); // Convert the date to milliseconds

// Start a timer that runs every second
setInterval(function () {
  // Get the current date and time in milliseconds
  var now = new Date().getTime();
  
  // Calculate the time difference between Ramadan date and now
  var distance = ramadanDate - now;

  // Calculate the number of days remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  
  // Calculate the number of hours remaining
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Convert remaining milliseconds to hours
  
  // Calculate the number of minutes remaining
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Convert remaining milliseconds to minutes
  
  // Calculate the number of seconds remaining
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Convert remaining milliseconds to seconds

  // Display the calculated days in the HTML element with id 'days'
  document.getElementById("days").innerText = days; 
  
  // Display the calculated hours in the HTML element with id 'hours'
  document.getElementById("hours").innerText = hours; 
  
  // Display the calculated minutes in the HTML element with id 'minutes'
  document.getElementById("minutes").innerText = minutes; 
  
  // Display the calculated seconds in the HTML element with id 'seconds'
  document.getElementById("seconds").innerText = seconds; 

  // Play ticking sound every second (to create a timer effect)
  document.getElementById("tickAudio").play(); 

  // Check if the countdown has finished
  if (distance < 0) {
    // Stop the timer
    clearInterval(intervalId); 
    
    // Display a message that Ramadan has started
    document.getElementById("countdown").innerHTML = "Ramadan has started!"; 
    
    // Play sound when countdown ends (to notify the user)
    document.getElementById("countdownAudio").play(); 
  }
}, 1000); // Repeat every 1000 milliseconds (1 second)

// Example of creating a simple calendar for demonstration purposes
for (let i = 1; i <= 30; i++) {
  // Create a new div element for each day
  let day = document.createElement('div'); 
  
  // Set the class name for styling purposes
  day.className = 'day'; 
  
  // Set the text of the div to the day number
  day.innerText = i; 
  
  // Append the day div to the HTML element with id 'calendar'
  document.getElementById('calendar').appendChild(day); 
}
