"use strict";

const showModal = document.getElementsByClassName("show-modal");
const closeModal = document.getElementById("close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

function btnOpenModal () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function btnCloseModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for(let i = 0; i < showModal.length; i++){
  showModal[i].addEventListener("click", btnOpenModal)
}

closeModal.addEventListener("click", btnCloseModal);
overlay.addEventListener("click", btnCloseModal);

document.addEventListener("keydown", 
function(e) {
  if(e.key === 'Escape' && !modal.classList.contains("hidden")){
    btnCloseModal();
  }
})

























// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

// const openModal = function () {
//   // console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }
// btnCloseModal.addEventListener("click", closeModal);
// // overlay.add("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
