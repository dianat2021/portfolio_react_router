export const formValidationHandler = (
  nameInput,
  emailInput,
  messageInput,
  setErrorStatus,
  setErrorMessage
) => {
  if (!nameInput && !emailInput && !messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please fill out the form before submitting!");
    return;
  }
  if (nameInput && !emailInput && !messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please complete the form before submitting!");
    return;
  }
  if (!nameInput && emailInput && !messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please complete the form before submitting!");
    return;
  }
  if (!nameInput && !emailInput && messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please complete the form before submitting!");
    return;
  }
  if (!nameInput && emailInput && messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please fill out the name input!");
    return;
  }
  if (nameInput && !emailInput && messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please fill out the email input!");
    return;
  }
  if (nameInput && emailInput && !messageInput) {
    setErrorStatus(true);
    setErrorMessage("Please type your message before submitting!");
    return;
  }
};
