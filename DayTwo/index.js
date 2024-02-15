let incrementValue = 1;

document
  .getElementById("form-container")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nameContainer = document.getElementById("name-container");
    const ageContainer = document.getElementById("age-container");
    const languagesContainer = document.getElementById("languages-container");
    const professionalContainer = document.getElementById(
      "professional-container"
    );
    const resultsContainer = document.getElementById("results-container");
    const likeStudiesContainer = document.getElementById(
      "like-studies-container"
    );
    const buttonBox = document.getElementById("submit-box");

    const nameInput = document.getElementById("nameEntry").value.trim();
    const ageInput = document.getElementById("ageEntry").value.trim();
    const languagesInput = document
      .getElementById("languagesEntry")
      .value.trim();
    const professionalInput = document
      .getElementById("professionalEntry")
      .value.trim();
    const professionalLabel = document.getElementById("professional-label");

    if (incrementValue === 1) {
      if (!nameInput) {
        alert("Favor, insira seu nome para continuar...");
        return;
      }
    } else if (incrementValue === 2) {
      if (!ageInput || isNaN(ageInput)) {
        alert("Favor, insira sua idade para continuar...");
        return;
      }
    } else if (incrementValue === 3) {
      if (!languagesInput) {
        alert("Favor, insira a linguagem de programação que está estudando...");
        return;
      }
    } else if (incrementValue === 5) {
      if (!professionalInput || isNaN(professionalInput)) {
        console.log("first", professionalInput);

        alert("Favor, responda com o número 1 para SIM ou 2 para NÃO.");
        return;
      }
    }

    if (incrementValue === 1) {
      nameContainer.style.display = "none";
      ageContainer.style.display = "flex";
    } else if (incrementValue === 2) {
      ageContainer.style.display = "none";
      languagesContainer.style.display = "flex";
    } else if (incrementValue === 3) {
      languagesContainer.style.display = "none";
      resultsContainer.style.display = "flex";
      resultsContainer.textContent = `Oie, ${nameInput}, você tem ${ageInput} anos e já está estudando ${languagesInput}!`;
    } else if (incrementValue === 4) {
      resultsContainer.style.display = "none";
      professionalContainer.style.display = "flex";
      professionalLabel.textContent = `4. Você gosta de estudar ${languagesInput}? Responda com o número 1 para SIM ou 2 para NÃO.`;
    } else if (incrementValue === 5) {
      professionalContainer.style.display = "none";
      likeStudiesContainer.style.display = "flex";
      likeStudiesContainer.textContent =
        professionalInput === "1"
          ? `Muito bom! Continue estudando ${languagesInput} e você terá muito sucesso!`
          : "Ahh que pena... Já tentou aprender outras linguagens?";
      buttonBox.style.display = "none";
    }

    incrementValue++;
  });
