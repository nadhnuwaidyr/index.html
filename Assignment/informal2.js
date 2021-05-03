function markFavourite(){

}
//text
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
if(storageInput){
  text.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  text.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//text2
const storageInput = document.querySelector('.storage');
const text2 = document.querySelector('.text2');
const button = document.querySelector('.button');
if(storageInput){
  text2.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  text2.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text2.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//text3
const storageInput = document.querySelector('.storage');
const text3 = document.querySelector('.text3');
const button = document.querySelector('.button');
if(storageInput){
  text3.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  text3.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text3.textContent)
}
button.addEventListener('click', saveToLocalStorage)
