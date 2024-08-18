// script.js
function displayRandomNumber() {
    const randomNumber = generate_random_number(); // Call the Python function
    document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
}
