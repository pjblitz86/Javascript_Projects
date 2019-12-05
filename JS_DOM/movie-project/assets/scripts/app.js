const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const modalCancelBtn = document.getElementsByClassName("btn--passive")[0];

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

startAddMovieBtn.addEventListener("click", toggleMovieModal, toggleBackdrop);

modalCancelBtn.addEventListener("click", toggleMovieModal);
