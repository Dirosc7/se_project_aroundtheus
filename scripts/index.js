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

const cardElement = cardTemplate.cloneNode(true);
const cardImage = cardElement.querySelector(".card__image");
const cardText = cardElement.querySelector(".card__text");
const likeButton = cardElement.querySelector(".card__like-button");
const deleteButton = cardElement.querySelector(".card__delete-button");
const cardDeleted = cardElement.querySelector(".card");

// FUNCTIONS  //
//            //

// UPDATES PROFILE FROM EDIT PROFILE MODAL //
function handleProfileFormSubmit() {
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
}

function handleProfileFormInput(event) {
  event.preventDefault();
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
}

// OPENS MODALS //
function openModal(event) {
  event.classList.toggle("modal_open");
}

// CLOSES MODALS //
function closeModal(event) {
  event.classList.toggle("modal_open");
}

//CREATES NEW CARDS //
function saveEditModal(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
  closeModal(editProfileModal);
}

function saveAddModal(event) {
  event.preventDefault();

  function getCardElement() {
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

    cardText.textContent = inputCardText.value;
    cardImage.src = inputCardImage.value;

    return cardElement;
  }

  const cardElement = getCardElement();
  cardList.prepend(cardElement);

  closeModal(addCardModal);
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
    modalImage.alt = "Photo of";
    openModal(pictureModal);
  });

  return cardElement;
}

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

// MODAL FORM RESET FUNCTION //

function clearForm() {
  const element = document.getElementById("ModalForm2");
  element.reset();
}

// EVENT LISTENERS      //
//                      //

editProfileButton.addEventListener("click", () => openModal(editProfileModal));

addButton.addEventListener("click", () => openModal(addCardModal));

modalProfileSaveButton.addEventListener("submit", saveEditModal);

closeProfileModalButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

closeAddModalButton.addEventListener("click", () => closeModal(addCardModal));

addCardModalSaveButton.addEventListener("submit", saveAddModal);

closePictureModalButton.addEventListener("click", () =>
  closeModal(pictureModal)
);

inputTitle.addEventListener("input", handleProfileFormSubmit);
inputDescription.addEventListener("input", handleProfileFormSubmit);

editProfileButton.addEventListener("click", handleProfileFormInput);
editProfileButton.addEventListener("click", handleProfileFormInput);

closeAddModalButton.addEventListener("click", newFunction);
addCardModalSaveButton.addEventListener("submit", newFunction);
