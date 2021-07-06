/* 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */

let numerosPares = [2,4,6,8];
let numerosImpares = numerosPares.map(n => n-1);

console.log(numerosImpares)

 /* 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */

let nomes = ['Ricardo', 'Maria', 'Maria', 'José', 'André'];
let marias = nomes.filter(nome => nome == 'Maria');

console.log(marias);

/* 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados. */

let numeros = [1,5,9,3,7];
console.log(numeros.reduce((acumulador, atual)=>acumulador+'-'+atual))

/*  4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”. */

let animais = ['gato', 'cachorro', 'furão', 'pato'];

let frase = animais.forEach(function(animal){
  console.log("O animal é: "+animal)
})