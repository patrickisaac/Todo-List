window.addEventListener('load', function() {
  let addButton = document.querySelector('.add__item')
  addButton.onclick = (event) => {
    event.preventDefault()
    const listContent = document.querySelector('.list__content')
    const item = document.querySelector('.item').value
    listContent.appendChild(addItem(item))
    listContent.insertBefore(addItem, item)
  }
})

const addItem = (value) => {
  document.querySelector('.item').value = ''
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <h4>${value}</h4>
  <button onclick='removeItem()' class='remove__item'>Task Complete</button>
  `
  return newItem
}

const removeItem = () => {
  const item = event.target.parentNode
  const parent = item.parentNode
  parent.removeChild(item)
}