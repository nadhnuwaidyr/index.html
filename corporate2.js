function markFavourite(){

}
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

//type
const storageInput = document.querySelector('.storage');
const type = document.querySelector('.type');
const button = document.querySelector('.button');
if(storageInput){
  type.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  type.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', type.textContent)
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

//rsvp
const storageInput = document.querySelector('.storage');
const theme = document.querySelector('.rsvp');
const button = document.querySelector('.button');
if(storageInput){
  rsvp.textContent = storedInput
}
storageInput.addEventListener('input',letter => {
  rsvp.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', rsvp.textContent)
}
button.addEventListener('click', saveToLocalStorage)
