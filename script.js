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


// PWA Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js")
      .then(function () {
        console.log("Fragments PWA ready.");
      })
      .catch(function (error) {
        console.log("Service Worker registration failed:", error);
      });
  });
}
