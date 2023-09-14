

export default class Card {
  constructor({name,link}, cardTemplate, pictureModal, openModal) {
    
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate.content;
    this._openModal = openModal;
    this._pictureModal = pictureModal;
    this._handleImageClick = this._handleImageClick.bind(this);
    
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplate).content.querySelector(".card").
    cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton(this));
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', this._handleDeleteButton(this));
    this._cardElement.querySelector('.card__image').addEventListener('click', this._handleImageClick);
  }

  _handleLikeButton = (evt) => {
    const cardLike = evt.currentTarget;
    cardLike.classList.toggle('card__like-button_clicked')
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;

  }

  _handleImageClick() {
    const imageUrl = this._link;
    console.log("imageUrl", imageUrl);
    const imageCaption = this._name;
    console.log("imageCaption", imageCaption);

    const modalImage = document.querySelector("#ModalImage");
    const modalTitle = document.querySelector(".modal__picture-title");

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalTitle.textContent = imageCaption;
    this._openModal(this.pictureModal);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    const imageElement = this._cardElement.querySelector('.card__image');
    const titleElement = this._cardElement.querySelector('.card__text');

    imageElement.src = this._link;
    imageElement.alt = this._name;
    titleElement.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
    
  }
  
};

