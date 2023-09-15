
// buttons[0].style.background = 'aqua'
// console.dir(buttons[0].classList)
// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')

const  buttons = document.querySelectorAll('button')
const btnBlock = document.querySelector('.btn-block')



// buttons.forEach(buttonElement => {
//     buttonElement.addEventListener('click', (event) => {

    // })
// })
const newButton = document.createElement('button')
btnBlock.append(newButton)
btnBlock.onclick =  event=> {
    if (event.target.tagName.toLowerCase() === 'button') {
        event.target.onclick = () => {
            if (event.target.classList.contains('red')){
                event.target.classList.remove('red')
            }else {
                event.target.classList.add('red')
            }
        }
    }
}