
// Get the button and message elements
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add click event to the button
button.addEventListener('click', function() {
    message.textContent = '🎉 Hello! You clicked the button! Welcome to JavaScript! 🎉';
});