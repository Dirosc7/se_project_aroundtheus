// ARRAY  //
//        //
const object1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const object2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};

const object3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};

const object4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};

const object5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

const object6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

// ELEMENTS   //
//            //

// CARDS //
const initialCards = [object1, object2, object3, object4, object5, object6];

const cardTemplate = document.querySelector("#card-template").content;

const cardList = document.querySelector(".cards__list");

// PROFILE EDIT MODAL //
const profileTitle = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

const inputTitle = document.querySelector("#Name");

const inputDescription = document.querySelector("#AboutMe");

const editProfileButton = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#editModal");

const modalProfileSaveButton =
  editProfileModal.querySelector(".modal__profile");

const addCardModal = document.querySelector("#addModal");

// CLOSE MODALS //
const closeCardButton = document.querySelector(".modal__close");

const closeProfileModalButton = editProfileModal.querySelector(".modal__close");

const closeAddModalButton = addCardModal.querySelector(".modal__close");

// ADD CARD MODAL //
const addButton = document.querySelector(".profile__add-button");

const inputCardText = document.querySelector("#Place");

const inputCardImage = document.querySelector("#Image");

const addCardModalSaveButton = addCardModal.querySelector(".modal__profile");

// PICTURE MODAL //
const pictureModal = document.querySelector("#picturemodal");

const closePictureModalButton = pictureModal.querySelector(
  ".modal__close-picture"
);

// FUNCTIONS  //
//            //

// CHANGES PROFILE FROM EDIT PROFILE MODAL //
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
}

function openProfileForm() {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
  openModal(editProfileModal);
}

//SAVES NEW PROFILE  //
function saveEditModal(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
  closeModal(editProfileModal);
}

// OPENS MODALS //
function openModal(modal) {
  modal.classList.add("modal_open");
}

// CLOSES MODALS //
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

//CREATES NEW CARD//
function submitAddCardForm(event) {
  event.preventDefault();
  const name = inputCardText.value;
  const link = inputCardImage.value;
  const cardElement = getCardElement({ name, link });

  closeModal(addCardModal);
  const element = event.target;
  element.reset();
  cardList.prepend(cardElement);

  toggleButtonState;
}

//CREATES CARDS FROM ARRAY //
function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true).querySelector(".card");
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__text");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_clicked");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardText.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardImage.addEventListener("click", () => {
    const modalImage = document.querySelector("#ModalImage");
    const modalTitle = document.querySelector(".modal__picture-title");
    modalImage.src = cardImage.src;
    modalTitle.textContent = cardText.textContent;
    modalImage.alt = "Photo of " + modalTitle.textContent;
    openModal(pictureModal);
  });

  return cardElement;
}

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

// EVENT LISTENERS      //
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

// CLOSE MODAL OUTSIDE //
//                      //
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal_open");
    closeModal(modal);
  }
}

function closeModal(modal) {
  document.removeEventListener("keydown", handleKeyDown);
}

window.onclick = function (event) {
  var images_modal = document.querySelector(".modal_open");

  if (event.target == images_modal) {
    closeModal(images_modal);
  }
};
editProfileButton.addEventListener("click", openProfileForm);


