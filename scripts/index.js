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
const initialCards = [object1, object2, object3, object4, object5, object6];

const closeButton = document.querySelector(".modal__close");

const profileTitle = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

const inputTitle = document.querySelector("#Name");

const inputDescription = document.querySelector("#AboutMe");

const editButton = document.querySelector(".profile__edit-button");

const modal = document.querySelector(".modal");

const modalButton = modal.querySelector(".modal__profile");

const cardTemplate = document.querySelector("#card-template").content;

const cardList = document.querySelector(".cards__list");

// FUNCTIONS  //
//            //

function processModal(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
}

function openModal() {
  inputTitle.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
  modal.classList.toggle("modal_open");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__text");

  cardText.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  return cardElement;
}

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

const closeModal = function () {
  modal.classList.remove("modal_open");
};

function saveModal(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileDescription.textContent = inputDescription.value;
  closeModal();
}

// EVENT LISTENERS      //
//                      //
editButton.addEventListener("click", openModal);

modalButton.addEventListener("submit", saveModal);

closeButton.addEventListener("click", closeModal);

/*inputTitle.addEventListener("input", processModal);

inputDescription.addEventListener("input", processModal);*/
