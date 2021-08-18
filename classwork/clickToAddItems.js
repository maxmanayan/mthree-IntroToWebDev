var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {
  numberFun.className = "needs-validation";

  if (!numberFun.checkValidity()) {
    numberFun.className = "was-validated";
    return false;
  }

  var operand1 = Number(num1.value);
  var operand2 = Number(num2.value);

  document.getElementById("addResult").innerText = operand1 + operand2;
  document.getElementById("subtractResult").innerText = operand1 - operand2;
  document.getElementById("multiplyResult").innerText = operand1 * operand2;
  document.getElementById("divideResult").innerText = operand1 / operand2;

  results.style.display = "block";
  submitButton.innerText = "Recalculate";

  // We always will return false so the form doesn't actually submit.
  // Submission cause the page to reload.
  return false;
}

function resetView() {
  numberFun.className = "needs-validation";
  results.style.display = "none";
  submitButton.innerText = "Calculate";
  num1.focus();
}
