console.log("hello");

function enableValidation(config) {
  console.log(config);
  const formElements = Array.from(document.querySelectorAll('form'));
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

  
enableValidation(config); 
