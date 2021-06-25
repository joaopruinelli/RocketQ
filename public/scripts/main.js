import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Open the modal when the "mark as read" button is selected
const checkButtons = document.querySelectorAll('.actions a.check') // Get all the buttons with the check class
checkButtons.forEach(button => { 
    button.addEventListener('click', handleClick) // AAdd a listen to each of them
})

// Open the modal when the "delete" button is selected
const deleteButton = document.querySelectorAll('.actions a.delete')
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

// Closes the modal when the user wants to cancel the action
const cancelButton = document.querySelector('.button.cancel')
cancelButton.addEventListener('click', modal.close)

function handleClick(event, check=true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id //dataset.id get the data-id method number from the HTML

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `question/${roomId}/${questionId}/${slug}`)


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que você quer ${text.toLowerCase()} esta pergunta?` : `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    // Open modal
    modal.open()
}