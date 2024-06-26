// script.js
document.addEventListener('DOMContentLoaded', function() {
    // The text you want to display on the web page
    const textToDisplay = 'This text is inserted by JavaScript!';

    // Get the HTML element where the text will be displayed
    const textContainer = document.getElementById('text-container');

    // Insert the text into the HTML element
    textContainer.textContent = textToDisplay;
});