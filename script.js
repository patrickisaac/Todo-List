window.addEventListener('load', function() {
  let addButton = document.querySelector('.add__item')
  addButton.onclick = (event) => {
    event.preventDefault()
    const listContent = document.querySelector('.list__content')
    const item = document.querySelector('.item').value
    listContent.appendChild(addItem(item))
  }
})

window.addEventListener('click', function() {
  let removeButton = document.querySelector('.remove__item')
  removeButton.onclick = (event) => {
    event.preventDefault()
    const listContent = document.querySelector('.list__content')
    const item = document.querySelector('.item').value
    listContent.parentNode.remove(addItem(item))
  }
})

const addItem = (value) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <h4>${value}</h4>
  <button class='remove__item'>Task Complete</button>
  `
  return newItem
}