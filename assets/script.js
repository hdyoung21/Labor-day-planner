
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
