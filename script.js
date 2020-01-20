window.onload = function() {
    const randomNumber = Math.floor(Math.random() * 10 + 1).toString();
    let guessedNumber = prompt('Guess a number between 1-10:');
    let attempts = 1;

    while (attempts < 3) {
        if (randomNumber !== guessedNumber) {
            guessedNumber = prompt('Wrong!!! Try Again!');
            attempts += 1;
            if (randomNumber === guessedNumber) {
                return alert(`Success, the number was ${guessedNumber}! Attempts: ${attempts}`);
            }
        } 
    }
    return alert('Sorry, you faild to guess the number in three attempts');
}

playAgain = document.getElementById('play-again')

playAgain.addEventListener('click', function() {
    return location.reload()
});
