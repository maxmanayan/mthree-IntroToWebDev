var tracking = false;

var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {
  if (tracking) {
    this.classList.remove("btn-danger");
    this.classList.add("btn-success");
    this.innerText = "Start mouse tracking.";
  } else {
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    this.innerText = "Stop mouse tracking.";
  }

  tracking = !tracking;
}

function updateMousePosition(evt) {
  if (tracking) {
    mouseX.innerText = evt.clientX;
    mouseY.innerText = evt.clientY;
  }
}

document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);
