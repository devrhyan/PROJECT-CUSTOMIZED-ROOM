export default function Modal() {

    const modalWapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        // funcionalidade de atribuir a classe active no modal 
        modalWapper.classList.add("active")
    }
    function close() {
        // funcionalidade de remover a classe active no modal 
        modalWapper.classList.remove("active")
    }
    return {
        open,
        close
    }
}