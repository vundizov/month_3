// PHONE VALIDATOR
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT'
        phoneResult.style.color = 'red'
    }
}

//TAB SLIDER
const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)

// CONVERTER
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element,target,target2,isCurrency)=> {
    element.oninput = ()=> {
        const request = new XMLHttpRequest()
        request.open("GET","../data/converter.json")
        request.setRequestHeader("Contend-type","application/json")
        request.send()


        request.onload = ()=> {
            const response = JSON.parse(request.response)
            if (isCurrency === 'som'){
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            }
            else if (isCurrency === 'usd'){
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * response.eur / response.usd).toFixed(2)
            }
            else if (isCurrency === 'eur'){
                target.value = (element.value * response.eur).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
            }
            if (element.value === ''|| target.value === '0') {
                target.value = '';
                target2.value = '';
            }
        }
    }
}
converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')

// CARD SWITCHER
const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let count = 1

// btnNext.onclick = ()=> {
//     count++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//             <p>${data.title}</p>
//             <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
//             <span>${data.id}</span>
//             `
//
//         })
// }
const switcher = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
                <p>${data.title}</p>
                <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
                `
    } catch (e){
        console.log(e)
    }

}
switcher()

    let next = ()=> {
        if (count === 200) {
            count = 1
        } else {
            count++
        }
        switcher()
    }
    let prev = ()=> {
        if (count === 1) {
            count = 200
        } else {
            count--
        }
        switcher()
    }
btnNext.onclick = next
btnPrev.onclick = prev
const fetchConsole = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = response.json()
    console.log(data)
}
fetchConsole()
//WEATHER
const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

//API HELPERS

const DEFAULT_URL = `http://api.openweathermap.org/data/2.5/weather`
const API_KEY = `e417df62e04d3b1b111abeab19cea714`

// optional chaining - ?

cityName.oninput = async (event)=> {
    try {
        const response = await fetch(`${DEFAULT_URL}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()

        city.innerHTML = data?.name ? data?.name : 'город не найден'
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
    }
    catch (error) {
        console.log(error)
    }

}