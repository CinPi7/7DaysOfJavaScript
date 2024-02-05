## 7DaysOfCode

Um exercício, que consiste em revisar conceitos práticos importantes do JavaScript. Este repositório é inspirado pela Rafaela Ballerini. :)

"Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro. Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução. Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:".

<code>
  console.log( false == '0' );
  console.log( null == undefined );
  console.log( " \t\r\n" == 0 );
  console.log( ' ' == 0 );
</code>

Mas os resultados são falso positivos.

Com isso, alguns erros comuns foram expostos numa pequena interface, onde pode-se brincar com as duas variáveis, como string e number, number e number, string e string.
