// Get the current hour
const currentHour = new Date().getHours();

// Determine the greeting based on the time
let greeting;
if (currentHour < 12) {
  greeting = "Good Morning!";
} else if (currentHour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

// Display the greeting in the console
console.log(greeting);

// Optionally, display it on a webpage
document.body.innerHTML = `<h1>${greeting}</h1>`;

