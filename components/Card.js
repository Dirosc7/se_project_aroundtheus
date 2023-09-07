
class Card {
  constructor({name, link}, cardTemplate, pictureModal, openModal) {
    this._data = {name, link};
    this._cardTemplate = cardTemplate;
    this._openModal = openModal;
    this._pictureModal = pictureModal;
    this._handleImageClick = this._handleImageClick.bind(this);
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardTemplate);
    return cardTemplate.content.cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton(this));
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', this._handleDeleteButton(this));
    this._cardElement.querySelector('.card__image').addEventListener('click', this._handleImageClick);
  }

  _handleLikeButton(evt) {
    const cardLike = evt.currentTarget;
    cardLike.classList.toggle('card__like-button_clicked')
  }

  _handleDeleteButton(evt) {
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
  }

  _handleImageClick() {
    const imageUrl = this._data.link;
    console.log("imageUrl", imageUrl);
    const imageCaption = this._data.name;
    console.log("imageCaption", imageCaption);

    const modalImage = document.querySelector("#ModalImage");
    const modalTitle = document.querySelector(".modal__picture-title");

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalTitle.textContent = imageCaption;
    elementImageModal.classList.add("modal_opened");
    this._openModal(this.pictureModal);
  }

  generateCard() {
    this._cardElement = this._getTemplate().querySelector('.element');
    const imageElement = this._cardElement.querySelector('.element__img');
    const titleElement = this._cardElement.querySelector('.element__text');

    imageElement.src = this._data.link;
    imageElement.alt = this._data.name;
    titleElement.textContent = this._data.name;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
