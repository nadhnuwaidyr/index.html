function markFavourite(){

}
//Join
const storageInput = document.querySelector('.storage');
const join = document.querySelector('.join');
const button = document.querySelector('.button');
if(storageInput){
  join.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  join.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', join.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//name
const storageInput = document.querySelector('.storage');
const name = document.querySelector('.name');
const button = document.querySelector('.button');
if(storageInput){
  name.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  name.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', name.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//party
const storageInput = document.querySelector('.storage');
const party = document.querySelector('.party');
const button = document.querySelector('.button');
if(storageInput){
  party.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  party.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', party.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//Date
const storageInput = document.querySelector('.storage');
const date = document.querySelector('.date');
const button = document.querySelector('.button');
if(storageInput){
  date.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  date.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', date.textContent)
}
button.addEventListener('click', saveToLocalStorage)

//Address
const storageInput = document.querySelector('.storage');
const address = document.querySelector('.address');
const button = document.querySelector('.button');
if(storageInput){
  address.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  address.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', address.textContent)
}
button.addEventListener('click', saveToLocalStorage)
