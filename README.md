#7DaysOfCode ;)

Um passo de cada vez!

"Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!".

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

<code>
  console.log( false == '0' );
  console.log( null == undefined );
  console.log( " \t\r\n" == 0 );
  console.log( ' ' == 0 );
</code>

O que não faz necessariamente muito sentido, pois é um falso positivo.

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

<code>

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
</code>

DICA
Você também pode utilizar o próprio navegador para executar esse seu programa, caso ainda não tenha familiaridade com editores de código, como o Visual Studio Code.

Para isso, como eu falei acima, basta você clicar com o botão direito do mouse em qualquer página, selecionar a opção “Inspecionar”, ir na aba “Console” e digitar o seu código. Bem simples, né?

Se você quiser mudar os nomes das variáveis e valores, fique à vontade. Mas jamais imprima algo que não seja verdadeiro, hein!

EXTRA
Separei um artigo da Alura para você aprender mais sobre operadores de comparação.