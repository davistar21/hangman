const wordss = ['happiness', 'sadness', 'sleep', 'school', 'lepidopterist'];
const words = [{
  word: 'happiness',
  hint: 'a happy feeling'
}, {
  word: 'france',
  hint: 'country in Europe'
}, {
  word: 'einstein',
  hint: 'revolutionary 19th century physicist'
}, {
  word: 'hibernation',
  hint: 'long sleep'
}, {
  word: 'library',
  hint: 'house of books'
}, {
  word: 'chess',
  hint: 'kings and queens, rooks and knights'
},  {
  word: 'house',
  hint: 'house'
},  {
  word: 'lake',
  hint: 'body of water surrounded by land'
},  {
  word: 'island',
  hint: 'area of land surrounded by water'
},  {
  word: 'nigeria',
  hint: 'giants of Africa'
}, {
  word: 'anime',
  hint: 'Japanese comics'
}]

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let emptyBoxes = document.querySelector('.empty-boxes');
let letterBoxes = document.querySelector('.letters');
let hintElem = document.querySelector('.hint');



const randomWord = (words[Math.floor(Math.random() * words.length)]).word
console.log(randomWord)
const arrayOfLetters = [];
for (const letter in randomWord){
  arrayOfLetters.push(randomWord[letter])
}
for (let i = 0; i < (randomWord.length)/2; i++){
  arrayOfLetters.push(abc[Math.floor(Math.random() * abc.length)])
}

(shuffleArray(arrayOfLetters)).map(letter => {
  letterBoxes.innerHTML += `<span draggable="true">${letter}</span>`
})
for (let i = 0; i < randomWord.length; i++){
  emptyBoxes.innerHTML += `<span></span>`
}
words.filter((word) => {
  if (word.word == randomWord){
    hintElem.innerHTML = `Hint: ${word.hint}`;
  }
})


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Return the shuffled array (optional)
}

let isDarkMode
document.querySelector('.dark-mode-button').addEventListener('click', () => {
  isDarkMode = document.body.classList.toggle('dark')
  console.log(isDarkMode)
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
})

isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
if (!isDarkMode) {
  document.body.classList.remove('dark')
} else {
  document.body.classList.add('dark')
}




document.querySelector('.more-hints-button').addEventListener('click', () => {
  document.querySelector('.action-buttons').classList.toggle('active')
})
