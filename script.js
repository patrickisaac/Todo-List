window.onload = function() {
  let button = document.querySelector('.add__item')
  button.onclick = function(event) {
    event.preventDefault()
    const listContent = document.querySelector('.list__content')
    const item = document.querySelector('.item').value
    listContent.appendChild(addItem(item))
  }
}

const addItem = (value) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <h4>${value}</h4>
  <button class='remove__item'>Task Complete</button>
  `
  return newItem
}


// Removing Item
const removeItem = () => {
  let button = document.querySelector('.remove__item')
  button.onclick = function(event) {
    event.preventDefault()
    const listContent = document.querySelector('.list__content')
    listContent.removeChild()
  }
}