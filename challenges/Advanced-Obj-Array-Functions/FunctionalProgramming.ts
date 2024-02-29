/*

Challenge 3: Functional Programming
Implement a function compose that takes an array of functions and 
returns a new function that applies each function in the array from right to left. 
For example:

const addTwo = (x: number) => x + 2;
const multiplyByThree = (x: number) => x * 3;
const subtractTen = (x: number) => x - 10;

const composedFunction = compose([addTwo, multiplyByThree, subtractTen]);

console.log(composedFunction(5)); // Should output: ((5 - 10) * 3) + 2 = 7

*/

// Resolução 1

// function compose -> Função que recebe um array de funções

/* const addTwo = (x: number) => x + 2;
const multiplyByThree = (x: number) => x * 3;
const subtractTen = (x: number) => x - 10; */

const compose = (x: number, funcs: ((x: number) => number)[]) => {
  return funcs.reduceRight((prev, curr) => curr(prev), x)
}

/* console.log(compose(5, [addTwo, multiplyByThree, subtractTen])); */

// Resolução 2 - Generics

// Type para as funções que realizam um operação matématica
type MathFunction = (x: number) => number;

const addTwo: MathFunction = (x) => x + 2;
const multiplyByThree: MathFunction = (x) => x * 3;
const subtractTen: MathFunction = (x) => x - 10;

// Generic compose function Type
type Compose = <T>(x: T, funcs: ((x: T) => T)[]) => T;

// Compose function
// prev -> valor anterior
// curr -> item atual do array funcs
// curr(prev), x -> aplica a função atual no valor anterior, prev tem o valor inicial de x
// subtractTen -> multiplyByThree -> addTwo
const composeGeneric: Compose = (x, funcs) => funcs.reduceRight((prev, curr) => curr(prev), x);

console.log(composeGeneric(5, [addTwo, multiplyByThree, subtractTen]));