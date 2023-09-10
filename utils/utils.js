// OPENS MODALS //
export function openModal(modal) {
    modal.classList.add("modal_open");
    document.addEventListener("keydown", handleKeyDown);
    modal.addEventListener("mousedown", handleModalClose);
  }
  
  // CLOSES MODALS //
  export function closeModal(modal) {
    modal.classList.remove("modal_open");
    document.removeEventListener("keydown", handleKeyDown);
    modal.removeEventListener("mousedown", handleModalClose);
  }

 /* // EVENT LISTENERS      //
//                      //

addButton.addEventListener("click", () => openModal(addCardModal));

modalProfileSaveButton.addEventListener("submit", saveEditModal);

closeProfileModalButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

closeAddModalButton.addEventListener("click", () => closeModal(addCardModal));

addCardModalSaveButton.addEventListener("submit", submitAddCardForm);

closePictureModalButton.addEventListener("click", () =>
  closeModal(pictureModal)
);

editProfileButton.addEventListener("click", openProfileForm);*/

// CLOSE MODAL OUTSIDE //
//                      //

export function handleKeyDown(event) {
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal_open");
    closeModal(modal);
  }
};

export function handleModalClose(evt) {
    if (evt.target == evt.currentTarget) {
      closeModal(evt.target);}
  };
