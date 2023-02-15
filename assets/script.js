
// Get a reference to the button element
const myButton = document.getElementById('search');

// Define a function to display the message and redirect to another page
function showMessageAndRedirect() {
  // Display the message
  alert('Sorry guys I ran out of API key usage and im not paying for something you can do yourself.');
  // Wait for 2 seconds before redirecting to another page
  setTimeout(function() {
    window.location.href = 'https://www.expedia.com/';
  }, 2000);
}

// Add an event listener to the button that triggers the showMessageAndRedirect function
myButton.addEventListener('click', showMessageAndRedirect);


// Set the countdown target date to August 31st of the current year
const targetDate = new Date(new Date().getFullYear(), 7, 31);

// Get a reference to the HTML element that will display the countdown timer
const countdownTimer = document.getElementById('countdown-timer');

// Define a function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference between the current date and the target date
  const diff = targetDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown timer HTML element with the remaining time
  countdownTimer.innerHTML = `Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  // If the target date has already passed, stop the countdown
  if (diff < 0) {
    clearInterval(intervalId);
    countdownTimer.innerHTML = 'Countdown expired!';
  }
}

// Update the countdown timer immediately when the page loads
updateCountdown();

// Update the countdown timer every second
const intervalId = setInterval(updateCountdown, 1000);
