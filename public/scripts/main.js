import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // Checar todos os botões
    button.addEventListener("click", handleClick)
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.set
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} está pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} está pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //Abrir modal
    modal.open()
}

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomID = document.querySelector("#room-id").dataset.set
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} está pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} está pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}


