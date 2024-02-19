document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const choosenField = document.getElementById("choose-a-field").value;
  const fieldContainer = document.getElementById("professional-field");

  const frontEndContainer = document.getElementById("front-end-journey");
  const backendContainer = document.getElementById("back-end-journey");

  const frontEndLanguage = document.getElementById("which-front-end").value;
  console.log(frontEndLanguage);

  if (choosenField === "") {
    alert("Selecione uma área de atuaçao");
  } else if (choosenField === "front end" || choosenField === "frontend") {
    console.log(choosenField);
    fieldContainer.style.display = "none";
    frontEndContainer.style.display = "flex";
  } else if (choosenField === "back end" || choosenField === "backend") {
    console.log(choosenField);
    fieldContainer.style.display = "none";
    backendContainer.style.display = "flex";
  } else {
    alert("Por favor, selecione uma das duas áreas de atuação.");
  }

  if (
    frontEndLanguage.toLowerCase() === "react" ||
    frontEndLanguage.toLowerCase() === "angular" ||
    frontEndLanguage.toLowerCase() === "vue"
  ) {
    const whichCareerPath = document.getElementById("choose-react");
    frontEndContainer.style.display = "none";
    whichCareerPath.style.display = "flex";
  }
});
