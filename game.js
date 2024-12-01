let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

guessButton.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the right number!';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }
    guessInput.value = '';
});