window.onload = function() {
  let button = document.querySelector('.add__item')
  button.onclick = function(event) {
    event.preventDefault()
    const item = document.querySelector('.item').value
    const listContent = document.querySelector('.list__content')
    console.log(item)

    listContent.appendChild(addItem(item))
  }
}

const addItem = (value) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <p>${value}</p>
  <button>Task Complete</button>
  `
  return newItem
}