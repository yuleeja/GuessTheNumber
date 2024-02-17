const predictedNumber = document.querySelector('input').value,
      checkBtn = document.querySelector('.check'),
      againBtn = document.querySelector('.again'),
      score = 20;

let correctNumber = document.querySelector('.number').value;

correctNumber = Math.round(Math.random() * 20);
console.log(correctNumber);

/* if (predictedNumber < correctNumber) {
    console.log('Слишком мало!');
} else if (predictedNumber > correctNumber) {
    console.log('Слишком много!');
} else {
    console.log('Вы угадали!');
} */

checkBtn,addEventListener('click', function(){
    console.log(predictedNumber);
})