class FormValidator {
  constructor(validationObjects, formElement) {
    this._formElement = formElement;
    this._inputElement = validationObjects.inputElement;
    this._buttonElement = validationObjects.buttonElement;
    this._inactiveButtonState = validationObjects.inactiveButtonState;
    this._hideInputError = validationObjects.hideInputError;
    this._errorElement = validationObjects.errorElement;
    this._formList = Array.from(this._formElement.querySelectorAll(this._inputElement));
    this._buttonElement = this._formElement.querySelector(this._buttonElement);
    
  }
  

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._hideInputError);
    console.log(errorMessage);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorElement);
  }

  _hideInputErrors(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._hideInputError);
    errorElement.classList.remove(this._errorElement);
    errorElement.textContent = " ";
  }

  _checkInputValidity(formElement,inputElement, validationObjects) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement,inputElement, inputElement.validationMessage, validationObjects);
    } else {
      this._hideInputErrors(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._formList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  resetValidation() {
    this.toggleButtonState();

    
  }


  _setEventListeners() {
    this._formList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._formElement, inputElement);
        this.toggleButtonState(this._formList, this._buttonElement);
      });
    });
  }

  enableValidation() {
    /*this.toggleButtonState();*/
    
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); 
    });
    this._setEventListeners();
    
  }
}


export default FormValidator;
