'use strict';

const predictedNumber = document.querySelector('.guess'),
    checkBtn = document.querySelector('.check'),
    againBtn = document.querySelector('.again'),
    message = document.querySelector('.message'),
    correctNumber = document.querySelector('.number');

let randomNumber = Math.round(Math.random() * 20 + 1),
    score = 20,
    highscore = 0;

//кнопка "Проверка!"
checkBtn.addEventListener('click', guessTheNumber);

//кнопка "Снова!"
againBtn.addEventListener('click', function () {
    score = 20;
    randomNumber = Math.round(Math.random() * 20 + 1);
    message.textContent = 'Начните угадывать...';
    document.querySelector('.score').textContent = score;
    correctNumber.textContent = '?';
    document.querySelector('body').style.background = '';
    predictedNumber.textContent = '';
    checkBtn.addEventListener('click', guessTheNumber);
})

function guessTheNumber() {
    const num = +predictedNumber.value;
    //если пользователь не ввел число
    if (!num && score > 0) {
        message.textContent = 'Вы не ввели число...';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (num > randomNumber && score > 0) {
        message.textContent = 'Слишком много!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (num < randomNumber && score > 0) {
        message.textContent = 'Слишком мало!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (score === 0) {
        message.textContent = 'Вы проиграли!';
        document.querySelector('body').style.background = '#c92e2e';
        checkBtn.removeEventListener('click', guessTheNumber);

    } else {
        message.textContent = 'Вы угадали!';
        correctNumber.textContent = `${num}`;
        document.querySelector('body').style.background = '#60b347';
        checkBtn.removeEventListener('click', guessTheNumber);
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    };
}


