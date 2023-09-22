// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModel = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModel = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModel()
    }
}
modalTrigger.onclick = () => openModel()
modalCloseButton.onclick = () => closeModel()

const position = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ){
      openModel()
      window.removeEventListener('scroll', position)
  }
}
window.addEventListener('scroll', position)

// setTimeout(()=> openModel(), 10000)

//POST DATA
