import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

export default function handleClick(event, check=true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id //dataset.id get the data-id method number from the HTML

    // Set action in the modal form
    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    // Chance the modal html
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que você quer ${text.toLowerCase()} esta pergunta?` : `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    // Open modal
    modal.open()
}
