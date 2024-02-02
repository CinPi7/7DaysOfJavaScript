// if (COMPARAR O numeroUm e a stringUm) {
// console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
// } else {
// console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
// }

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const stringCatcher = document.getElementById("stringCatcher").value;
  const numberCatcher = document.getElementById("numberCatcher").value;

  console.log("stringCatcher : ", stringCatcher);
  console.log("numberCatcher : ", numberCatcher);

  const resultOne = getStringAndNumber(stringCatcher, numberCatcher);
  const resultTwo = getNumberAndNumber(stringCatcher, numberCatcher);
  console.log("results : ", resultOne, resultTwo);
});

function getStringAndNumber(stringCatcher, numberCatcher) {
  if (numberCatcher == stringCatcher) {
    const sumNumberAndStringResults = numberCatcher + stringCatcher;
    console.log(
      "As variáveis",
      numberCatcher,
      " e ",
      stringCatcher,
      " tem o mesmo valor, mas tipos diferentes."
    );
    console.log(
      "A soma entre esses tipos diferentes resulta em: ",
      sumNumberAndStringResults
    );

    return sumNumberAndStringResults;
  }
  return;
}

function getNumberAndNumber(stringCatcher, numberCatcher) {
  let parsedNumber = parseFloat(stringCatcher);

  if (!isNaN(parsedNumber) && parsedNumber === parseFloat(numberCatcher)) {
    const sumNumberAndNumber = parsedNumber + parseFloat(numberCatcher);
    console.log("Soma entre mesmos tipos: ", sumNumberAndNumber);
    return sumNumberAndNumber;
  }

  console.log("Os valores não são do mesmo tipo ou não são números.");
  return;
}
