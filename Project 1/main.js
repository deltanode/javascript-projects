let defaultForm = document.getElementById("defaultForm")
let todoInput = document.getElementById("todoInput")
let createList = document.getElementById("createList")

defaultForm.addEventListener("submit", (formEvent) => {
  formEvent.preventDefault()
  createListItems(todoInput.value)
})

function createListItems(listItems){
  let listHTML = `<li> ${listItems} <button>Delete</button></li>`
  createList.insertAdjacentHTML("beforeend",listHTML)  
}
