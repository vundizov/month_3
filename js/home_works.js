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

const blockChild = document.querySelector('.child_block');
let moveRight = 0;
let moveBottom = 0;
let moveLeft = 0;
let moveTop = 0;

function moveBlock() {
    if (moveRight < 448) {
        blockChild.style.left = `${moveRight}px`;
        moveRight++;
    } else if (moveRight >= 448 && moveBottom < 448) {
        blockChild.style.top = `${moveBottom}px`;
        moveBottom++;
    } else if (moveBottom >= 448 && moveLeft < 448) {
        blockChild.style.left = `${448 - moveLeft}px`;
        moveLeft++;
    } else if (moveLeft >= 448 && moveTop < 448) {
        blockChild.style.top = `${448 - moveTop}px`;
        moveTop++;
    }else if (moveTop >= 448 && moveRight < 448){
        blockChild.style.left = `${moveRight}px`;
        moveRight++;
    }

    setTimeout(moveBlock, 20);
}
moveBlock()

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const seconds = document.querySelector('#secondsS');

let second = 0;
let intervalStop = null;

start.addEventListener('click', buttonStart);

function buttonStart() {
    if (intervalStop === null) {
        intervalStop = setInterval(() => {
            second++;
            seconds.innerHTML = second;
        }, 1000);
    }
}

stop.addEventListener('click', stopButton);

function stopButton() {
    clearInterval(intervalStop);
    intervalStop = null;
}

reset.addEventListener('click', () => {
    clearInterval(intervalStop);
    intervalStop = null;
    second = 0;
    seconds.innerHTML = second;
});
