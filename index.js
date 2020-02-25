function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(function(response) {
  return response.json();
  })
  .then(function(json){
    renderBooks(json);
    renderFifthBook(json);
  })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function renderFifthBook(json) {
  const main = document.querySelector('main')
  const h1 = document.createElement('h1')
  h1.innerText = `Book Five: ${json[4]["name"]}`
  main.appendChild(h1)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
