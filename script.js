const addItem = () => {
  const listContent = document.querySelector('.list__content')
  const item = document.querySelector('.item').value

  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <h4>${item}</h4>
  <button onclick='removeItem()' class='remove__item'>Task Complete</button>
  `
  listContent.appendChild(newItem)

  clearText()
}

const removeItem = () => {
  const item = event.target.parentNode
  const parent = item.parentNode
  parent.removeChild(item)
}

const clearText = () => {
  document.querySelector('.item').value = ''
}