let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

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

  getEntrances(stringCatcher, numberCatcher);
});

function getEntrances(stringCatcher, numberCatcher) {
  let getNumberOfAString = parserFromStringToNumber(stringCatcher);

  if (numberCatcher == stringCatcher) {
    const sumNumberAndStringResults = numberCatcher + stringCatcher;
    console.log(
      "A soma, sendo numero concatenando com string, resulta em: " +
        sumNumberAndStringResults +
        ". Um falso positivo que deve ser devidamente tratada. As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
    );
  }
}

function parserFromStringToNumber(string) {
  const numberOfString = parseInt(string);
  return numberOfString;
}
