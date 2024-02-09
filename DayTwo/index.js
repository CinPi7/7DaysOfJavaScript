let incrementValue = 1;

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const getNameInput = document.getElementById("nameEntry").value;
  const getAgeInput = document.getElementById("ageEntry").value;
  const getLanguagesInput = document.getElementById("languagesEntry").value;
  const getStudiesEntry = document.getElementById("studyEntry").value;

  const nameContainer = document.getElementById("name-container");
  const ageContainer = document.getElementById("age-container");
  const languagesContainer = document.getElementById("languages-container");
  const resultsContainer = document.getElementById("results-container");
  const formContainer = document.getElementById("form-container");
  const professionalContainer = document.getElementById(
    "professional-container"
  );
  const professionalLabel = document.getElementById("professional-label");
  const likeStudiesContainer = document.getElementById(
    "like-studies-container"
  );
  const buttonBox = document.getElementById("submit-box");

  const studies = {
    1: `1. Muito bom! Continue estudando e você terá muito sucesso!`,
    2: `2. Ahh que pena... Já tentou aprender outras linguagens?`,
  };

  incrementValue++;

  if (incrementValue == 1) {
    ageContainer.style.display = "flex";
    nameContainer.style.display = "none";
    console.log(incrementValue);
  } else if (incrementValue == 2) {
    nameContainer.style.display = "none";
    ageContainer.style.display = "flex";
    languagesContainer.style.display = "none";
    console.log(incrementValue);
  } else if (incrementValue == 3) {
    resultsContainer.style.display = "none";
    languagesContainer.style.display = "flex";
    nameContainer.style.display = "none";
    ageContainer.style.display = "none";
    console.log(incrementValue);
  } else if (incrementValue == 4) {
    languagesContainer.style.display = "none";
    formContainer.style.display = "flex";
    resultsContainer.style.display = "flex";
    console.log(incrementValue);
  } else if (incrementValue == 5) {
    professionalContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    formContainer.style.display = "flex";
    professionalLabel.textContent = `3. Você gosta de estudar ${getLanguagesInput}? Responda com o número 1 para SIM ou 2
    para NÃO.`;
    console.log(incrementValue);
  }
  const resultText = `Olá ${getNameInput}, você tem ${getAgeInput} anos e já está aprendendo ${getLanguagesInput} !`;
  resultsContainer.textContent = resultText;

  if (incrementValue == 6 && studies[getStudiesEntry]) {
    likeStudiesContainer.style.display = "flex";
    likeStudiesContainer.textContent = studies[getStudiesEntry];
    formContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    professionalContainer.style.display = "none";
    buttonBox.style.display = "none";
    console.log(incrementValue);
  }
});
