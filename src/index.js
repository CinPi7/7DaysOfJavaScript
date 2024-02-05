document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const stringCatcher = document.getElementById("stringCatcher").value;
  const numberCatcher = document.getElementById("numberCatcher").value;

  console.log("stringCatcher : ", stringCatcher);
  console.log("numberCatcher : ", numberCatcher);

  // Resultado das somas entre mesmos numeros e tipos diferentes e iguais.
  const resultOne = getStringAndNumber(stringCatcher, numberCatcher);
  const resultTwo = getNumberAndNumber(stringCatcher, numberCatcher);
  console.log("Diferença dos resultados: ", resultOne, resultTwo);
});

// uso de ==
function getStringAndNumber(stringCatcher, numberCatcher) {
  if (stringCatcher == numberCatcher) {
    console.log(
      "As variáveis",
      stringCatcher,
      " e ",
      numberCatcher,
      " tem o mesmo valor, mas tipos diferentes."
    );

    const sumBetweenStringAndNumber = this.sum(stringCatcher, numberCatcher);
    console.log(
      "A soma de string",
      stringCatcher,
      "+ numero",
      numberCatcher,
      "=",
      sumBetweenStringAndNumber,
      ". O que está errado."
    );

    return sumBetweenStringAndNumber;
  } else {
    console.log(
      "As variáveis ",
      stringCatcher,
      " e ",
      numberCatcher,
      " não tem o mesmo valor."
    );
  }
  return;
}

function sum(x, y) {
  const sum = x + y;
  return sum;
}

function getNumberAndNumber(stringCatcher, numberCatcher) {
  let parsedNumber = parseFloat(stringCatcher);
  const string = "";

  if (!isNaN(parsedNumber) && parsedNumber === parseFloat(numberCatcher)) {
    const sumNumberAndNumber = parsedNumber + parseFloat(numberCatcher);

    console.log(
      "Soma entre mesmos valores e tipos, depois de usar parseFloat: ",
      sumNumberAndNumber
    );
    return sumNumberAndNumber;
  } else if (stringCatcher === string) {
    console.log("As variáveis não tem o mesmo tipo");
  }

  return;
}
