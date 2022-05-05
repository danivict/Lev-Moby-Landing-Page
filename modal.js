const modal = document.querySelector("#modal")
const open_modal_button = document.querySelector(".open-modal")
const close_modal_button = document.querySelector(".close-modal")

open_modal_button.addEventListener('click', () => {
  modal.showModal();
})

close_modal_button.addEventListener('click', () => {
  modal.close();
})