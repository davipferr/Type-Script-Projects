/*

Challenge 2: Array Operations
You have an array of numbers:

const numbers: number[] = [1, 2, 3, 4, 5];
Write a function filterAndSquare that takes an array of numbers and 
returns a new array with only the even numbers squared.

*/

// Resolução 1 - Sem generics

const filterAndSquare = (arrayNumber: number[]) => {
  return arrayNumber
          .filter(num => num % 2 === 0)
          .map(num => num * num)
}

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(filterAndSquare(numbers))

// Resolução 2 - Com Generics

// Necessário mostrar ao TS que esse tipo de função utiliza um array
type ArrayFunction<T> = (array: T[]) => T[]

const filterAndSquare2: ArrayFunction<number> = (arrayNumber) => {
  return arrayNumber
          .filter(num => num % 2 === 0)
          .map(num => num * num)
}

/* 

Porque não Inferir o tipo do array como no Desafio Object-manipulation?

num apresenta o seguinte erro:

  The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.(2362)

  (parameter) num: T

  que quer dizer que, array pode ser um array que não é do tipo number, assim quebrando a operação

  o método, filterAndSquare, também irá apresentar um erro pelo mesmo motivo,
  a função inferi que será retornado um number[], mas array poder ser de um tipo diferente

*/
