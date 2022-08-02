var input = document.querySelector('#input')
var inpu = document.querySelector('#inpu')
var legend = document.querySelector('.legend')


function call(){
        input.addEventListener('mouseover', () => {
            input.placeholder = ""
            input.style.textAlign = "left"
            inpu.style.textAlign = "left"
            inpu.style.padding = "5px"
            legend.style.display = "block"
        })
    
        input.addEventListener('mouseout', () => {
            input.placeholder = 'Email'
            input.style.textAlign = "center"
            legend.style.display = "none"  
        })
}

var menu = document.querySelector('#menu')
var times = document.querySelector('#times')
var nav = document.querySelector('.nav')
         

menu.addEventListener('click', () => {
    nav.classList.add('show')
    nav.classList.remove('hide')
    menu.style.display = 'none'
    times.style.display = 'block'
})
times.addEventListener('click', () => {
    nav.classList.add('hide')
    nav.classList.remove('show')
    menu.style.display = 'block'
    times.style.display = 'none'
})


call()