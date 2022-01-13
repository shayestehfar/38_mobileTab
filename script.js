const contents = document.querySelectorAll('.content')
const items = document.querySelectorAll('nav ul li')

items.forEach((item, idx) => {
  item.addEventListener('click', () => {
    items.forEach((item) => item.classList.remove('active'))
    contents.forEach((content) => {
      content.classList.remove('show')
    })
    contents[idx].classList.add('show')
    item.classList.add('active')
  })
})
