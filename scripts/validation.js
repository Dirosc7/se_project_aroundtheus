

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("modal__input_type_error");
  console.log(errorMessage);
  errorElement.textContent = errorMessage;
  errorElement.classList.add("modal__input-error_active");
  
 
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(inputElement);
  inputElement.classList.remove("modal__input_type_error");
  console.log(errorElement);
  errorElement.classList.remove("modal__input-error_active");
  errorElement.textContent = " ";
  
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
 
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("modal__button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("modal__button_inactive");
    buttonElement.disabled = false;
  }
};


const setEventListeners = (formElement) => {
  /*const inputList = Array.from(formElement.querySelectorAll(".modal__input"));*/
  const inputList = [...formElement.querySelectorAll(".modal__input")];
  const buttonElement = formElement.querySelector(".modal__button");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  }); 
};



const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement)
    
  });
};

const configObjects = {
  formElement: ".modal__profile",
  inputElement: ".modal__input",
  buttonElement: ".modal__button",
  toggleButtonState: "modal__button_inactive",
  hideInputError: "modal__input_type_error",
  errorElement: "modal__input-error_active",
};



enableValidation(configObjects);
