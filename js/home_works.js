// MOVE BLOCK

const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 448) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionY <= 449 && positionX >= 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()
