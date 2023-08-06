

const showInputError = (formElement, inputElement, errorMessage, {inputError, errorClass}) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.add(inputError);
  console.log(errorMessage); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputError, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(inputElement);
  inputElement.classList.remove(inputError);
  console.log(errorElement);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = " ";
  
};

const checkInputValidity = (formElement, inputElement, validationObjects) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationObjects);
  } else {
    hideInputError(formElement, inputElement, validationObjects);
  }
 
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement, validationObjects) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationObjects.inactiveButtonState);
    buttonElement.disabled = true;
  } 
  else {
    buttonElement.classList.remove(validationObjects.inactiveButtonState);
    buttonElement.disabled = false;
  }
};


const setEventListeners = (formElement, validationObjects) => {
  const inputList = [...formElement.querySelectorAll(validationObjects.inputElement)];
  const buttonElement = formElement.querySelector(validationObjects.buttonElement);
  toggleButtonState(inputList, buttonElement, validationObjects);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, validationObjects);
      toggleButtonState(inputList, buttonElement, validationObjects);
    });
  }); 
};



const enableValidation = (validationObjects) => {
  const formList = Array.from(document.querySelectorAll(validationObjects.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validationObjects);
    
  });
};

const validationObjects = {
  formElement: ".modal__profile",
  inputElement: ".modal__input",
  buttonElement: ".modal__button",
  inactiveButtonState: "modal__button_inactive",
  inputError: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};



enableValidation(validationObjects);
