  let errors = {
    errorStatus: false,
    nameError: "",
    emailError: "",
    messageError: "",
  };

export const formValidationHandler = (nameInput, emailInput, messageInput) => {


  if (!nameInput & !emailInput & !messageInput) {
    errors = {
      errorStatus: true,
      nameError: "Your name is required!",
      emailError: "Your Email is required!",
      messageError: "Your message is required!",
    };
  } else if (!nameInput & !emailInput) {
    errors = {
      errorStatus: true,
      nameError: "Your name is required!",
      emailError: "Your Email is required!",
    };
  } else if (!nameInput & !messageInput) {
    errors = {
      errorStatus: true,
      nameError: "Your name is required!",
      messageError: "Your message is required!",
    };
  } else if (!emailInput & !messageInput) {
    errors = {
      errorStatus: true,
      emailError: "Your email is required!",
      messageError: "Your message is required!",
    };
  } else if (!nameInput) {
    errors = {
      nameError: "Your name is required!",
      errorStatus: true,
    };
  } else if (!emailInput) {
    errors = { errorStatus: true, emailError: "Your Email is required!" };
  } else if (!messageInput) {
    errors = { errorStatus: true, messageError: "Your message is required!" };
  } else {
    errors = { errorStatus: false };
  }
  return errors;
};

// In JavaScript we have the following conditional statements: Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.
export function formErrorStatus (){
  return errors.errorStatus
}