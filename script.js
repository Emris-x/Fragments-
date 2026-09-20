const followForm = document.querySelector(".follow-form");

followForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = followForm.querySelector("input");
  const email = emailInput.value.trim();

  if (!email) {
    return;
  }

  alert("Thanks for following Fragments.");

  emailInput.value = "";
});
