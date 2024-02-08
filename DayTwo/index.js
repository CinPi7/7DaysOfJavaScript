document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameContainerForm = document.getElementById("name-container");
  const ageContainerForm = document.getElementById("age-container");
  const languageContainerForm = document.getElementById("language-container");

  if (event) {
    console.log("Entering", event);
    if (nameContainerForm.style.display !== "none") {
      nameContainerForm.style.display = "none";
      ageContainerForm.style.display = "block";
      languageContainerForm.style.display = "none";
    }
    if (ageContainerForm.style.display !== "none") {
      console.log("Entering", event);

      nameContainerForm.style.display = "none";
      ageContainerForm.style.display = "none";
      languageContainerForm.style.display = "block";
    }
    if (languageContainerForm.style.display !== "none") {
      console.log("Entering", event);

      languageContainerForm.style.display = "none";
      nameContainerForm.style.display = "block";
      ageContainerForm.style.display = "none";
    }
  }
});
