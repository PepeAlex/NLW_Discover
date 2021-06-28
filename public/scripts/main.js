import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (evente) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    const removeRed = modalButton.classList.remove("red")
    const addRed = modalButton.classList.add("red")

    modalTitle.innerHTML = check ? "Mark as read" : "Delete Question"
    modalDescription.innerHTML = check ? "Are you sure to mark this question?" : "Are you sure to delete this question?"
    modalButton.innerHTML = check ? "Yes, mark as read" : "Yes, delete"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}