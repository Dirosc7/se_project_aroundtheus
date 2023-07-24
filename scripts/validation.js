console.log("hello");

function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelectorAll(".modal__input-error_active");
  inputElement.classList.add("modal__input_type_error");
  console.log(errorMessage);
  errorElement.textContent = errorMessage;
  errorElement.classlist.add("modal__input-error_active");

}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelectorAll(".modal__input-error_active");
  inputElement.classList.remove("modal__input_type_error");
  errorElement.classList.remove("modal__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
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
  } else {
    buttonElement.classList.remove("modal__button_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelectorAll(".modal__button");

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

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".modal__profile-fieldset")
    );
  });
};
