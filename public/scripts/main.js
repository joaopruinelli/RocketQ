import Modal from './modal.js'
import CopyUrl from './copyUrl.js'
import handleClick from './handleClick.js'

const modal = Modal()

// Open the modal when the "mark as read" button is selected
const checkButtons = document.querySelectorAll('.actions a.check') // Get all the buttons with the check class
checkButtons.forEach(button => { 
    button.addEventListener('click', (event) => handleClick(event)) // Add a listen to each of them
})

// Open the modal when the "delete" button is selected
const deleteButton = document.querySelectorAll('.actions a.delete')
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

// Closes the modal when the user wants to cancel the action
const cancelButton = document.querySelector('.button.cancel')
cancelButton.addEventListener('click', modal.close)

// Copy url to clipboard
const copyUrlToClipboard = document.getElementById('room-id')
copyUrlToClipboard.addEventListener('click', CopyUrl)