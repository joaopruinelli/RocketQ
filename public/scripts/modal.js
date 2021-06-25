export default function Modal(){
    const modalWrapper = document.querySelector('.modal-wrapper')
 
    function open(){
        // Open modal
        modalWrapper.classList.add('active')
    }
    function close(){
        // Close modal
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}