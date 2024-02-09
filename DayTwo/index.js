let incrementValue = 1;

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(incrementValue);

  const getNameInput = document.getElementById("nameEntry").value;
  const getAgeInput = document.getElementById("ageEntry").value;
  const getLanguagesInput = document.getElementById("languagesEntry").value;

  console.log("getNameInput", getNameInput);
  console.log("getAgeInput", getAgeInput);
  console.log("getLanguagesInput", getLanguagesInput);

  const nameContainer = document.getElementById("name-container");
  const ageContainer = document.getElementById("age-container");
  const languagesContainer = document.getElementById("languages-container");
  const resultsContainer = document.getElementById("results-container");
  const formContainer = document.getElementById("form-container");

  console.log("nameContainer", nameContainer);
  console.log("ageContainer", ageContainer);
  console.log("languagesContainer", languagesContainer);
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
    formContainer.style.display = "none";
    resultsContainer.style.display = "flex";
  }

  const resultParagraph = document.getElementById("paragraph-results");
  const resultText = `Olá ${getNameInput}, você tem ${getAgeInput} anos e já está aprendendo ${getLanguagesInput} !`;
  resultParagraph.textContent = resultText;
});
