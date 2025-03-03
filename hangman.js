import { abc, words } from "./data/words.js";
import { handleDarkMode } from "./utils/dark-mode.js";
import { shuffleArray } from "./utils/shuffle-array.js";

handleDarkMode()  

document.querySelector('.more-hints-button').addEventListener('click', () => {
  document.querySelector('.action-buttons').classList.toggle('active')
})


let emptyBoxes = document.querySelector('.empty-boxes');
let letterBoxes = document.querySelector('.letters');
let hintElem = document.querySelector('.hint');



const randomWord = (words[Math.floor(Math.random() * words.length)]).word
const arrayOfLetters = [];

for (const letter in randomWord){
  arrayOfLetters.push(randomWord[letter])
}

for (let i = 0; i < (randomWord.length)/2; i++){
  arrayOfLetters.push(abc[Math.floor(Math.random() * abc.length)])
}

(shuffleArray(arrayOfLetters)).map((letter, index) => {
  letterBoxes.innerHTML += `<span draggable="true" id="draggable-letter draggable-letter-${index}">${letter}</span>`
})

for (let i = 0; i < randomWord.length; i++){
  emptyBoxes.innerHTML += `<span id='drop-zone drop-zone-${i}'></span>`
}

words.filter((word) => {
  if (word.word == randomWord){
    hintElem.innerHTML = `Hint: ${word.hint}`;
  }
})

const letterTiles = emptyBoxes.querySelectorAll('span');
letterTiles.forEach(tile => {
  tile.addEventListener('dragstart', dragStart);
  tile.addEventListener('dragend', dragEnd)
})

const dropArea = letterBoxes.querySelectorAll('span');
console.log(dropArea)
dropArea.forEach(area => {
  area.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  area.addEventListener('dragenter', dragEnter)
  area.addEventListener('dragleave', dragLeave)
  area.addEventListener('drop', drop)
})

function dragStart (e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() =>{
    e.target.classList.add('hide');
  }, 0)
}
function dragEnd (e) {
  e.target.classList.remove('hide');
}
function dragOver (e) {
  e.preventDefault();
}
function dragEnter (e) {
  e.preventDefault();
  // area.classList.add('hover');
}
function dragLeave () {
  // area.classList.remove('hover');
}
function drop (e) {
  e.preventDefault();
  // area.classList.remove('hover');

  const droppedLetterId = e.dataTransfer.getData('text/plain');
  const droppedLetter = document.getElementById(droppedLetterId);
  // area.innerHTML = droppedLetter.innerHTML;
}