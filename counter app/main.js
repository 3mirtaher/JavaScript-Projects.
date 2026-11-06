const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");

const displayCount = document.querySelector(".count");
const step = document.querySelector("input[type='text']");
const message = document.querySelector("#message");

const postision = document.querySelector(".postision");
const divposition = postision.querySelector("div");

let count = 0;

function getstep() {
  const value = Number(step.value || 1);
  if (Number.isNaN(value)) {
    displayCount.textContent=""
    message.textContent = "enter a valid step!!";
    return null;
  }
  message.textContent = "";
  return value;
}
increase.addEventListener("click", function () {
  const stepvalue = getstep();
  if (stepvalue == null) return; //stop
  count = count + stepvalue;
  displayCount.textContent = count;
  updateposition();
});

decrease.addEventListener("click", function () {
  const stepvalue = getstep();
  if (stepvalue == null) return; //stop
  count = count - stepvalue;
  displayCount.textContent = count;
  updateposition();
});
reset.addEventListener("click", function () {
  count = 0;
  message.textContent = "";
  displayCount.textContent = count;
  // count.textContent= count
  updateposition();
});

function updateposition() {
   divposition.classList.remove("positive", "negative", "zero");
   displayCount.classList.remove("positive", "negative", "zero");
  displayCount.textContent = count;
  if (count > 0) {
    divposition.textContent = "position : green";
    divposition.classList.add("positive");
    displayCount.classList.add("positive")
  } else if (count < 0) {
    divposition.textContent = "position : red";
    divposition.classList.add("negative");
    displayCount.classList.add("negative")

  } else {
    divposition.textContent = "position : gray";
    divposition.classList.add("zero");
    displayCount.classList.add("zero")

  }
}

updateposition();
