const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");

const invalidEmail = document.getElementById("email-validation-error");

function checkRequired() {
  console.log("Required checked");
  const nameToCheck = contactName.value;
  const emailToCheck = contactEmail.value;

  // Validate email with regex
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(String(emailToCheck).toLowerCase())) {
    console.log("email is NOT valid");
    invalidEmail.style.display = "inline-block";
  } else {
    invalidEmail.style.display = "none";
  }

  return false;
}
