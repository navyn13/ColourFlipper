const colours = ['Green', 'Red', 'Purple', 'Pink', 'Yellow', 'Blue', 'Orange', 'Violet', 'Grey', 'Olive']
const button = document.querySelector('.btn')
const colour = document.querySelector('.colour')
const body = document.querySelector('body')
button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * colours.length)
    body.style.backgroundColor = colours[random]
    colour.textContent = colours[random]
    button.style.backgroundColor = colours[random]
    colour.style.color = colours[random]
})