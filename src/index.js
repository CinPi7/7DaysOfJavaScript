document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let stringCatcher = "";
  let numberCatcher = 0;

  const stringInput = document.getElementById("stringCatcher");
  const numberInput = document.getElementById("numberCatcher");

  if (stringInput && numberInput) {
    stringCatcher = document.getElementById("stringCatcher").value;
    numberCatcher = Number(document.getElementById("numberCatcher").value);

    console.log("String:", stringCatcher);
    console.log("Number:", numberCatcher);
    console.log(
      "Primeiro de tudo, como estamos usando inputs para pegar as variáveis, precisa-se converter o tipo number para número, uma vez que o valor da propriedade de um input sempre será uma string em JavaScript."
    );

    if (stringCatcher == numberCatcher) {
      console.log(
        `As variáveis ${stringCatcher} e ${numberCatcher} tem o mesmo valor, mas tipos diferentes.`
      );
    } else {
      console.log(
        `As variáveis ${stringCatcher} e ${numberCatcher} não tem o mesmo valor.`
      );
    }

    // it will always be false in this case.
    if (stringCatcher === numberCatcher) {
      console.log(
        `As variáveis ${stringCatcher} e ${numberCatcher} tem o mesmo valor e mesmo tipo.`
      );
    } else {
      console.log(
        `As variáveis ${stringCatcher} e ${numberCatcher} não tem o mesmo tipo.`
      );
    }

    handleStringAndNumber(stringCatcher, numberCatcher);
  }
});

function handleStringAndNumber(stringCatcher, numberCatcher) {
  if (stringCatcher && numberCatcher) {
    console.group(`Comparação de string e number usando == e ===:`);
    console.log(`Comparação usando == : ${stringCatcher == numberCatcher}`);
    console.log(`Comparação usando === : ${stringCatcher === numberCatcher}`);
    console.groupEnd();

    if (stringCatcher == numberCatcher) {
      const parsedFloat = parseFloat(stringCatcher);
      const parsedInt = parseInt(stringCatcher, 10);
      const unary = +stringCatcher;

      console.group(`Adição de mesmo valor e tipos diferentes "=="`);
      console.log(
        `Adição entre string + número de == : ${stringCatcher + numberCatcher}.`
      );
      console.log(
        `Adição entre parseFloat + número de == : ${
          parsedFloat + numberCatcher
        }.`
      );
      console.log(
        `Adição entre paresInt + número de == : ${parsedInt + numberCatcher}.`
      );
      console.log(
        `Adição entre unary + número de == : ${unary + numberCatcher}.`
      );
      console.groupEnd();

      console.group(`Subtração de mesmo valor e tipos diferentes "==" :`);
      console.log(
        `Subtração entre string - número de == : ${
          stringCatcher - numberCatcher
        }.`
      );
      console.log(
        `Subtração entre parseFloat - número de == : ${
          parsedFloat - numberCatcher
        }.`
      );
      console.log(
        `Subtração entre paresInt - número de == : ${
          parsedInt - numberCatcher
        }.`
      );
      console.log(
        `Subtração entre unary - número de == : ${unary - numberCatcher}.`
      );
      console.groupEnd();
    }

    if (stringCatcher === numberCatcher) {
      const parsedFloat = parseFloat(stringCatcher);
      const parsedInt = parseInt(stringCatcher, 10);
      const unary = +stringCatcher;

      console.group(`Adição de mesmo valor e mesmos tipos "==="`);
      console.log(
        `Adição entre string + número de === : ${
          stringCatcher + numberCatcher
        }.`
      );
      console.log(
        `Adição entre parseFloat + número de === : ${
          parsedFloat + numberCatcher
        }.`
      );
      console.log(
        `Adição entre paresInt + número de === : ${parsedInt + numberCatcher}.`
      );
      console.log(
        `Adição entre unary + número de === : ${unary + numberCatcher}.`
      );
      console.groupEnd();

      console.group(`Subtração de mesmo valor e mesmos tipos "===" :`);
      console.log(
        `Subtração entre string - número de === : ${
          stringCatcher - numberCatcher
        }.`
      );
      console.log(
        `Subtração entre parseFloat - número de === : ${
          parsedFloat - numberCatcher
        }.`
      );
      console.log(
        `Subtração entre paresInt - número de === : ${
          parsedInt + numberCatcher
        }.`
      );
      console.log(
        `Subtração entre unary - número de === : ${unary + numberCatcher}.`
      );
      console.groupEnd();
    }
  }
}
