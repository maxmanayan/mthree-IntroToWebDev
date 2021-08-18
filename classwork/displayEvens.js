let numStart = document.getElementById("numStart");
let numEnd = document.getElementById("numEnd");
let step = document.getElementById("step");

let errMesNumEnd = document.getElementById("error-message-numEnd");
let errMesStep = document.getElementById("error-message-step");

let result = document.getElementById("result");
let resNumStart = document.getElementById("resNumStart");
let resNumEnd = document.getElementById("resNumEnd");
let resStep = document.getElementById("resStep");
let resNums = document.getElementById("resNums");

function displayEvens() {
  let startingNum = Number(numStart.value);
  let endingNum = Number(numEnd.value);
  let stepper = Number(step.value);

  // Form Validations
  if (endingNum <= startingNum && stepper <= 0) {
    errMesNumEnd.style.display = "block";
    errMesStep.style.display = "block";
    return false;
  } else if (endingNum <= startingNum && stepper > 0) {
    errMesNumEnd.style.display = "block";
    errMesStep.style.display = "none";
    return false;
  } else if (endingNum > startingNum && stepper <= 0) {
    errMesNumEnd.style.display = "none";
    errMesStep.style.display = "block";
    return false;
  } else {
    errMesNumEnd.style.display = "none";
    errMesStep.style.display = "none";
  }

  resNumStart.innerText = startingNum;
  resNumEnd.innerText = endingNum;
  resStep.innerText = stepper;
  result.style.display = "block";
  resNums.innerText = "";

  for (let i = startingNum; i <= endingNum; i += stepper) {
    if (i % 2 === 0) {
      resNums.innerText = resNums.innerText + `${i}\n`;
    }
  }
  console.log("This is finished");
  return false;
}
