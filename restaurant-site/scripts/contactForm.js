const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const successMessage = document.getElementById("submit-success");
const invalidEmail = document.getElementById("email-validation-error");

function checkRequired() {
  const emailToCheck = contactEmail.value;

  // Validate email with regex
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(String(emailToCheck).toLowerCase())) {
    invalidEmail.style.display = "inline-block";
    return false;
  } else {
    invalidEmail.style.display = "none";
  }

  successMessage.style.display = "block";

  return false;
}

function resetForm() {
  invalidEmail.style.display = "none";
  successMessage.style.display = "none";
}
