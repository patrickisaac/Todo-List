window.onload = function() {
  let button = document.querySelector('.add__item')
  button.onclick = function(event) {
    event.preventDefault()
    const item = document.querySelector('.item').value
    console.log(item)

    item.appendChild(addItem(item))
  }
}

const addItem = (value) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <p>${value}</p>
  `
  return newItem
}