const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9.%+-]+@gmail\.com$/
gmailButton.onclick = ()=> {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'good'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'not good'
        gmailResult.style.color = 'red'
    }
}


let move = 0
function moveBlock() {
    const blockChild = document.querySelector('.child_block')
    blockChild.style.left = `${move}px`
    move++
    if (move <= 450){
        setTimeout(moveBlock,20)
    }
}
moveBlock()
