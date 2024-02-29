
// Error
type MyObj = {
  name: string
  age: string | number
}

const obj: MyObj = {
  name: 'a',
  age: 'b',
}

/*

  No index signature with a parameter of type 'string' was found on type 'MyObj'.(7053) 

  TS não consegue inferir que "key" é uma chave válida

*/

for (const key in obj) {
  console.log(obj[key])
}

/* *** OBJ *** */

// Index signature
// define um tipo para a chave, e o valor da chave, de uma prop
// Tipos permitidos em um index signature
// [index: number, string, symbol, template string, union type de algum desses tipos]
// todas as props devem seguir o return type
// é possível criar props ilimitadas

type IndexObj = {
  readonly [index: string]: number | string

  name: string
}

// Assertion
// trata um valor como um tipo específico, sobrescrevendo o tipo padrão
// const userName: string = "Davi"
// const num: number = userName as number

// keyof
// retorna as chaves de um tipo -> union type de literal strings
for (const key in obj) {
  console.log(obj[key as keyof MyObj])
}

// typeof
// retorna o tipo de um expressão ou variável
for (const key in obj) {
  console.log(obj[key as keyof typeof obj])
}

// key type number, and key type string"

type Animal = {
  name: string;
}
 
type Dog = Animal & {
  breed: string;
}

// type safety -> 1 -> "1"
// [key: number]: subtype do tipo que é retornado no [key: string]

type Index = {
  [key: number]: Animal
  [key: string]: Dog
}

const obj = {
  1: {name: "Dog"},
  "1": {name: "Dog", breed: "Dog"},
}

// ambos retornam o valor de tipo Dog
// Dog type percebe que o valor tem o tipo errado, quando seguido o type safety
const animal: Animal = obj[1];
const dog: Dog = obj["1"];

/* *** ARRAY ****/

// quando um array indexado com um número, deve retornar uma string
type IndexedArray = {
 [index: number]: string
}



