/* 

Challenge 2: Functional Programming 2

Implement a higher-order function that takes a function and an array of values,
applies the function to each value, and returns an array of the results.
Ensure that the type signature of the higher-order function is expressive and 
handles various function types.

*/

// Declara um tipo como parâmetro, de forma explicita
// Precisa ser passado um tipo para T ao chamar HighOrderFunction
type HighOrderFunction<T> = (array: T[], func: (n: T) => T) => T[];

// Não é declarado um tipo genêrico
// Infere T pelo primeiro argumento passado na função
type InferHighOrderFunction = <T>(array: T[], func: (n: T) => T) => T[];

const multiplyNumbers: InferHighOrderFunction = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    console.log(i)
    array[i] = func(array[i])
  }

  return array
}

const result = multiplyNumbers([1, 2, 3], (n) => n * 2)
const result2 = multiplyNumbers(['a', 'b'], (str) => str.toUpperCase())

// Resolução 2 - Output diferente de Input

type X<T, R> = (array: T[], func: (n: T) => R) => R[]

type InfersHighOrderFunction2 = <T, R>(array: T[], func: (n: T) => R ) => R[];

const stringArrayOfSquaredNumbers: InfersHighOrderFunction2 = (array, func) => {
  let result: ReturnType<typeof func>[] = []

  for (const n of array) {
    result.push(func(n))
  }

  return result
}

const sqareFuncString: (n: number) => string = (val) => val * val + ''

const result3 = stringArrayOfSquaredNumbers([1, 2, 3], sqareFuncString)
