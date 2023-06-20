const colours = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
const button = document.querySelector('.btn')
const colour = document.querySelector('.colour')
const body = document.querySelector('body')
button.addEventListener('click', function () {
    let temp='#'
   for(let i=0; i<6; i++){
    let random = Math.floor(Math.random() * colours.length)
    temp+=colours[random]
   }
   body.style.backgroundColor=temp
   colour.textContent=temp
   colour.style.color=temp
   
})
